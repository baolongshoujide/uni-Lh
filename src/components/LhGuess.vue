<script setup lang="ts">
import { getHomeGuessLikeAPI } from '@/services/home'
import type { PageParams } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { ref } from 'vue'

const emit = defineEmits<{
  loaded: []
}>()

const guessLike = ref<GuessItem[]>([])
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
const finish = ref(false)
const getGuesslike = async () => {
  if (finish.value === true) {
    return uni.showToast({
      icon: 'none',
      title: '已经到底了~',
      duration: 2000,
    })
  }
  try {
    const res = await getHomeGuessLikeAPI(pageParams)
    guessLike.value.push(...res.result.items)
    if (pageParams.page < res.result.pages) {
      pageParams.page++
    } else {
      finish.value = true
    }
  } finally {
    // 通知“我的”页首次推荐数据请求已结束（成功或失败），可以收起骨架屏。
    emit('loaded')
  }
}

const resetDate = () => {
  pageParams.page = 1
  guessLike.value = []
  finish.value = false
}
getGuesslike().catch(() => undefined)
defineExpose({
  getGuesslike,
  resetDate,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLike"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.desc }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '已经到底了~' : '正在加载...' }} </view>
</template>

<style lang="scss" scoped>
@import '@/components/style/LhGuess.scss';
</style>
