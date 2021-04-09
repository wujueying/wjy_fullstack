const getJson = () => {  // 异步
    return "JSON"
}
 
// 函数前面加async只是声明这个函数内部存在异步
async function textAsync(){
    try{
         // 函数前面加 await， 逻辑就会等到这个异步函数执行完毕后，再往下执行剩下的代码
        await getJson();
    }catch(error){
        console.log(error);
    }
    // 返回一个Promise
   
}

