// import { get_cookies } from './index'
const { getCookieUntilContains } = require('./index')

async function main() {
  const cookie = await getCookieUntilContains('https://zhihu.com/', 'captcha_ticket_v2=')
  console.info(cookie)
}
// console.assert(plus100(0) === 100, 'Simple test failed')

main().then(() => {
  console.info('Simple test passed')
})
