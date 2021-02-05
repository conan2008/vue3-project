/**
 * request全局配置
 */
interface ConfigOptions {
  baseUrl: object
  resultCode: number | string
  defaultHeaders: string
  requestTimeout: number
}

const config: ConfigOptions = {
  /**
   * api请求基础路径
   */
  baseUrl: {
    // 开发环境接口前缀
    dev: 'https://www.fastmock.site/mock/33ef7f7031f64e428a91472076f06c92',
    // 生产环境接口前缀
    pro: 'https://www.fastmock.site/mock/33ef7f7031f64e428a91472076f06c92',
    // 测试环境接口前缀
    test: 'http://mockjs.test.cn'
  },

  /**
   * 接口成功返回状态码
   */
  resultCode: '1',

  /**
   * 接口请求超时时间
   */
  requestTimeout: 5000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  defaultHeaders: 'application/json'
}

export default config
