export function some (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true
      return true
    }
  }
  return false
}