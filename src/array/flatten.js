export function flatten (array) {
  return array.reduce((pre, item) => {
    if (Array.isArray(item) && item.some(cItem => Array.isArray(cItem))) {
      return pre.concat(flatten1(item))
    } else {
      return pre.concat(item)
    }
  }, [])
}