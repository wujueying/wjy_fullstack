// 不要追求完美，上岸就好 
// 写好类似leetcode 函数，测试用例， 用例结果
// 提供36位的表达 0-9 a-z 
function getNums36() {
    var nums36 = [];
    for(var i =0;i<36;i++) {
        if(i>=0 && i<=9){
            nums36.push(i)
        }else{
            nums36.push(String.fromCharCode(i + 87));
        }
    }
    console.log(nums36,'-------');
    return nums36; 
}
function scale36(n) {
    // 单独的功能函数
    // 36 0-9 a-z 36个
    const arr=[]
    var nums36=getNums36()
    while(n){
        var res= n % 36
        console.log(res,'+++++++');
        arr.unshift(nums36[res]) // 倒序
        n=parseInt(n/36)  //每次都要跟新n
        console.log(n,'-----');
    }
    return arr;
}

console.log(scale36(72),'***'); // 10
// console.log(scale36(36)); // 