import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getHomeGuessLikeAPI } from '@/services/home'
import { getCategoryTopAPI } from '@/services/category'
import { getHotRecommendAPI } from '@/services/hot'
import type { GoodsItem } from '@/types/global'

const hotUrls = ['/hot/preference', '/hot/inVogue', '/hot/oneStop', '/hot/new']

export const useGoodsStore = defineStore('goods', () => {
  // 合并后的商品列表，以及加载状态。
  const allGoods = ref<GoodsItem[]>([])
  const isLoaded = ref(false)
  const isLoading = ref(false)

  // 分类接口一次返回各分类下的商品，展平成一个数组。
  const getCategoryGoods = async () => {
    const res = await getCategoryTopAPI()
    const goods: GoodsItem[] = []
    for (const category of res.result) {
      for (const child of category.children) goods.push(...child.goods)
    }
    return goods
  }

  // 猜你喜欢接口是分页的，逐页取完商品。
  const getGuessGoods = async () => {
    const firstPage = await getHomeGuessLikeAPI({ page: 1, pageSize: 10 })
    const goods = [...firstPage.result.items]

    for (let page = 2; page <= firstPage.result.pages; page++) {
      const res = await getHomeGuessLikeAPI({ page, pageSize: firstPage.result.pageSize })
      goods.push(...res.result.items)
    }
    return goods
  }

  // 读取一个热门推荐类型下各子分类的商品和后续分页。
  const getHotGoods = async (url: string) => {
    const firstPage = await getHotRecommendAPI(url, { subType: '', page: 1, pageSize: 10 })
    const goods: GoodsItem[] = []

    for (const subtype of firstPage.result.subTypes) {
      goods.push(...subtype.goodsItems.items)
      for (let page = 2; page <= subtype.goodsItems.pages; page++) {
        const res = await getHotRecommendAPI(url, {
          subType: subtype.id,
          page,
          pageSize: subtype.goodsItems.pageSize,
        })
        const currentSubtype =
          res.result.subTypes.find((item) => item.id === subtype.id) ?? res.result.subTypes[0]
        if (currentSubtype) goods.push(...currentSubtype.goodsItems.items)
      }
    }
    return goods
  }

  // 搜索框首次获得焦点时调用；全部来源加载完成后统一去重。
  const loadAllGoods = async () => {
    // 已加载或正在加载时不重复请求。
    if (isLoaded.value || isLoading.value) return
    isLoading.value = true

    const [categoryGoods, guessGoods, hotGoodsLists] = await Promise.all([
      getCategoryGoods().catch(() => undefined),
      getGuessGoods().catch(() => undefined),
      Promise.all(hotUrls.map((url) => getHotGoods(url).catch(() => []))),
    ])

    const goods = [...(categoryGoods ?? []), ...(guessGoods ?? [])]
    for (const list of hotGoodsLists) {
      if (list) goods.push(...list)
    }

    // 按商品 id 去重，只保留第一次出现的商品。
    const uniqueGoods: GoodsItem[] = []
    for (const item of goods) {
      let isDuplicate = false
      for (const savedItem of uniqueGoods) {
        if (savedItem.id === item.id) {
          isDuplicate = true
          break
        }
      }
      if (item?.id && !isDuplicate) uniqueGoods.push(item)
    }

    allGoods.value = uniqueGoods
    isLoaded.value = allGoods.value.length > 0
    isLoading.value = false
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
