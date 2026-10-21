<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'
defineProps<{
  list: BannerItem[]
}>()

const activeIndex = ref(0)
const swiperChange: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail?.current
}
</script>

<template>
  <view class="carousel">
    <swiper @change="swiperChange" :circular="true" :autoplay="false" :interval="3000">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import '@/components/style/LhSwiper.scss';
</style>
