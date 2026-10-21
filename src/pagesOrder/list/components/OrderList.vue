<script setup lang="ts">
import { OrderState, orderStateList } from '@/services/constants'
import { deleteMemberOrderAPI, getMemberOrderAPI } from '@/services/order'
import type { OrderItem, OrderListParams } from '@/types/order'
import { onMounted, ref } from 'vue'
import { getPayMockAPI, getPayWxPayMinPayAPI } from '@/services/pay'
import PageSkeleton from './PageSkeleton.vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 样式调试时使用静态订单，调试完成后改为 false 即恢复接口数据。
const isStaticStylePreview = false

const props = defineProps<{
  orderState: number
}>()

const queryParams: OrderListParams = {
  page: 1,
  pageSize: 10,
  orderState: props.orderState,
}

const orderList = ref<OrderItem[]>([])
const isInitialLoading = ref(!isStaticStylePreview)
const isLoading = ref(false)
const hasMore = ref(true)
let currentOrderRequest: Promise<void> | undefined

// 单条本地模拟订单：不调用接口，专门用于调整订单卡片样式。
const staticOrder: OrderItem = {
  id: 'style-preview-order',
  orderState: OrderState.DaiShouHuo,
  countdown: -1,
  skus: [
    {
      id: 'style-preview-sku',
      spuId: 'style-preview-goods',
      name: '朱炳仁 · 铜忠义千秋关公风水摆件',
      attrsText: '忠义千秋（大）',
      quantity: 1,
      curPrice: 14897,
      // 使用项目已有占位图，便于同时调整图片区域尺寸。
      image: '/static/images/blank.png',
    },
  ],
  receiverContact: '模拟收货人',
  receiverMobile: '13800000000',
  receiverAddress: '静态样式调试地址',
  createTime: '2026-10-21 00:08:49',
  totalMoney: 14897,
  postFee: 0,
  payMoney: 14897,
  totalNum: 1,
}

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
  if (isStaticStylePreview) return
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
  if (isStaticStylePreview) return
  if (isLoading.value || !hasMore.value) return
  try {
    await getMemberOrder()
  } catch {
    uni.showToast({ title: '加载失败，请重试', icon: 'none' })
  }
}

onMounted(async () => {
  if (isStaticStylePreview) {
    orderList.value = [staticOrder]
    hasMore.value = false
    isInitialLoading.value = false
    return
  }

  try {
    await getMemberOrder(true)
  } catch {
    uni.showToast({ title: '加载失败，请重试', icon: 'none' })
  } finally {
    isInitialLoading.value = false
  }
})
</script>

<template>
  <PageSkeleton v-if="isInitialLoading"></PageSkeleton>
  <scroll-view
    v-else
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
@import './style/OrderList.scss';
</style>
