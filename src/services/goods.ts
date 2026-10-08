import type { GoodsResult } from '@/types/goods'
import { http } from '@/utils/http'

export const getGoodsAPI = (id: string) => {
  return http.get<GoodsResult>('/goods', { id })
}
