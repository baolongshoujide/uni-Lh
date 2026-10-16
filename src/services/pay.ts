import { http } from '@/utils/http'

export const getPayWxPayMinPayAPI = (data: { orderId: string }) => {
  return http.get<WechatMiniprogram.RequestPaymentOption>('/pay/wxPay/miniPay', data)
}

export const getPayMockAPI = (data: { orderId: string }) => {
  return http.get('/pay/mock', data)
}
