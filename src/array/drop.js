export function drop (array, count=1) {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index>=count)
}