import type { GoodsResult } from '@/types/goods'
import type {
  OrderCreateParams,
  OrderListParams,
  OrderListResult,
  OrderLogisticResult,
  OrderPreResult,
  OrderResult,
} from '@/types/order'
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

export const getMemberOrderIdLogisticsAPI = (id: string) => {
  return http.get<OrderLogisticResult>(`/member/order/${id}/logistics`)
}

export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return http.delete('/member/order', data)
}

export const getMemberOrderAPI = (data?: OrderListParams) => {
  return http.get<OrderListResult>('/member/order', data)
}

export const putMemberOrderIdCancelAPI = (id: string, data: { cancelReason: string }) => {
  return http.put(`/member/order/${id}/cancel`, data)
}
