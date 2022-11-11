/**
 * 检查对象内是否缺少某个字段 并返回缺少的字段
 * @param needCheckParams 
 * @param isReqParams 
 * @returns string[]
 */
export const checkParamsMiss = function (needCheckParams: object, isReqParams: string[]) {
    // // 非对象直接返回参数校验
    // if (isEmptyObject(needCheckParams)) return isReqParams

    // return isReqParams.filter(key => {
    //     const v = needCheckParams[key]
    //     // 该值为非0假值
    //     if (v !== 0 && !v) {
    //         return key
    //     }
    // })
}