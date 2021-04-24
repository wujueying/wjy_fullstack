const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENDING
  that.value = null 
  that.resolvedCallbacks = []


  function resolve(value) {
      if(that.state = PENDING){
        that.state = RESOLVED
        that.value = value 
        that.resolvedCallbacks.map(cb => {
            cb(that.value)
        })
      }
    that.state = RESOLVED 
  }
  function reject(){

  }

  try{
    fn(resolve, reject)
  }catch(e){
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    const that = this 
    onFulfilled = typeof onFulfilled === 'function'? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }

    if(that.state === PENDING){
        that.resolvedCallbacks.push(onFulfilled)
    }
    
    if(that.state === RESOLVED) {
        onFulfilled(that.value)
    }
}

new MyPromise((resolve, reject) => {
    resolve('ok')
}).then((res) => {

})
.then((res) => {
    console.log(res);
})