<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import { getHomeBannerAPI, getHomeHotAPI, getHomeCategoryAPI } from '@/services/home'
import type { BannerItem, HotItem, CategoryItem } from '@/types/home'
import type { LhGuessInstance } from '@/component'
import PageSkeleton from '@/components/PageSkeleton.vue'
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
const guessRef = ref<LhGuessInstance>()
const Onscrolltolower = () => {
  guessRef.value?.getGuesslike()
}

const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true

  await Promise.all([getHomeBannerList(), getHomeCategoryList(), getHomeHot()])
  isLoading.value = false
})

// 下拉刷新
const isriggered = ref(false)
const Onrefresherrefresh = async () => {
  console.log('自定义监听事件')
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
  <CustomNavbar></CustomNavbar>
  <scroll-view
    refresher-enabled
    @refresherrefresh="Onrefresherrefresh"
    :refresher-triggered="isriggered"
    @scrolltolower="Onscrolltolower"
    scroll-y
    style="flex: 1"
  >
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <template v-else>
      <LhSwiper :list="bannerList"></LhSwiper>
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <HotPanel :list="HotList"></HotPanel>
      <LhGuess ref="guessRef"></LhGuess>
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
