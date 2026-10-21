<script setup lang="ts">
import { useGuessList } from '@/composables'
import { OrderState, orderStateList } from '@/services/constants'
import {
  deleteMemberOrderAPI,
  getMemberOrderIdAPI,
  getMemberOrderIdLogisticsAPI,
  putMemberOrderIdCancelAPI,
} from '@/services/order'
import type { LogisticItem, OrderResult } from '@/types/order'
import { onLoad, onReady } from '@dcloudio/uni-app'
import { ref } from 'vue'
import PageSkeleton from './components/PageSkeleton.vue'
import {
  getMemberOrderConsignmentByIdAPI,
  getPayMockAPI,
  getPayWxPayMinPayAPI,
  putMemberOrderIdReceiptAPI,
} from '@/services/pay.ts'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 猜你喜欢
const { guessRef, OnScrolltolower } = useGuessList()
// 弹出层组件
const popup = ref<UniHelper.UniPopupInstance>()
// 取消原因列表
const reasonList = ref([
  '商品无货',
  '不想要了',
  '商品信息填错了',
  '地址信息填写错误',
  '商品降价',
  '其它',
])
// 订单取消原因
const reason = ref('')
// 复制内容
const onCopy = (id: string) => {
  // 设置系统剪贴板的内容
  uni.setClipboardData({ data: id })
}
// 获取页面参数
const query = defineProps<{
  id: string
}>()
console.log(query.id)

const order = ref<OrderResult>()
const getMemberOrderId = async () => {
  const res = await getMemberOrderIdAPI(query.id)
  order.value = res.result
  console.log(order.value.orderState)

  if (
    [OrderState.DaiShouHuo, OrderState.DaiPingJia, OrderState.YiWanCheng].includes(
      order.value.orderState,
    )
  ) {
    console.log('可以')

    await getMemberOrderIdLogistics()
  } else {
    console.log('条件不成立')
  }
}
const logisticList = ref<LogisticItem[]>([])
const getMemberOrderIdLogistics = async () => {
  const res = await getMemberOrderIdLogisticsAPI(query.id)
  console.log(111)
  console.log(res)
  console.log(111)
  logisticList.value = res.result.list
}

const pages = getCurrentPages()
const pageInstance = pages.at(-1) as any
console.log(pageInstance)

const OnBuyTwo = () => {
  uni.redirectTo({
    url: `/pagesOrder/create/create?orderId=${query.id}`,
  })
}
const onTimeUp = () => {
  order.value!.orderState = OrderState.YiQuXiao
}

const onOrderPay = async () => {
  console.log('确认是否是开发环境', import.meta.env.DEV)
  if (import.meta.env.DEV) {
    await getPayMockAPI({ orderId: query.id })
    uni.redirectTo({ url: `/pagesOrder/payment/payment?id=${query.id}` })
  } else {
    // #ifdef MP-WEIXIN
    const res = await getPayWxPayMinPayAPI({ orderId: query.id })
    wx.requestPayment(res.result)
    uni.redirectTo({ url: `/pagesOrder/payment/payment?id=${query.id}` })
    // #endif
  }
}

const isDev = import.meta.env.DEV

const onOrderSend = async () => {
  if (isDev) {
    await getMemberOrderConsignmentByIdAPI(query.id)
    uni.showToast({ icon: 'success', title: '发货成功' })
    order.value!.orderState = OrderState.DaiShouHuo
    getMemberOrderId()
  }
}

const onOrderConfirm = () => {
  uni.showModal({
    content: '为保障您的权益，请收到货并确认无误后再确认收货',
    success: async (success) => {
      if (success.confirm) {
        const res = await putMemberOrderIdReceiptAPI(query.id)
        order.value = res.result
        getMemberOrderId()
      }
    },
  })
}

const onOrderDelete = () => {
  uni.showModal({
    content: '是否删除订单',
    success: async (success) => {
      if (success.confirm) {
        await deleteMemberOrderAPI({ ids: [query.id] })
        uni.redirectTo({ url: '/pagesOrder/list/list' })
      }
    },
  })
}

