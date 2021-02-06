import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate' // vuex缓存
import modules from './modules'
import { Test1StateType } from './modules/test1/state'

// vuex state 的模块的类型
type ModuleType = {
  test1: Test1StateType
}

// 所有的StateType
export type StateType = ModuleType

const store: Store<StateType> = createStore({
  strict: true,
  modules: { ...modules },
  plugins:
    process.env.NODE_ENV !== 'production'
      ? [
          createLogger(),
          createPersistedState({
            paths: ['test1']
          })
        ]
      : [
          createPersistedState({
            paths: ['test1']
          })
        ]
})

export default store
