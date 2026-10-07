import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'

export const getHotRecommendAPI = (url: string, data?: PageParams & { subType: string }) => {
  return http.get<HotResult>(url, data)
}
