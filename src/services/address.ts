import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const addMemberAddressAPI = (data: AddressParams) => {
  return http.post('/member/address', data)
}

export const putMemberAddressIdAPI = (id: string, data: AddressParams) => {
  return http.put(`/member/address/${id}`, data)
}

export const getMemberAddressAPI = () => {
  return http.get<AddressItem[]>('/member/address')
}

export const getMemberAddressIdAPI = (id: string) => {
  return http.get<AddressItem>(`/member/address/${id}`)
}
export const deleteMemberAddressIdAPI = (id: string) => {
  return http.delete(`/member/address/${id}`)
}
