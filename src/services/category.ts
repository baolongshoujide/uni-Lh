import type { CategoryTopItem, EmptyObject } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http.get<CategoryTopItem[]>('/category/top')
}

export const getSearchTipsAPI = (keyword: string) => {
  return http.get<any>('/search/tips', { keyword })
}

export const postSearchAll = (data: EmptyObject) => {
  return http.post<any>('/search/all', data)
}
