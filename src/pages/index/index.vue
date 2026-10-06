<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home.ts'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home.js'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { LhGuessInstance } from '@/component.js'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerList = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerList()
})
const guessRef = ref<LhGuessInstance>()
const Onscrolltolower = () => {
  guessRef.value?.getGuesslike()
}
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view @scrolltolower="Onscrolltolower" scroll-y style="flex: 1">
    <LhSwiper :list="bannerList"></LhSwiper>
    <CategoryPanel></CategoryPanel>
    <HotPanel></HotPanel>
    <LhGuess ref="guessRef"></LhGuess>
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
