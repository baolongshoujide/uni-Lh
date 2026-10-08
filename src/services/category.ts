import type { CategoryTopItem } from '@/types/category'
import { http } from '@/utils/http'

export const getCategoryTopAPI = () => {
  return http.get<CategoryTopItem[]>('/category/top')
}
