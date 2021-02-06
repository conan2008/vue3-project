// import { kebabCase } from 'lodash'
import { createApp } from 'vue'

/**
 * @description 使用webpack api自动注册全局组件
 * @param {vue} app 当前应用实例
 * @returns {void} void
 */
export function registeGlobalComponent(
  app: ReturnType<typeof createApp>
): void {
  const files = require.context('./', true, /\.(vue|ts)$/)
  files.keys().forEach(key => {
    const config = files(key)
    const name = key.replace(/^\.\//, '').replace(/\.\w+$/, '')
    app.component(name, config.default || config)
  })
}
