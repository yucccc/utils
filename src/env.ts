// 判断是否浏览器环境
export function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
