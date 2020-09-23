import path from 'path'

module.exports = {
  alias: {},
  proxy: {
    '/api': {
      target: 'http://www.skillnull.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}