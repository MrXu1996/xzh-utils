export function pull (array, ...values) {
  if (array.length===0 || values.length===0) {
    return []
  }
  
  var result = []
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
     if (values.indexOf(item)!==-1) {
      array.splice(index, 1)
      result.push(item)
      index--
    }
  }

  return result
}