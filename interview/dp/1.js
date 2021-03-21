const climbStairs = function(n){
    if(n == 1){
        return 1
    }
    if(n == 2){
        return 2
    }
    return climbStairs(n-1) + climbStairs(n-2);
    // 差一阶台阶的走法加上差2阶台阶的走法
}

// 递归的算法 

console.log(climbStairs(99));