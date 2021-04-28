/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["XUtils"] = factory();
	else
		root["XUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\nfunction chunk (array, size) {\n  if (array.length===0) {\n    return []\n  }\n  size = size || 1\n\n  const bigArr = []\n  let smallArr = []\n\n  array.forEach(item => {\n    if (smallArr.length===0) {\n      bigArr.push(smallArr)\n    }\n    smallArr.push(item)\n    if (smallArr.length===size) {\n      smallArr = []\n    }\n  })\n\n  return bigArr\n}\n\n//# sourceURL=webpack://XUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\nfunction concat (array, ...values) {\n  const arr = [...array]\n  values.forEach(value => {\n    if (Array.isArray(value)) {\n      arr.push(...value)\n    } else {\n      arr.push(value)\n    }\n  })\n  return arr\n}\n\n//# sourceURL=webpack://XUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/* \r\ndifference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)\r\n    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]\r\n*/\r\nfunction difference(arr1, arr2) {\r\n\tif (arr1.length === 0) {\r\n\t\treturn []\r\n\t} else if (arr2.length === 0) {\r\n\t\treturn arr1.slice()\r\n\t}\r\n\treturn arr1.filter(item => arr2.indexOf(item) === -1)\n}\n\n//# sourceURL=webpack://XUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\nfunction drop (array, count=1) {\n  if (array.length === 0 || count >= array.length) {\n    return []\n  }\n\n  return array.filter((item, index) => index>=count)\n}\n\n//# sourceURL=webpack://XUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/dropRight.js":
/*!********************************!*\
  !*** ./src/array/dropRight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\nfunction dropRight (array, count=1) {\n  if (array.length === 0 || count >= array.length) {\n    return []\n  }\n\n  return array.filter((item, index) => index < array.length-count)\n}\n\n//# sourceURL=webpack://XUtils/./src/array/dropRight.js?");

/***/ }),

/***/ "./src/array/every.js":
/*!****************************!*\
  !*** ./src/array/every.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every)\n/* harmony export */ });\n function every (array, callback) {\n  for (let index = 0; index < array.length; index++) {\n    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false\n      return false\n    }\n  }\n  return true\n}\n\n//# sourceURL=webpack://XUtils/./src/array/every.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter(array, callback) {\n  const arr = []\n  for (let index = 0; index < array.length; index++) {\n    if (callback(array[index], index)) {\n      arr.push(array[index])\n    }\n  }\n  return arr\n}\n\n//# sourceURL=webpack://XUtils/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find)\n/* harmony export */ });\nfunction find (array, callback) {\n  for (let index = 0; index < array.length; index++) {\n    if (callback(array[index], index)) {\n      return array[index]\n    }\n  }\n  return undefined\n}\n\n//# sourceURL=webpack://XUtils/./src/array/find.js?");

/***/ }),

/***/ "./src/array/findIndex.js":
/*!********************************!*\
  !*** ./src/array/findIndex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex)\n/* harmony export */ });\nfunction findIndex (array, callback) {\n  for (let index = 0; index < array.length; index++) {\n    if (callback(array[index], index)) {\n      return index\n    }\n  }\n  return -1\n}\n\n//# sourceURL=webpack://XUtils/./src/array/findIndex.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten\": () => (/* binding */ flatten)\n/* harmony export */ });\nfunction flatten (array) {\n  return array.reduce((pre, item) => {\n    if (Array.isArray(item) && item.some(cItem => Array.isArray(cItem))) {\n      return pre.concat(flatten1(item))\n    } else {\n      return pre.concat(item)\n    }\n  }, [])\n}\n\n//# sourceURL=webpack://XUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\nfunction map(arr, callback) {\r\n\tlet result = []\r\n\tfor (let i = 0; i < arr.length; i++) {\r\n\t\tresult.push(callback(arr[i], i))\r\n\t}\r\n\treturn result\r\n}\n\n//# sourceURL=webpack://XUtils/./src/array/map.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull)\n/* harmony export */ });\nfunction pull (array, ...values) {\n  if (array.length===0 || values.length===0) {\n    return []\n  }\n  \n  var result = []\n  for (let index = 0; index < array.length; index++) {\n    const item = array[index]\n     if (values.indexOf(item)!==-1) {\n      array.splice(index, 1)\n      result.push(item)\n      index--\n    }\n  }\n\n  return result\n}\n\n//# sourceURL=webpack://XUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/pullAll.js":
