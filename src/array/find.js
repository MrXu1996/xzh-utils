export function find (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}