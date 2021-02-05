import { setStoreState } from '../../utils'
import { Store } from 'vuex'
import { getUser } from '@/api/test'
import { HttpResponse } from '@/types'
import { getUser } from '@/api/test'

const test1Actions = {
  // 请求
  async getUser(): Promise<HttpResponse> {
    const res = await getUser()
    setStoreState('test1', 'name', data ? data : 'test1')
    return res
  }
}

type Test1ActionsType = keyof typeof test1Actions

export { Test1ActionsType }
export default test1Actions
