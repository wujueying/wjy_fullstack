// 输出什么？ async/await 原理是什么？ 这段代码翻译成promise
function getJson() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {  
            console.log(2);  
            // resolve(2)  
        },2000)  
    })
}

function testAsync() {
     return Promise.resolve().then(() => {
         return getJson()
     }).then(() => {
         console.log(3);
     })
  }
  

  testAsync()