/*!******************************!*\
  !*** ./src/array/pullAll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/* harmony import */ var _pull_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pull.js */ \"./src/array/pull.js\");\n\r\nfunction pullAll (array, values) {\n  if (!values || !Array.isArray(values)) {\n    return []\n  }\n  return (0,_pull_js__WEBPACK_IMPORTED_MODULE_0__.pull)(array, ...values)\n}\n\n//# sourceURL=webpack://XUtils/./src/array/pullAll.js?");

/***/ }),

/***/ "./src/array/reduce.js":
/*!*****************************!*\
  !*** ./src/array/reduce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\nfunction reduce (array, callback, initValue) {\n  let result = initValue\n  for (let index = 0; index < array.length; index++) {\n    // 调用回调函数将返回的结果赋值给result\n    result = callback(result, array[index], index)\n  }\n  return result\n}\n\n//# sourceURL=webpack://XUtils/./src/array/reduce.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction slice (array, begin, end) {\n  // 如果当前数组是[], 直接返回[]\n  if (array.length === 0) {\n    return []\n  }\n\n  // 如果begin超过最大下标, 直接返回[]\n  begin = begin || 0\n  if (begin >= array.length) {\n    return []\n  }\n\n  // 如果end不大于begin, 直接返回[]\n  end = end || array.length\n  if (end > array.length) {\n    end = array.length\n  }\n  if (end <= begin) {\n    return []\n  }\n\n  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中\n  const arr = []\n  for (let index = begin; index < end; index++) {\n    arr.push(array[index])\n  }\n\n  return arr\n}\n\n//# sourceURL=webpack://XUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/some.js":
/*!***************************!*\
  !*** ./src/array/some.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction some (array, callback) {\n  for (let index = 0; index < array.length; index++) {\n    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true\n      return true\n    }\n  }\n  return false\n}\n\n//# sourceURL=webpack://XUtils/./src/array/some.js?");

/***/ }),

/***/ "./src/array/uniq.js":
/*!***************************!*\
  !*** ./src/array/uniq.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uniq\": () => (/* binding */ uniq)\n/* harmony export */ });\nfunction uniq (array) {\n  const arr = []\n  const obj = {}\n  array.forEach(item => {\n    if (!obj.hasOwnProperty(item)) {\n      obj[item] = true\n      arr.push(item)\n    }\n  })\n  return arr\n}\n\n//# sourceURL=webpack://XUtils/./src/array/uniq.js?");

