import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate' // vuex缓存
import modules from './modules'

// vuex state 的模块的类型
type ModuleType = {
  test1: AppStateType
  test2: ConsoleStateType
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
            paths: ['app', 'console', 'user']
          })
        ]
      : [
          createPersistedState({
            paths: ['app', 'console', 'user']
          })
        ]
})

export default store
