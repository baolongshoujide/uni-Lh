<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home.ts'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home.js'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
const bannerList = ref<BannerItem[]>([])
const getHomeBannerList = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerList()
})
</script>

<template>
  <CustomNavbar></CustomNavbar>
  <LhSwiper :list="bannerList"></LhSwiper>
  <CategoryPanel></CategoryPanel>
  <HotPanel></HotPanel>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
