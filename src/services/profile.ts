import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return http.get<ProfileDetail>('/member/profile')
}

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http.put<ProfileDetail>('/member/profile', data)
}
