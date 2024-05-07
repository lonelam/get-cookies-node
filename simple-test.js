// import { get_cookies } from './index'
const { getCookieUntilContains } = require('./index')

async function main() {
  const cookie = await getCookieUntilContains('https://juejin.cn', 'Token=')
  await new Promise((resolve) => {
    setTimeout(resolve, 10000)
  })
  console.info(cookie)
}
// console.assert(plus100(0) === 100, 'Simple test failed')

main().then(() => {
  console.info('Simple test passed')
})
