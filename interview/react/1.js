// writer 全局
let writer = {
    firstName:"婧",
    lastName:"龙",
    num:10
}
if(!writer.company){
    console.log('嗯，还在学校，没出去，可以.')
}
// 不太纯
// 函数有什么问题？
function appendCompany(student){
    // 新定义一个对象
    let copyWriter = Object.assign({},student)
    // 修改了全局的对象  
    copyWriter.company = '字节'  // 函数的内部  
    return copyWriter;
}

console.log(appendCompany(writer));
console.log(writer);

// reducer 要避免的， 纯函数  