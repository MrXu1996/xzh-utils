export function dropRight (array, count=1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index < array.length-count)
}