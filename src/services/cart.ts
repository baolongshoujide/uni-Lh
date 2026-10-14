import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'
// 添加
export const addCartAPI = (data: { skuId: string; count: number }) => {
  return http.post('/member/cart', data)
}
// 查询
export const getCartAPI = () => {
  return http.get<CartItem[]>('/member/cart')
}
// 删除
export const deleteCartAPI = (data: { ids: string[] }) => {
  return http.delete('/member/cart', data)
}
// 修改
export const putCartAPI = (skuId: string, data: { selected?: boolean; count?: number }) => {
  return http.put(`/member/cart/${skuId}`, data)
}
// 全选和取消
export const putCartSelectAPI = (data: { selected: boolean }) => {
  return http.put(`/member/cart/selected`, data)
}
