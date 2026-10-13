import { http } from '@/utils/http'

export const addCartAPI = (data: { skuId: string; count: number }) => {
  return http.post('/member/cart', data)
}
