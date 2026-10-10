import type { LhGuessInstance } from '@/component'
import { ref } from 'vue'
// 猜你喜欢封装函数
export const useGuessList = () => {
  // 获取guess实例化对象
  const guessRef = ref<LhGuessInstance>()
  //   设置触底事件时触发的函数
  const OnScrolltolower = () => {
    guessRef.value?.getGuesslike()
  }
  return {
    guessRef,
    OnScrolltolower,
  }
}
