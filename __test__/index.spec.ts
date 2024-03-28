import test from 'ava'

import { getCookies } from '../index'

test('sync function from native code', async (t) => {
  const cookie = await getCookies('https://juejin.cn')
  t.regex(cookie, /sessionid=/)
})
