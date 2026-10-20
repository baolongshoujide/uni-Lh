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

const activeIndex = ref(props.type)
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
      <swiper-item v-for="item in orderTabs" :key="item.orderState">
        <!-- 订单列表 -->
        <OrderList :order-state="item.orderState"></OrderList>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(20, 30, 50, 0.75);
}

// tabs
.tabs {
  display: flex;
  justify-content: space-around;
  line-height: 60rpx;
  margin: 0 10rpx;
  background-color: rgba(20, 30, 50, 0.75);
  box-shadow: 0 4rpx 6rpx rgba(0, 184, 255, 0.12);
  position: relative;
  z-index: 9;

  .item {
    flex: 1;
    text-align: center;
    padding: 20rpx;
    font-size: 28rpx;
    color: #e8f2ff;
  }

  .cursor {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20%;
    height: 6rpx;
    padding: 0 50rpx;
    background-color: #00b8ff;
    /* 过渡效果 */
    transition: all 0.4s;
  }
}

// swiper
.swiper {
  flex: 1;
  min-height: 0;
  background-color: #080c18;
}
</style>
