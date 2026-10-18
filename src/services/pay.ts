import type { OrderResult } from '@/types/order'
import { http } from '@/utils/http'

export const getPayWxPayMinPayAPI = (data: { orderId: string }) => {
  return http.get<WechatMiniprogram.RequestPaymentOption>('/pay/wxPay/miniPay', data)
}

export const getPayMockAPI = (data: { orderId: string }) => {
  return http.get('/pay/mock', data)
}

export const getMemberOrderConsignmentByIdAPI = (id: string) => {
  return http.get(`/member/order/consignment/${id}`)
}

export const putMemberOrderIdReceiptAPI = (id: string) => {
  return http.put<OrderResult>(`/member/order/${id}/receipt`)
}
