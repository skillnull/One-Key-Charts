module.exports = {
  alias: {},
  hostname: '0.0.0.0',
  port: 8080,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: true,
  // 反向代理
  proxy: {
    'api': {
      target: 'http://www.skillnull.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}