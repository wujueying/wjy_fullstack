// executor  执行器的实现 
// 状态的转移 
// 如何让执行器决定状态转移的处理 用状态
class Promise {
    constructor(executor){
        // 初始化未完成状态
                this.state = 'pending'; 
                this.value = undefined;  // 成功的值
                this.reason = undefined;  // 失败的原因
        // 异步任务会把结果交给resolve
                let resolve = (value) => { 
                    console.log(value,'------')
                    console.log('fulfilled状态执行了')
                    if(this.state == 'pending'){
                        this.value = value
                        this.state = 'fulfilled'
                    }
                }
                let reject = (reason) => {
                    if(this.state == 'pending'){
                        console.log('reject状态执行了');
                        this.reason = reason
                        this.state = 'rejected'
                    }
                }
                try{
                    executor(resolve,reject);
                }catch(e) {
                    reject(err)
                }

    }
    // then(){
        
    // }
}

new Promise((resolve,reject) => {
    // 将花时间比较多的任务封装起来， 以实现异步变同步 
    setTimeout(() => {
        // console.log(0);
        resolve(10);
        // 语法错误 
        // throw new Error('出错了');
    },1000)
});