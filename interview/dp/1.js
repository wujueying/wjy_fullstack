<<<<<<< HEAD
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

=======
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

>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
console.log(climbStairs(99));