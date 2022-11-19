import { expect, test } from 'vitest'
import { getURLParameters } from '../url'

test('getURLParameters', () => {

    expect(getURLParameters('https://vitest.dev/?a=1&b=2')).toEqual({ a: '1', b: '2' })

    expect(getURLParameters('')).toEqual({})

    // @ts-ignore
    // expect(getURLParameters(null)).toEqual({})

    expect(getURLParameters('https://a.com/search')).toEqual({})
    expect(getURLParameters('a.com?a=b#123')).toEqual({ a: 'b' })


    expect(getURLParameters('?a=b#123')).toEqual({ a: 'b' })

    expect(getURLParameters('a=b#123')).toEqual({ a: 'b' })

})


test(`getURLParameters() of %E2%AD%90 is %E2%AD%90`, () => {
    expect(getURLParameters('https://a.com/search?q=%E2%AD%90')).toEqual({ q: '%E2%AD%90' })
})

test(`getURLParameters() of Multiple parameters`, () => {

    expect(getURLParameters('?a=1&a=2&a=3')).toEqual({ a: '3' })

})

