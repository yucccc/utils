import { expect, test } from 'vitest'
import { getURLParameters } from '../url'
test('getURLParameters', () => {
    expect(getURLParameters('https://vitest.dev/?a=1&b=2')).toEqual({ a: '1', b: '2' })
})
