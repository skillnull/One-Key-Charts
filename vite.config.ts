const fs = require('fs')
const dotenv = require('dotenv')
const envFiles = [
  /** default file */ `.env`,
  /** mode file */ `.env.${ process.env.NODE_ENV }`
]
for (const file of envFiles) {
  const envConfig = dotenv.parse(fs.readFileSync(file))
  for (const k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

module.exports = {
  alias: {},
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * Base public path when served in production.
   * @default '/'
   */
  base: process.env.VITE_BASE_URL,
  /**
   * Directory relative from `root` where build output will be placed. If the
   * directory exists, it will be removed before the build.
   * @default 'dist'
   */
  outDir: process.env.VITE_OUTPUT_DIR,
  // 反向代理
  proxy: {
    'api': {
      target: 'http://www.skillnull.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}
