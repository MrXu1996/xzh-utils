export function chunk (array, size) {
  if (array.length===0) {
    return []
  }
  size = size || 1

  const bigArr = []
  let smallArr = []

  array.forEach(item => {
    if (smallArr.length===0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if (smallArr.length===size) {
      smallArr = []
    }
  })

  return bigArr
}