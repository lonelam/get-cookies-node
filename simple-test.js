const { get_cookies } = require('./index')

async function main() {
  const cookie = await get_cookies('https://juejin.cn')
  console.info(cookie)
}
// console.assert(plus100(0) === 100, 'Simple test failed')

main().then(() => {
  console.info('Simple test passed')
})
