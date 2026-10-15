import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const address = ref<AddressItem>()
  const addressChange = (val: AddressItem) => {
    address.value = val
  }
  return {
    address,
    addressChange,
  }
})
