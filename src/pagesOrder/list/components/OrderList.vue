<script setup lang="ts">
import { OrderState, orderStateList } from '@/services/constants'
import { deleteMemberOrderAPI, getMemberOrderAPI } from '@/services/order'
import type { OrderItem, OrderListParams } from '@/types/order'
import { onMounted, ref } from 'vue'
import { getPayMockAPI, getPayWxPayMinPayAPI } from '@/services/pay'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const props = defineProps<{
  orderState: number
}>()

const queryParams: OrderListParams = {
  page: 1,
  pageSize: 10,
  orderState: props.orderState,
}

const orderList = ref<OrderItem[]>([])
const isLoading = ref(false)
const hasMore = ref(true)
let currentOrderRequest: Promise<void> | undefined

const getMemberOrder = async (reset = false) => {
  if (isLoading.value) {
    // 刷新和删除后的重载不能被正在进行的分页请求吞掉。
    if (reset && currentOrderRequest) {
      await currentOrderRequest.catch(() => undefined)
      return getMemberOrder(true)
    }
    return
  }
  if (!reset && !hasMore.value) return

  const page = reset ? 1 : queryParams!.page! + 1
  isLoading.value = true
  const request = (async () => {
    try {
      const res = await getMemberOrderAPI({ ...queryParams, page })
      orderList.value = reset ? res.result.items : [...orderList.value, ...res.result.items]
      queryParams.page = page
      hasMore.value = res.result.items.length > 0 && page < res.result.pages
    } finally {
      isLoading.value = false
    }
  })()
  currentOrderRequest = request
  try {
    await request
  } finally {
    if (currentOrderRequest === request) currentOrderRequest = undefined
  }
}

const onOrderPay = async (id: string) => {
  console.log('DEV:', import.meta.env.DEV)
  if (!import.meta.env.DEV) {
    await getPayMockAPI({ orderId: id })
  } else {
    // #ifdef MP-WEIXIN
    const res = await getPayWxPayMinPayAPI({ orderId: id })
    wx.requestPayment(res.result)
    // #endif
  }
  uni.showToast({
    title: '支付成功',
  })
  getMemberOrder(true)
}

const onOrderDelete = (id: string) => {
  uni.showModal({
    content: '确认删除该订单吗？',
    success: async ({ confirm }) => {
      if (!confirm) return

      try {
        await deleteMemberOrderAPI({ ids: [id] })
        orderList.value = orderList.value.filter((item) => item.id !== id)
        uni.showToast({ title: '删除成功' })
      } catch {
        uni.showToast({ title: '删除失败，请重试', icon: 'none' })
      }
    },
  })
}

const isRefreshing = ref(false)

const onRefresherRefresh = async () => {
  if (isRefreshing.value) return

  isRefreshing.value = true
  try {
    await getMemberOrder(true)
  } catch {
    uni.showToast({ title: '刷新失败，请重试', icon: 'none' })
  } finally {
    isRefreshing.value = false
  }
}

const onScrollToLower = async () => {
  if (isLoading.value || !hasMore.value) return
  try {
    await getMemberOrder()
  } catch {
    uni.showToast({ title: '加载失败，请重试', icon: 'none' })
  }
}

onMounted(() => {
  getMemberOrder(true).catch(() => {
    uni.showToast({ title: '加载失败，请重试', icon: 'none' })
  })
})
</script>

