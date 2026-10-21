<script setup lang="ts">
import { ref } from 'vue'

import OrderList from './components/OrderList.vue'

// tabs 数据
const orderTabs = ref([
  { orderState: 0, title: '全部' },
  { orderState: 1, title: '待付款' },
  { orderState: 2, title: '待发货' },
  { orderState: 3, title: '待收货' },
  { orderState: 4, title: '待评价' },
])

const props = defineProps<{
  type: number
}>()

// 路由参数 type 可能是字符串，先转成数字，保证当前 swiper 项能正确挂载。
const initialIndex = Number(props.type)
const activeIndex = ref(
  Number.isInteger(initialIndex) && initialIndex >= 0 && initialIndex < orderTabs.value.length
    ? initialIndex
    : 0,
)
const onSwiperChange = (ev: UniHelper.SwiperOnChangeEvent) => {
  console.log(ev)
  activeIndex.value = ev.detail.current
}
</script>

<template>
  <view class="viewport">
    <!-- tabs -->
    <view class="tabs">
      <text
        class="item"
        v-for="(item, index) in orderTabs"
        :key="item.orderState"
        @tap="activeIndex = index"
      >
        {{ item.title }}
      </text>
      <!-- 游标 -->
      <view class="cursor" :style="{ left: activeIndex * 20 + '%' }"></view>
    </view>
    <!-- 滑动容器 -->
    <swiper class="swiper" :current="activeIndex" @change="onSwiperChange">
      <!-- 滑动项 -->
      <swiper-item v-for="(item, index) in orderTabs" :key="item.orderState">
        <!-- 订单列表 -->
        <OrderList v-if="activeIndex === index" :order-state="item.orderState"></OrderList>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss" scoped>
@import './components/style/list.scss';
</style>
