import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'

export const getHomeBannerAPI = (distributionSite = 1) => {
  return http.get<BannerItem[]>('/home/banner', { distributionSite })
}

export const getHomeCategoryAPI = () => {
  return http.get<CategoryItem[]>('/home/category/mutli')
}

export const getHomeHotAPI = () => {
  return http.get<HotItem[]>('/home/hot/mutli')
}

export const getHomeGuessLikeAPI = (data?: PageParams) => {
  return http.get<PageResult<GuessItem>>('/home/goods/guessLike', data)
}