<template>
  <scroll-view
    scroll-y
    class="orders"
    refresher-enabled
    refresher-default-style="white"
    refresher-background="#080c18"
    :refresher-triggered="isRefreshing"
    @refresherrefresh="onRefresherRefresh"
    @scrolltolower="onScrollToLower"
  >
    <view class="card" v-for="item in orderList" :key="item.id">
      <!-- 订单信息 -->
      <view class="status">
        <text class="date">{{ item.createTime }}</text>
        <!-- 订单状态文字 -->
        <text>{{ orderStateList[item.orderState].text }}</text>
        <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
        <text
          class="icon-delete"
          v-if="item.orderState >= OrderState.DaiPingJia"
          @tap.stop="onOrderDelete(item.id)"
        ></text>
      </view>
      <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
      <navigator
        v-for="sku in item.skus"
        :key="sku.id"
        class="goods"
        :url="`/pagesOrder/detail/detail?id=${item.id}`"
        hover-class="none"
      >
        <view class="cover">
          <image mode="aspectFit" :src="sku.image"></image>
        </view>
        <view class="meta">
          <view class="name ellipsis">{{ sku.name }}</view>
          <view class="type">{{ sku.attrsText }}</view>
        </view>
      </navigator>
      <!-- 支付信息 -->
      <view class="payment">
        <text class="quantity">共{{ item.totalNum }}件商品</text>
        <text>实付</text>
        <text class="amount"> <text class="symbol">¥</text>{{ item.payMoney.toFixed(2) }}</text>
      </view>
      <!-- 订单操作按钮 -->
      <view class="action">
        <!-- 待付款状态：显示去支付按钮 -->
        <template v-if="item.orderState === 1">
          <view class="button primary" @tap="onOrderPay(item.id)">去支付</view>
        </template>
        <template v-else>
          <navigator
            class="button secondary"
            :url="`/pagesOrder/create/create?orderId=${item.id}`"
            hover-class="none"
          >
            再次购买
          </navigator>
          <!-- 待收货状态: 展示确认收货 -->
          <view v-if="item.orderState === 3" class="button primary">确认收货</view>
          <view v-if="item.orderState === OrderState.DaiPingJia" class="button primary">评价</view>
        </template>
      </view>
    </view>
    <!-- 底部提示文字 -->
    <view
      v-if="isLoading || !hasMore"
      class="loading-text"
      :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
    >
      {{ isLoading ? '正在加载...' : orderList.length ? '没有更多数据了' : '暂无订单' }}
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
// 订单列表
.orders {
  height: 100%;

  .card {
    min-height: 100rpx;
    padding: 20rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: rgba(20, 30, 50, 0.75);

    &:last-child {
      padding-bottom: 40rpx;
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 28rpx;
    color: #96a8c2;
    margin-bottom: 15rpx;

    .date {
      color: #96a8c2;
      flex: 1;
    }

    .primary {
      color: #ffb547;
    }

    .icon-delete {
      line-height: 1;
      margin-left: 10rpx;
      padding-left: 10rpx;
      border-left: 1rpx solid #e3e3e3;
    }
  }

  .goods {
    display: flex;
    margin-bottom: 20rpx;

    .cover {
      width: 170rpx;
      height: 170rpx;
      margin-right: 20rpx;
      border-radius: 10rpx;
      overflow: hidden;
      position: relative;
    }

    .quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      line-height: 1;
      padding: 6rpx 4rpx 6rpx 8rpx;
      font-size: 24rpx;
      color: #fff;
      border-radius: 10rpx 0 0 0;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .meta {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      height: 80rpx;
      font-size: 26rpx;
      color: #e8f2ff;
    }

    .type {
      line-height: 1.8;
      padding: 0 15rpx;
      margin-top: 10rpx;
      font-size: 24rpx;
      align-self: flex-start;
      border-radius: 4rpx;
      color: #96a8c2;
      background-color: #080c18;
    }

    .more {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rpx;
      color: #e8f2ff;
    }
  }

  .payment {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 1;
    padding: 20rpx 0;
    text-align: right;
    color: #96a8c2;
    font-size: 28rpx;
    border-bottom: 1rpx solid rgba(0, 184, 255, 0.2);

    .quantity {
      font-size: 24rpx;
      margin-right: 16rpx;
    }

    .amount {
      color: #e8f2ff;
      margin-left: 6rpx;
    }

    .symbol {
      font-size: 20rpx;
    }
  }

  .action {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20rpx;

    .button {
      width: 180rpx;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20rpx;
      border-radius: 60rpx;
      border: 1rpx solid rgba(0, 184, 255, 0.2);
      font-size: 26rpx;
      color: #e8f2ff;
    }

    .secondary {
      color: #00b8ff;
      border-color: #00b8ff;
    }

    .primary {
      color: #fff;
      background-color: #00b8ff;
    }
  }

  .loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #96a8c2;
    padding: 20rpx 0;
  }
}
</style>
