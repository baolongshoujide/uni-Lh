import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryTopAPI } from '@/services/category'
import type { GoodsItem } from '@/types/global'

export const useGoodsStore = defineStore('goods', () => {
  // 合并后的商品列表，以及加载状态。
  const allGoods = ref<GoodsItem[]>([])
  const isLoaded = ref(false)
  const isLoading = ref(false)

  // 搜索只加载分类接口返回的商品，避免焦点事件触发多个推荐接口和分页请求。
  const loadAllGoods = async () => {
    if (isLoaded.value || isLoading.value) return
    isLoading.value = true

    try {
      const res = await getCategoryTopAPI()
      const uniqueGoods: GoodsItem[] = []
      const seenIds = new Set<string>()

      for (const category of res.result) {
        for (const child of category.children) {
          for (const item of child.goods) {
            if (item?.id && !seenIds.has(item.id)) {
              seenIds.add(item.id)
              uniqueGoods.push(item)
            }
          }
        }
      }

      allGoods.value = uniqueGoods
      isLoaded.value = true
    } catch (error) {
      console.error('加载搜索商品失败', error)
    } finally {
      isLoading.value = false
    }
  }

  // 在商品名称中做不区分大小写的本地关键词匹配。
  const searchGoods = (keyword: string) => {
    const normalizedKeyword = keyword.trim().toLocaleLowerCase()
    if (!normalizedKeyword) return []

    return allGoods.value.filter((item) =>
      item.name.toLocaleLowerCase().includes(normalizedKeyword),
    )
  }

  return { allGoods, isLoaded, isLoading, loadAllGoods, searchGoods }
})
