export function findIndex (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}