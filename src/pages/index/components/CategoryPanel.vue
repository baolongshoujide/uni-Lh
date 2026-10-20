<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
defineProps<{
  list: CategoryItem[]
}>()

const openCategory = (name: string) => {
  uni.setStorageSync('index-selected-category-name', name)
  uni.switchTab({ url: '/pages/category/category' })
}
</script>

<template>
  <view class="category">
    <view
      class="category-item"
      v-for="item in list"
      :key="item.id"
      @tap="openCategory(item.name)"
    >
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
/* 前台类目 */
.category {
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .category-item {
    width: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;

    .icon {
      display: block;
      flex-shrink: 0;
      width: 100rpx;
      height: 100rpx;
    }

    .text {
      display: block;
      flex-shrink: 0;
      width: 100%;
      text-align: center;
      font-size: 26rpx;
      color: #96a8c2;
    }
  }
}
</style>
