/* 
实现函数防抖
- 语法: debounce(callback, wait)
- 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `callback`
*/
export function debounce (callback, wait) {
  // 用来保存定时器任务的标识id
  let timeoutId = -1 
  // 返回一个事件监听函数(也就是防抖函数)
  return function (event) {
    console.log('debounce event')
    // 清除未执行的定时器任务
    if (timeoutId!==-1) {
      clearTimeout(timeoutId)
    }
    // 启动延迟 await 时间后执行的定时器任务
    timeoutId = setTimeout(() => {
      // 调用 callback 处理事件
      callback.call(this, event)
      // 处理完后重置标识
      timeoutId = -1
    }, wait)
  }
}