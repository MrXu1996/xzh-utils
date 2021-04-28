/* 
实现函数节流
- 语法: throttle(callback, wait)
- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次
*/
export function throttle(callback, wait) {
  let start = 0
  // 返回一个事件监听函数(也就是节流函数)
  return function (event) {
    console.log('throttle event')
    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数
    const current = Date.now()
    if ( current - start > wait) {
      callback.call(this, event) // 需要指定this和参数
      start = current
    }
  }
}