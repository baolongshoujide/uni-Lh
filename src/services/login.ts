import { http } from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  code: string
  encryptedData: string
  iv: string
}

export const getLoginWxMinAPI = (data: LoginParams) => {
  return http.post<LoginResult>('/login/wxMin', data)
}

export const getLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http.post<LoginResult>('/login/wxMin/simple', { phoneNumber })
}
