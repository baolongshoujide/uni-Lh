import type { ProfileDetail } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfileAPI = () => {
  return http.get<ProfileDetail>('/member/profile')
}
