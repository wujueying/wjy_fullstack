// executor  执行器的实现 
// 状态的转移 
// thenable  
// 如何让执行器决定状态转移的处理 用状态  
class Promise {
    constructor(executor){
        // 初始化未完成状态
                this.state = 'pending'; 
                // 成功的值
                this.value = undefined;  
                // 失败的原因
                this.reason = undefined;  
                this.onResolvedCallbacks = [];
                this.onRejectedCallbacks = [];
        // 异步任务会把结果交给resolve
                let resolve = (value) => { 
                    console.log(value,'--------')
                    console.log('fullfilled状态执行了')
                    if(this.state == 'pending'){
                        this.value = value
                        this.state = 'fullfilled'
                        // 执行
                        this.onResolvedCallbacks.forEach(fn => fn());
                        // onFulFilled 执行一下？ 记忆
                    }
                }
                let reject = (reason) => {
                    if(this.state == 'pending'){
                        console.log('reject状态执行了');
                        this.reason = reason
                        this.state = 'rejected'
                        // 执行
                        this.onRejectedCallbacks.forEach(fn => fn());
                    }
                }
                try{
                    executor(resolve,reject);
                }catch(e) {
                    reject(err)
                }

    }
    // 当前promise解决了， 完成了状态的转移， 把控制权交出来

    then(onFulfilled,onRejected){
        console.log('then ......');
        // 状态为 fulfilled时， 传入成功后的回调， 将执行权转移
        if(this.state == 'fulfilled'){
            console.log('onFulfilled,------');
            onFulfilled(this.value);
        }

        // 状态为rejected的时候， 传入失败后的回调，
        if(this.state == 'rejected'){
            onRejected(this.reason);
        }

        if(this.state == 'pending'){
            // 将onfulfilled的状态存起来，不执行
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            })
        }
    }
}



new Promise((resolve, reject) => {
    // 将花时间比较多的任务封装起来， 以实现异步变同步 
    setTimeout(() => {
        // console.log(0);
        resolve(10);
        // 语法错误 
        // throw new Error('出错了');
    },1000)
}).then((data) => {
    console.log(data,'+++++++'); 
})
// .then()是立即执行的，state还是pending，没有改变状态