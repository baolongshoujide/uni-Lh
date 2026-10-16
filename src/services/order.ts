import type { GoodsResult } from '@/types/goods'
import type { OrderCreateParams, OrderPreResult, OrderResult } from '@/types/order'
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

export const getMemberOrderIdAPI = (id: string) => {
  return http.get<OrderResult>(`/member/order/${id}`)
}
// 再次购买
export const getMemberOrderRepurchaseIdAPI = (id: string) => {
  return http.get<OrderPreResult>(`/member/order/repurchase/${id}`)
}
