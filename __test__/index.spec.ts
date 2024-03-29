import test from 'ava'

import { getCookieUntilContains } from '../index'

test('sync function from native code', async (t) => {
  const cookie = await getCookieUntilContains('https://juejin.cn', 'Token=')
  t.regex(cookie, /Token=/)
})