const onOrderCancel = () => {
  uni.showModal({
    content: '是否取消订单',
    success: async (success) => {
      if (success.confirm) {
        await putMemberOrderIdCancelAPI(query.id, { cancelReason: reason.value })
        uni.showToast({ title: '取消成功' })
        uni.redirectTo({ url: '/pagesOrder/list/list' })
      }
    },
  })
}

onReady(() => {
  pageInstance.animate(
    '.navbar', // 选择器
    [{ backgroundColor: 'transparent' }, { backgroundColor: '#080c18' }], // 关键帧信息
    1000, // 动画持续时长
    {
      scrollSource: '#scroller', // scroll-view 的选择器
      startScrollOffset: 0, // 开始滚动偏移量
      endScrollOffset: 50, // 停止滚动偏移量
      timeRange: 1000, // 时间长度
    },
  )
  // 动画效果,导航栏标题
  pageInstance.animate('.navbar .title', [{ color: 'transparent' }, { color: '#e8f2ff' }], 1000, {
    scrollSource: '#scroller',
    timeRange: 1000,
    startScrollOffset: 0,
    endScrollOffset: 50,
  })
  // 动画效果,导航栏返回按钮
  pageInstance.animate('.navbar .back', [{ color: '#e8f2ff' }, { color: '#e8f2ff' }], 1000, {
    scrollSource: '#scroller',
    timeRange: 1000,
    startScrollOffset: 0,
    endScrollOffset: 50,
  })
})
onLoad(() => {
  getMemberOrderId()
})
</script>

