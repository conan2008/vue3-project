import { Test1ActionsType } from '@/store/modules/test1/state'
import { Test2ActionsType } from '@/store/modules/test2/state'

// vuex state 的模块的类型
type ModuleType = {
  test1: Test1ActionsType
  test2: Test2ActionsType
}

// 所有的StateType
export type StateType = ModuleType

// 通用http响
export interface HttpResponse {
  status: number
  statusText: string
  data: {
    code: number
    desc: string
    [key: string]: any
  }
}
