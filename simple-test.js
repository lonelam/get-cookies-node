// import { get_cookies } from './index'
const { getCookies } = require('./index')

async function main() {
  const cookie = await getCookies('https://zhihu.com/')
  console.info(cookie)
}
// console.assert(plus100(0) === 100, 'Simple test failed')

main().then(() => {
  console.info('Simple test passed')
})
