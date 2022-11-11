/**
* 单例模式
* @description 将函数包装为单例方法
* @param {*} fn 
*/
export function toSingleDesign<T extends Function, R>(fn: T): () => R {
    let result: R;
    return function (...args: unknown[]): R {
        if (typeof result !== 'undefined') {
            return result;
        }
        // @ts-ignore
        return (result = fn.apply(this, args))
    }
}