export function clone(target) {
  if (target!=null && typeof target==='object') {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  } else {
    return target
  }
}