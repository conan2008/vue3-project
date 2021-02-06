import { Module } from 'vuex'
import { StateType } from '@/types'

const state = {
  name: 'zhangy',
  age: 31
}

type Test1StateType = typeof state

const test1: Module<Test1StateType, StateType> = {
  namespaced: true,
  ...state
}

export { Test1StateType, state }
export default test1
