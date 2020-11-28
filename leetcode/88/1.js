// function merge(){

// }
// JS 变量的类型是由值决定的， 弱类型
// m + n <= nums.length
const merge =(nums1,m,nums2,n) => {
    // 把num2合并到num1中
    // 重新排序
    //多定义一个变量
    let current2=0;  //定义一个指针 
    for (let i=nums1.length-n;i<=nums1.length-1;i++){
        nums1[i]=nums2[current2++];  //好理解  num2有个可遍历
    }
    // console.log(num1);
    return nums1.sort((a,b) => a - b)  // 
}
console.log(merge([1,2,3,0,0,0],6,[2,5,6],3));