import type { OrderCreateParams, OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

export const getMenberOrderPreAPI = () => {
  return http.get<OrderPreResult>('/member/order/pre')
}

export const getMenberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return http.get<OrderPreResult>('/member/order/pre/now', data)
}

export const postMemberOrderAPI = (data: OrderCreateParams) => {
  return http.post<{ id: string }>('/member/order', data)
}
