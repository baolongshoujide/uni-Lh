<script setup lang="ts">
import { useGuessList } from '@/composables'
import { useMemberStore } from '@/stores'
import { ref } from 'vue'
import PageSkeleton from './components/PageSkeleton.vue'
const memberStore = useMemberStore()
// 猜你喜欢首次加载完成前显示骨架屏。
const isInitialLoading = ref(true)
const onGuessLoaded = () => {
  isInitialLoading.value = false
}
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 订单选项
const orderTypes = [
  { type: 1, text: '待付款', icon: 'icon-currency' },
  { type: 2, text: '待发货', icon: 'icon-gift' },
  { type: 3, text: '待收货', icon: 'icon-check' },
  { type: 4, text: '待评价', icon: 'icon-comment' },
]
// 猜你喜欢分页加载
const { OnScrolltolower, guessRef } = useGuessList()
</script>

<template>
  <PageSkeleton v-if="isInitialLoading"></PageSkeleton>
  <scroll-view
    v-show="!isInitialLoading"
    @scrolltolower="OnScrolltolower"
    class="viewport"
    scroll-y
    enable-back-to-top
  >
    <!-- 个人资料 -->
    <view class="profile" :style="{ paddingTop: (safeAreaInsets?.top ?? 0) + 'px' }">
      <!-- 情况1：已登录 -->
      <view class="overview" v-if="memberStore.profile">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="memberStore.profile.avatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname">
            {{ memberStore.profile.nickname || memberStore.profile.account }}
          </view>
          <navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="overview" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image
            class="avatar gray"
            mode="aspectFill"
            src="../../static/assets/images/Lhlogo.jpg"
          ></image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <text class="tips">点击登录账号</text>
          </view>
        </view>
      </view>
      <navigator class="settings" url="/pagesMember/settings/settings" hover-class="none">
        设置1
      </navigator>
    </view>
    <!-- 我的订单 -->
    <view class="orders">
      <view class="title">
        我的订单
        <navigator class="navigator" url="/pagesOrder/list/list?type=0" hover-class="none">
          查看全部订单<text class="icon-right"></text>
        </navigator>
      </view>
      <view class="section">
        <!-- 订单 -->
        <navigator
          v-for="item in orderTypes"
          :key="item.type"
          :class="item.icon"
          :url="`/pagesOrder/list/list?type=${item.type}`"
          class="navigator"
          hover-class="none"
        >
          {{ item.text }}
        </navigator>
        <!-- 客服 -->
      </view>
    </view>
    <!-- 猜你喜欢 -->
    <view class="guess">
      <LhGuess ref="guessRef" @loaded="onGuessLoaded" />
    </view>
  </scroll-view>
</template>

<style lang="scss" scoped>
@import './components/style/my.scss';
</style>
