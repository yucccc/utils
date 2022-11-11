function _createDom() {
    const result = new Map()
    return function (tag: string) {
        if (!result.has(tag)) {
            result.set(tag, _createDom())
        }
        return result.get(tag)
    }
}
export const createDom = _createDom()