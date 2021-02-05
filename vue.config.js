/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const path = require('path')
// gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 代码压缩
const TerserPlugin = require('terser-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const vueConfig = {
  publicPath: './',
  lintOnSave: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // 跨域代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))

    // 生产环境
    config.when(process.env.NODE_ENV === 'production', config => {
      // gzip压缩
      const productionGzipExtensions = ['html', 'js', 'css']
      config.plugin('CompressionWebpackPlugin').use(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )

      // 代码压缩
      config.plugin('TerserPlugin').use(
        new TerserPlugin({
          terserOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )

      //   config
      //     .plugin('ScriptExtHtmlWebpackPlugin')
      //     .after(`html`)
      //     .use('script-ext-html-webpack-plugin', [
      //       {
      //         inline: /runtime\..*\.js$/
      //       }
      //     ])
      //     .end()

      //   config.optimization.splitChunks({
      //     chunks: 'all',
      //     cacheGroups: {
      //       libs: {
      //         name: 'chunk-libs',
      //         test: /[\\/]node_modules[\\/]/,
      //         priority: 10,
      //         chunks: 'initial'
      //       },
      //       element: {
      //         name: 'chunk-element', // 拆分element
      //         priority: 20, // 权重
      //         test: /[\\/]node_modules[\\/]_?element-plus(.*)/
      //       },
      //       commons: {
      //         name: 'chunk-commons',
      //         test: resolve('src/components'),
      //         minChunks: 3, // 最小使用数
      //         priority: 5,
      //         reuseExistingChunk: true
      //       }
      //     }
      //   })

      //   config.optimization.runtimeChunk('single')
    })
  }
}

module.exports = vueConfig
