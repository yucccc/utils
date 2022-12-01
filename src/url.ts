import { isBrowser } from "./env";
/**
 * 获取url上的参数
 * @param url url地址 默认值 window.location.href
 * @returns {}
 */
export const getURLParameters = <T extends object>(url: string): T => {
    if (!url) return {} as T
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => {
            // 带有#号认为是锚点
            const v2 = v.slice(v.indexOf('=') + 1).split('#')[0]
            const key = v.slice(0, v.indexOf('='))
            // @ts-ignore
            a[key] = v2
            return a
        },
        {} as T
    );
}
