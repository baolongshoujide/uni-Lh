import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const addCartAPI = (data: { skuId: string; count: number }) => {
  return http.post('/member/cart', data)
}

export const getCartAPI = () => {
  return http.get<CartItem[]>('/member/cart')
}

export const deleteCartAPI = (data: { ids: string[] }) => {
  return http.delete('/member/cart', data)
}