/***/ }),

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/* 发送任意类型请求的函数 */\r\nfunction axios({\r\n\turl,\r\n\tmethod = 'GET',\r\n\tparams = {},\r\n\tdata = {}\r\n}) {\r\n\t// 返回一个promise对象\r\n\treturn new Promise((resolve, reject) => {\r\n\r\n\t\t// 处理method(转大写)\r\n\t\tmethod = method.toUpperCase()\r\n\r\n\t\t// 处理query参数(拼接到url上)   id=1&xxx=abc\r\n\t\t/* { id: 1, xxx: 'abc'} */\r\n\t\tlet queryString = ''\r\n\t\tObject.keys(params).forEach(key => {\r\n\t\t\tqueryString += `${key}=${params[key]}&`\r\n\t\t})\r\n\t\tif (queryString) { // id=1&xxx=abc&\r\n\t\t\t// 去除最后的&\r\n\t\t\tqueryString = queryString.substring(0, queryString.length - 1)\r\n\t\t\t// 接到url\r\n\t\t\turl += '?' + queryString\r\n\t\t}\r\n\r\n\r\n\t\t// 1. 执行异步ajax请求\r\n\t\t// 创建xhr对象\r\n\t\tconst request = new XMLHttpRequest()\r\n\t\t// 打开连接(初始化请求, 没有请求)\r\n\t\trequest.open(method, url, true)\r\n\r\n\t\t// 发送请求\r\n\t\tif (method === 'GET') {\r\n\t\t\trequest.send()\r\n\t\t} else if (method === 'POST' || method === 'PUT' || method === 'DELETE') {\r\n\t\t\t// 告诉服务器请求体的格式是json\r\n\t\t\trequest.setRequestHeader('Content-Type', 'application/json;charset=utf-8')\r\n\t\t\t// 发送json格式请求体参数\r\n\t\t\trequest.send(JSON.stringify(data))\r\n\t\t}\r\n\r\n\t\t// 绑定状态改变的监听\r\n\t\trequest.onreadystatechange = function() {\r\n\t\t\t// 如果请求没有完成, 直接结束\r\n\t\t\tif (request.readyState !== 4) {\r\n\t\t\t\treturn\r\n\t\t\t}\r\n\t\t\t// 如果响应状态码在[200, 300)之间代表成功, 否则失败\r\n\t\t\tconst {\r\n\t\t\t\tstatus,\r\n\t\t\t\tstatusText\r\n\t\t\t} = request\r\n\t\t\t// 2.1. 如果请求成功了, 调用resolve()\r\n\t\t\tif (status >= 200 && status <= 299) {\r\n\t\t\t\t// 准备结果数据对象response\r\n\t\t\t\tconst response = {\r\n\t\t\t\t\tdata: JSON.parse(request.response),\r\n\t\t\t\t\tstatus,\r\n\t\t\t\t\tstatusText\r\n\t\t\t\t}\r\n\t\t\t\tresolve(response)\r\n\t\t\t} else { // 2.2. 如果请求失败了, 调用reject()\r\n\t\t\t\treject(new Error('request error status is ' + status))\r\n\t\t\t}\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* 发送特定请求的静态方法 */\r\naxios.get = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\turl,\r\n\t\tmethod: 'GET'\r\n\t}))\r\n}\r\naxios.delete = function(url, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\turl,\r\n\t\tmethod: 'DELETE'\r\n\t}))\r\n}\r\naxios.post = function(url, data, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\turl,\r\n\t\tdata,\r\n\t\tmethod: 'POST'\r\n\t}))\r\n}\r\naxios.put = function(url, data, options) {\r\n\treturn axios(Object.assign(options, {\r\n\t\turl,\r\n\t\tdata,\r\n\t\tmethod: 'PUT'\r\n\t}))\r\n}\n\n//# sourceURL=webpack://XUtils/./src/axios.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\n/* \n自定义函数对象的apply方法\n*/\nfunction apply(fn, obj, args) {\n  // 如果obj是undefined/null, this指定为window\n  if (obj===undefined || obj===null) {\n    // return fn(...args)\n    obj = window\n  }\n\n  // 给obj添加一个临时方法, 方法指向的函数就是fn\n  obj.tempFn = fn\n  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj\n  const result = obj.tempFn(...args)\n  // 删除obj上的临时方法\n  delete obj.tempFn\n  // 返回fn执行的结果\n  return result\n}\n\n\n//# sourceURL=webpack://XUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call.js */ \"./src/function/call.js\");\n\n/* \n  自定义函数对象的bind方法\n*/\nfunction bind(fn, obj, ...args) {\n  // 返回一个新函数\n  return (... args2) => {\n    // 通过call调用原函数, 并指定this为obj, 实参为args与args2\n    return (0,_call_js__WEBPACK_IMPORTED_MODULE_0__.call)(fn, obj, ...args, ...args2)\n  }\n}\n\n//# sourceURL=webpack://XUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n/* \n自定义函数对象的call方法\n*/\nfunction call(fn, obj, ...args) {\n  console.log('call()')\n\n  // 如果obj是undefined/null, this指定为window\n  if (obj===undefined || obj===null) {\n    // return fn(...args)\n    obj = window\n  }\n\n  // 给obj添加一个临时方法, 方法指向的函数就是fn\n  obj.tempFn = fn\n  // 通过obj来调用这个方法 ==> 也就会执行fn函数 ==> 此时fn中的this肯定为obj\n  const result = obj.tempFn(...args)\n  // 删除obj上的临时方法\n  delete obj.tempFn\n  // 返回fn执行的结果\n  return result\n}\n\n//# sourceURL=webpack://XUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* \n实现函数防抖\n- 语法: debounce(callback, wait)\n- 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `callback`\n*/\nfunction debounce (callback, wait) {\n  // 用来保存定时器任务的标识id\n  let timeoutId = -1 \n  // 返回一个事件监听函数(也就是防抖函数)\n  return function (event) {\n    console.log('debounce event')\n    // 清除未执行的定时器任务\n    if (timeoutId!==-1) {\n      clearTimeout(timeoutId)\n    }\n    // 启动延迟 await 时间后执行的定时器任务\n    timeoutId = setTimeout(() => {\n      // 调用 callback 处理事件\n      callback.call(this, event)\n      // 处理完后重置标识\n      timeoutId = -1\n    }, wait)\n  }\n}\n\n//# sourceURL=webpack://XUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/* \n实现函数节流\n- 语法: throttle(callback, wait)\n- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次\n*/\nfunction throttle(callback, wait) {\n  let start = 0\n  // 返回一个事件监听函数(也就是节流函数)\n  return function (event) {\n    console.log('throttle event')\n    // 只有当距离上次处理的时间间隔超过了wait时, 才执行处理事件的函数\n    const current = Date.now()\n    if ( current - start > wait) {\n      callback.call(this, event) // 需要指定this和参数\n      start = current\n    }\n  }\n}\n\n//# sourceURL=webpack://XUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk_js__WEBPACK_IMPORTED_MODULE_0__.chunk),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat_js__WEBPACK_IMPORTED_MODULE_1__.concat),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference_js__WEBPACK_IMPORTED_MODULE_2__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop_js__WEBPACK_IMPORTED_MODULE_3__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_dropRight_js__WEBPACK_IMPORTED_MODULE_4__.dropRight),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_every_js__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_filter_js__WEBPACK_IMPORTED_MODULE_6__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_find_js__WEBPACK_IMPORTED_MODULE_7__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_findIndex_js__WEBPACK_IMPORTED_MODULE_8__.findIndex),\n/* harmony export */   \"flatten\": () => (/* reexport safe */ _array_flatten_js__WEBPACK_IMPORTED_MODULE_9__.flatten),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_map_js__WEBPACK_IMPORTED_MODULE_10__.map),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull_js__WEBPACK_IMPORTED_MODULE_11__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pullAll_js__WEBPACK_IMPORTED_MODULE_12__.pullAll),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_reduce_js__WEBPACK_IMPORTED_MODULE_13__.reduce),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_some_js__WEBPACK_IMPORTED_MODULE_14__.some),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice_js__WEBPACK_IMPORTED_MODULE_15__.slice),\n/* harmony export */   \"uniq\": () => (/* reexport safe */ _array_uniq_js__WEBPACK_IMPORTED_MODULE_16__.uniq),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call_js__WEBPACK_IMPORTED_MODULE_17__.call),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply_js__WEBPACK_IMPORTED_MODULE_18__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind_js__WEBPACK_IMPORTED_MODULE_19__.bind),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce_js__WEBPACK_IMPORTED_MODULE_20__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle_js__WEBPACK_IMPORTED_MODULE_21__.throttle),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf_js__WEBPACK_IMPORTED_MODULE_22__.myInstanceOf),\n/* harmony export */   \"merge\": () => (/* reexport safe */ _object_merge_js__WEBPACK_IMPORTED_MODULE_23__.merge),\n/* harmony export */   \"clone\": () => (/* reexport safe */ _object_clone_js__WEBPACK_IMPORTED_MODULE_24__.clone),\n/* harmony export */   \"deepClone\": () => (/* reexport safe */ _object_deepClone_js__WEBPACK_IMPORTED_MODULE_25__.deepClone),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_js__WEBPACK_IMPORTED_MODULE_26__.axios),\n/* harmony export */   \"myPromise\": () => (/* reexport safe */ _myPromise_js__WEBPACK_IMPORTED_MODULE_27__.myPromise)\n/* harmony export */ });\n/* harmony import */ var _array_chunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array/chunk.js */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array/concat.js */ \"./src/array/concat.js\");\n/* harmony import */ var _array_difference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/difference.js */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array/drop.js */ \"./src/array/drop.js\");\n/* harmony import */ var _array_dropRight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array/dropRight.js */ \"./src/array/dropRight.js\");\n/* harmony import */ var _array_every_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/every.js */ \"./src/array/every.js\");\n/* harmony import */ var _array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/filter.js */ \"./src/array/filter.js\");\n/* harmony import */ var _array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/find.js */ \"./src/array/find.js\");\n/* harmony import */ var _array_findIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/findIndex.js */ \"./src/array/findIndex.js\");\n/* harmony import */ var _array_flatten_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten.js */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/map.js */ \"./src/array/map.js\");\n/* harmony import */ var _array_pull_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/pull.js */ \"./src/array/pull.js\");\n/* harmony import */ var _array_pullAll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/pullAll.js */ \"./src/array/pullAll.js\");\n/* harmony import */ var _array_reduce_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/reduce.js */ \"./src/array/reduce.js\");\n/* harmony import */ var _array_some_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/some.js */ \"./src/array/some.js\");\n/* harmony import */ var _array_slice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/slice.js */ \"./src/array/slice.js\");\n/* harmony import */ var _array_uniq_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./array/uniq.js */ \"./src/array/uniq.js\");\n/* harmony import */ var _function_call_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./function/call.js */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./function/apply.js */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./function/bind.js */ \"./src/function/bind.js\");\n/* harmony import */ var _function_debounce_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./function/debounce.js */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./function/throttle.js */ \"./src/function/throttle.js\");\n/* harmony import */ var _object_myInstanceOf_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./object/myInstanceOf.js */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_merge_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./object/merge.js */ \"./src/object/merge.js\");\n/* harmony import */ var _object_clone_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./object/clone.js */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./object/deepClone.js */ \"./src/object/deepClone.js\");\n/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./axios.js */ \"./src/axios.js\");\n/* harmony import */ var _myPromise_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./myPromise.js */ \"./src/myPromise.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://XUtils/./src/index.js?");

/***/ }),

