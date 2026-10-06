import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
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
