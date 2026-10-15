import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMenberOrderPreAPI = () => {
  return http.get<OrderPreResult>('/member/order/pre')
}
