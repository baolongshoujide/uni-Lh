<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeHotAPI, getHomeCategoryAPI } from '@/services/home'
import type { BannerItem, HotItem, CategoryItem } from '@/types/home'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables/index.ts'
// 轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerList = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
// category页面
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryList = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

// Hot页面
const HotList = ref<HotItem[]>([])
const getHomeHot = async () => {
  const res = await getHomeHotAPI()
  HotList.value = res.result
}

// 滚动到底时调用 猜你喜欢 获取数据的方法
const { guessRef, OnScrolltolower } = useGuessList()

// 首屏核心数据还未全部返回时显示骨架屏。
const isLoading = ref(true)
onLoad(async () => {
  // 热门商品单独加载，避免它拖住首屏其余内容。
  getHomeHot().catch(() => undefined)
  try {
    await Promise.allSettled([getHomeBannerList(), getHomeCategoryList()])
  } finally {
    isLoading.value = false
  }
})

// 下拉刷新
const isriggered = ref(false)
const Onrefresherrefresh = async () => {
  isriggered.value = true
  guessRef.value?.resetDate()
  await Promise.all([
    getHomeBannerList(),
    getHomeCategoryList(),
    getHomeHot(),
    guessRef.value?.getGuesslike(),
  ])
  isriggered.value = false
}
</script>

<template>
  <PageSkeleton v-if="isLoading"></PageSkeleton>
  <template v-else>
    <CustomNavbar></CustomNavbar>
    <scroll-view
      refresher-enabled
      @refresherrefresh="Onrefresherrefresh"
      :refresher-triggered="isriggered"
      @scrolltolower="OnScrolltolower"
      scroll-y
      style="flex: 1"
    >
      <LhSwiper :list="bannerList"></LhSwiper>
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <HotPanel :list="HotList"></HotPanel>
      <LhGuess ref="guessRef"></LhGuess>
    </scroll-view>
  </template>
</template>

<style lang="scss" scoped>
//
:global(page) {
  background-color: #080c18;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
