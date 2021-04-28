 export function every (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false
      return false
    }
  }
  return true
}