<template>
  <!-- 自定义导航栏: 默认透明不可见, scroll-view 滚动到 50 时展示 -->
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="wrap">
      <navigator
        v-if="pages.length > 1"
        open-type="navigateBack"
        class="back icon-left"
      ></navigator>
      <navigator v-else url="/pages/index/index" open-type="switchTab" class="back icon-home">
      </navigator>
      <view class="title">订单详情</view>
    </view>
  </view>
  <!--  -->
  <scroll-view scroll-y class="viewport" id="scroller" @scrolltolower="OnScrolltolower">
    <template v-if="order">
      <!-- 订单状态 -->
      <view class="overview" :style="{ paddingTop: safeAreaInsets!.top + 20 + 'px' }">
        <!-- 待付款状态:展示去支付按钮和倒计时   -->
        <template v-if="order?.orderState === OrderState?.DaiFuKuan">
          <view class="status icon-clock">等待付款111</view>
          <view class="tips">
            <text class="money">应付金额: ¥ 99.00</text>
            <text class="time">支付剩余</text>
            <uni-countdown
              color="#fff"
              splitor-color="#fff"
              :show-day="false"
              :show-hour="false"
              :show-colon="false"
              :second="order?.countdown"
              @timeup="onTimeUp"
            />
          </view>
          <view class="button" @tap="onOrderPay">去支付</view>
        </template>
        <!-- 其他订单状态:展示再次购买按钮 -->
        <template v-else>
          <!-- 订单状态文字   -->
          <view class="status"> {{ orderStateList[order.orderState].text }} </view>
          <view class="button-group">
            <view class="button" @tap="OnBuyTwo" hover-class="none"> 再次购买 </view>
            <!-- 待发货状态：模拟发货,开发期间使用,用于修改订单状态为已发货 -->
            <view
              v-if="isDev && order?.orderState === OrderState?.DaiFaHuo"
              @tap="onOrderSend"
              class="button"
            >
              模拟发货
            </view>
            <view
              v-if="order?.orderState === OrderState?.DaiShouHuo"
              class="button"
              @tap="onOrderConfirm"
              >模拟收货</view
            >
          </view>
        </template>
      </view>
      <!-- 配送状态 -->
      <view class="shipment">
        <!-- 订单物流信息 -->
        <view v-for="item in logisticList" :key="item.id" class="item">
          <view class="message">
            {{ item.text }}
          </view>
          <view class="date"> {{ item.time }} </view>
        </view>
        <!-- 用户收货地址 -->
        <view class="locate">
          <view class="user"> {{ order?.receiverContact }} {{ order?.receiverMobile }} </view>
          <view class="address"> {{ order?.receiverAddress }} </view>
        </view>
      </view>

      <!-- 商品信息 -->
      <view class="goods">
        <view class="item">
          <navigator
            class="navigator"
            v-for="item in order.skus"
            :key="item.id"
            :url="`/pages/goods/goods?id=${item.spuId}`"
            hover-class="none"
          >
            <image class="cover" :src="item.image"></image>
            <view class="meta">
              <view class="name ellipsis">{{ item.name }}</view>
              <view class="type">{{ item.attrsText }}</view>
              <view class="price">
                <view class="actual">
                  <text class="symbol">¥</text>
                  <text>{{ item.curPrice }}</text>
                </view>
              </view>
              <view class="quantity">x{{ item.quantity }}</view>
            </view>
          </navigator>
          <!-- 待评价状态:展示按钮 -->
          <view class="action" v-if="order.orderState === OrderState.DaiPingJia">
            <view class="button primary">申请售后</view>
            <navigator url="" class="button"> 去评价 </navigator>
          </view>
        </view>
        <!-- 合计 -->
        <view class="total">
          <view class="row">
            <view class="text">商品总价: </view>
            <view class="symbol">{{ order?.totalMoney }}</view>
          </view>
          <view class="row">
            <view class="text">运费: </view>
            <view class="symbol">{{ order.postFee }}</view>
          </view>
          <view class="row">
            <view class="text">应付金额: </view>
            <view class="symbol primary">{{ order.payMoney }}</view>
          </view>
        </view>
      </view>

      <!-- 订单信息 -->
      <view class="detail">
        <view class="title">订单信息</view>
        <view class="row">
          <view class="item">
            订单编号: {{ order.id }} <text class="copy" @tap="onCopy(query.id)">复制</text>
          </view>
          <view class="item">下单时间: {{ order.createTime }}</view>
        </view>
      </view>

      <!-- 猜你喜欢 -->
      <LhGuess ref="guessRef" />

      <!-- 底部操作栏 -->
      <view class="toolbar-height" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"></view>
      <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
        <!-- 待付款状态:展示支付按钮 -->
        <template v-if="order.orderState === OrderState.DaiFuKuan">
          <view class="button primary" @tap="onOrderPay"> 去支付 </view>
          <view class="button" @tap="popup?.open?.()"> 取消订单 </view>
        </template>
        <!-- 其他订单状态:按需展示按钮 -->
        <template v-else>
          <view class="button secondary" @tap="OnBuyTwo" hover-class="none"> 再次购买 </view>
          <!-- 待收货状态: 展示确认收货 -->
          <view
            class="button primary"
            v-if="order.orderState === OrderState.DaiShouHuo"
            @tap="onOrderConfirm"
          >
            确认收货
          </view>
          <!-- 待评价状态: 展示去评价 -->
          <view class="button" v-if="order.orderState === OrderState.DaiPingJia"> 去评价 </view>
          <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
          <view
            class="button delete"
            v-if="order.orderState >= OrderState.DaiPingJia"
            @tap="onOrderDelete"
          >
            删除订单
          </view>
        </template>
      </view>
    </template>
    <template v-else>
      <!-- 骨架屏组件 -->
      <PageSkeleton></PageSkeleton>
    </template>
  </scroll-view>
  <!-- 取消订单弹窗 -->
  <uni-popup ref="popup" type="bottom" background-color="#080c18">
    <view class="popup-root">
      <view class="title">订单取消</view>
      <view class="description">
        <view class="tips">请选择取消订单的原因：</view>
        <view class="cell" v-for="item in reasonList" :key="item" @tap="reason = item">
          <text class="text">{{ item }}</text>
          <text class="icon" :class="{ checked: item === reason }"></text>
        </view>
      </view>
      <view class="footer">
        <view class="button" @tap="popup?.close?.()">取消</view>
        <view class="button primary" @tap="onOrderCancel">确认</view>
      </view>
    </view>
  </uni-popup>
</template>

<style lang="scss" scoped>
@import './components/detail.scss';
</style>
