export function myPromise(executor) {
	// 添加属性
	this.PromiseState = 'pending';
	this.PromiseResult = '';
	// 声明一个属性
	this.callbacks = []
	// 保存实例对象的 this 的值
	const that = this

	function resolve(data) {
		// 判断状态
		if (that.PromiseState !== 'pending') return;
		// 1.修改对象状态(PromiseState)
		that.PromiseState = 'fulfilled';
		// 2.设置对象结果值(PromiseResult)
		that.PromiseResult = data;

		setTimeout(() => {
			that.callbacks.forEach(item => {
				item.onResolved(data)
			})
		})
	};

	function reject(data) {
		// 判断状态
		if (that.PromiseState !== 'pending') return;
		// 1.修改对象状态(PromiseState)
		that.PromiseState = 'rejected';
		// 2.设置对象结果值(PromiseResult)
		that.PromiseResult = data;

		setTimeout(() => {
			that.callbacks.forEach(item => {
				item.onRejected(data)
			})
		})
	};
	try {
		// 同步调用执行器函数
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}

// 添加 then 方法
myPromise.prototype.then = function(onResolved, onRejected) {
	const that = this
	// 判断回调函数参数
	if(typeof onRejected !== 'function') {
		onRejected = reason => {
			throw reason
		}
	}
	if(typeof onResolved !== 'function') {
		onResolved = value => value
	}
	return new myPromise((resolve, reject) => {
		// 封装函数
		function callback(type) {
			try {
				// 执行成功的回调函数
				let result = type(that.PromiseResult)
				if (result instanceof myPromise) {
					result.then(v => {
						resolve(v)
					}, r => {
						reject(r)
					})
				} else {
					resolve(result)
				}
			} catch (e) {
				reject(e)
			}
		}
		
		// 调用回调函数
		if (this.PromiseState === 'fulfilled') {
			setTimeout(() => {
				callback(onResolved)
			}, 0)
		}
		if (this.PromiseState === 'rejected') {
			setTimeout(() => {
				callback(onRejected)
			}, 0)
		}
		// 判断pending状态
		if (this.PromiseState === 'pending') {
			// 保存回调函数
			this.callbacks.push({
				onResolved: function() {
					callback(onResolved)
				},
				onRejected: function() {
					callback(onRejected)
				}
			})
		}

	})
}

// 添加 catch 方法
myPromise.prototype.catch = function(onRejected) {
	return this.then(undefined, onRejected)
}
//

// 添加 resolve 方法
myPromise.resolve = function(value) {
	// 返回 promise 对象
	return new myPromise((resolve, reject) => {
		if(value instanceof myPromise) {
			value.then(v => {
				resolve(v)
			}, r => {
				reject(r)
			})
		} else {
			resolve(value)
		}
	})
}

myPromise.reject = function(reason) {
	// 返回 promise 对象
	return new myPromise((resolve, reject) => {
		reject(reason)
	})
}

myPromise.all = function(promises) {
	return new myPromise((resolve, reject) => {
		let count = 0
		let arr = []
		promises.forEach((p, index) => {
			p.then(v => {
				count ++
				arr[index] = v
				if(count == promises.length) {
					resolve(arr)
				}
			}, r => {
				reject(r)
			})
		})
	})
}

myPromise.race = function(promises) {
	return new myPromise((resolve, reject) => {
		promises.forEach((p, index) => {
			p.then(v => {
				resolve(v)
			}, r => {
				reject(r)
			})
		})
	})
}
