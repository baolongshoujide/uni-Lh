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
    <view class="category-item" v-for="item in list" :key="item.id" @tap="openCategory(item.name)">
      <image class="icon" :src="item.icon"></image>
      <text class="text">{{ item.name }}</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
/* 前台类目 */
@import './style/CategoryPanel.scss';
</style>