/***/ "./src/myPromise.js":
/*!**************************!*\
  !*** ./src/myPromise.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myPromise\": () => (/* binding */ myPromise)\n/* harmony export */ });\nfunction myPromise(executor) {\r\n\t// 添加属性\r\n\tthis.PromiseState = 'pending';\r\n\tthis.PromiseResult = '';\r\n\t// 声明一个属性\r\n\tthis.callbacks = []\r\n\t// 保存实例对象的 this 的值\r\n\tconst that = this\r\n\r\n\tfunction resolve(data) {\r\n\t\t// 判断状态\r\n\t\tif (that.PromiseState !== 'pending') return;\r\n\t\t// 1.修改对象状态(PromiseState)\r\n\t\tthat.PromiseState = 'fulfilled';\r\n\t\t// 2.设置对象结果值(PromiseResult)\r\n\t\tthat.PromiseResult = data;\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tthat.callbacks.forEach(item => {\r\n\t\t\t\titem.onResolved(data)\r\n\t\t\t})\r\n\t\t})\r\n\t};\r\n\r\n\tfunction reject(data) {\r\n\t\t// 判断状态\r\n\t\tif (that.PromiseState !== 'pending') return;\r\n\t\t// 1.修改对象状态(PromiseState)\r\n\t\tthat.PromiseState = 'rejected';\r\n\t\t// 2.设置对象结果值(PromiseResult)\r\n\t\tthat.PromiseResult = data;\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tthat.callbacks.forEach(item => {\r\n\t\t\t\titem.onRejected(data)\r\n\t\t\t})\r\n\t\t})\r\n\t};\r\n\ttry {\r\n\t\t// 同步调用执行器函数\r\n\t\texecutor(resolve, reject)\r\n\t} catch (e) {\r\n\t\treject(e)\r\n\t}\r\n}\r\n\r\n// 添加 then 方法\r\nmyPromise.prototype.then = function(onResolved, onRejected) {\r\n\tconst that = this\r\n\t// 判断回调函数参数\r\n\tif(typeof onRejected !== 'function') {\r\n\t\tonRejected = reason => {\r\n\t\t\tthrow reason\r\n\t\t}\r\n\t}\r\n\tif(typeof onResolved !== 'function') {\r\n\t\tonResolved = value => value\r\n\t}\r\n\treturn new myPromise((resolve, reject) => {\r\n\t\t// 封装函数\r\n\t\tfunction callback(type) {\r\n\t\t\ttry {\r\n\t\t\t\t// 执行成功的回调函数\r\n\t\t\t\tlet result = type(that.PromiseResult)\r\n\t\t\t\tif (result instanceof myPromise) {\r\n\t\t\t\t\tresult.then(v => {\r\n\t\t\t\t\t\tresolve(v)\r\n\t\t\t\t\t}, r => {\r\n\t\t\t\t\t\treject(r)\r\n\t\t\t\t\t})\r\n\t\t\t\t} else {\r\n\t\t\t\t\tresolve(result)\r\n\t\t\t\t}\r\n\t\t\t} catch (e) {\r\n\t\t\t\treject(e)\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t// 调用回调函数\r\n\t\tif (this.PromiseState === 'fulfilled') {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tcallback(onResolved)\r\n\t\t\t}, 0)\r\n\t\t}\r\n\t\tif (this.PromiseState === 'rejected') {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tcallback(onRejected)\r\n\t\t\t}, 0)\r\n\t\t}\r\n\t\t// 判断pending状态\r\n\t\tif (this.PromiseState === 'pending') {\r\n\t\t\t// 保存回调函数\r\n\t\t\tthis.callbacks.push({\r\n\t\t\t\tonResolved: function() {\r\n\t\t\t\t\tcallback(onResolved)\r\n\t\t\t\t},\r\n\t\t\t\tonRejected: function() {\r\n\t\t\t\t\tcallback(onRejected)\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t}\r\n\r\n\t})\r\n}\n\r\n// 添加 catch 方法\r\nmyPromise.prototype.catch = function(onRejected) {\r\n\treturn this.then(undefined, onRejected)\r\n}\r\n//\r\n\r\n// 添加 resolve 方法\r\nmyPromise.resolve = function(value) {\r\n\t// 返回 promise 对象\r\n\treturn new myPromise((resolve, reject) => {\r\n\t\tif(value instanceof myPromise) {\r\n\t\t\tvalue.then(v => {\r\n\t\t\t\tresolve(v)\r\n\t\t\t}, r => {\r\n\t\t\t\treject(r)\r\n\t\t\t})\r\n\t\t} else {\r\n\t\t\tresolve(value)\r\n\t\t}\r\n\t})\r\n}\r\n\r\nmyPromise.reject = function(reason) {\r\n\t// 返回 promise 对象\r\n\treturn new myPromise((resolve, reject) => {\r\n\t\treject(reason)\r\n\t})\r\n}\r\n\r\nmyPromise.all = function(promises) {\r\n\treturn new myPromise((resolve, reject) => {\r\n\t\tlet count = 0\r\n\t\tlet arr = []\r\n\t\tpromises.forEach((p, index) => {\r\n\t\t\tp.then(v => {\r\n\t\t\t\tcount ++\r\n\t\t\t\tarr[index] = v\r\n\t\t\t\tif(count == promises.length) {\r\n\t\t\t\t\tresolve(arr)\r\n\t\t\t\t}\r\n\t\t\t}, r => {\r\n\t\t\t\treject(r)\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\n\r\nmyPromise.race = function(promises) {\r\n\treturn new myPromise((resolve, reject) => {\r\n\t\tpromises.forEach((p, index) => {\r\n\t\t\tp.then(v => {\r\n\t\t\t\tresolve(v)\r\n\t\t\t}, r => {\r\n\t\t\t\treject(r)\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n}\r\n\n\n//# sourceURL=webpack://XUtils/./src/myPromise.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone\": () => (/* binding */ clone)\n/* harmony export */ });\nfunction clone(target) {\n  if (target!=null && typeof target==='object') {\n    const cloneTarget = Array.isArray(target) ? [] : {}\n    for (let key in target) {\n      if (target.hasOwnProperty(key)) {\n        cloneTarget[key] = target[key]\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n//# sourceURL=webpack://XUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone\": () => (/* binding */ deepClone)\n/* harmony export */ });\nfunction deepClone (target, map=new Map()) {\n  if (target!==null && typeof target==='object') {\n    // 从缓存容器中读取克隆对象\n    let cloneTarget = map.get(target)\n    // 如果存在, 返回前面缓存的克隆对象\n    if (cloneTarget) {\n      return cloneTarget\n    }\n    // 创建克隆对象(可能是{}或者[])  \n    if (target instanceof Array) {\n      cloneTarget = []\n      // 缓存到map中\n      map.set(target, cloneTarget)\n      target.forEach((item, index) => {\n        cloneTarget[index] = deepClone4(item, map)\n      })\n    } else {\n      cloneTarget = {}\n      // 缓存到map中\n      map.set(target, cloneTarget)\n      Object.keys(target).forEach(key => {\n        cloneTarget[key] = deepClone4(target[key], map)\n      })\n    }\n\n    return cloneTarget\n  }\n\n  return target\n}\n\n//# sourceURL=webpack://XUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/merge.js":
/*!*****************************!*\
  !*** ./src/object/merge.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"merge\": () => (/* binding */ merge)\n/* harmony export */ });\nfunction merge(...objs) {\n  const result = {}\n\n  // 遍历objs\n  objs.forEach(obj => {\n    Object.keys(obj).forEach(key => {\n      // 如果result还没有key值属性\n      if (!result.hasOwnProperty(key)) {\n        result[key] = obj[key]\n      } else { // 否则 合并属性\n        result[key] = [].concat(result[key], obj[key])\n      }\n    })\n  })\n\n  // 可以使用reduce来代替forEach手动添加\n  return result\n}\n\n//# sourceURL=webpack://XUtils/./src/object/merge.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\nfunction myInstanceOf(obj, Type) {\n  // 得到原型对象\n  let protoObj = obj.__proto__\n\n  // 只要原型对象存在\n  while(protoObj) {\n    // 如果原型对象是Type的原型对象, 返回true\n    if (protoObj === Type.prototype) {\n      return true\n    }\n    // 指定原型对象的原型对象\n    protoObj = protoObj.__proto__\n  }\n  \n  return false\n}\n\n//# sourceURL=webpack://XUtils/./src/object/myInstanceOf.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});