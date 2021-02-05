import { fetch } from '@/axios/index'

export const getUser = (params: object = {}) => {
  return fetch({ url: '/api/getUser', method: 'get', params })
}
