<script setup lang="ts">
import cartdetail from './components/cartdetail.vue'
</script>

<template>
  <view class="cart2-page">
    <cartdetail></cartdetail>
  </view>
</template>

<style lang="scss" scoped>
.cart2-page::after {
  content: '';
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(var(--window-bottom) + 25rpx);
  background: #f7f7f8;
  z-index: 2;
  pointer-events: none;
}

.cart2-page :deep(.toolbar) {
  bottom: calc(var(--window-bottom) + 25rpx);
}

.cart2-page :deep(.toolbar-height) {
  height: 120rpx;
}
</style>
