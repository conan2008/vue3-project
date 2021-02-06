import { setStoreState } from '../../utils'
// import { Store } from 'vuex'
import { getUser } from '@/api/test'
import { HttpResponse } from '@/types'

const test1Actions = {
  // 请求
  async getData(): Promise<HttpResponse> {
    const res: HttpResponse = await getUser()
    setStoreState('test1', 'name', res.data ? 'test1' : 'test11')
    return new Promise(reslove => {
      reslove(res)
    })
  }
}

type Test1ActionsType = typeof test1Actions

export { Test1ActionsType }
export default test1Actions
