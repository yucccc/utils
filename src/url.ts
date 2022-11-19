/**
 * 获取url上的参数
 * @param url url地址 默认值 window.location.href
 * @returns {}
 */
export const getURLParameters = <T extends object>(url: string): T => {
    if (!url) return {} as T
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => (
            // @ts-ignore
            (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
        ),
        {} as T
    );
}
