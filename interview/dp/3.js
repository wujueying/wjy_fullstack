<<<<<<< HEAD
// var climbStairs = function(n) {
//     if(n == 1){return 1;}
//         if(n == 2){return 2;}
//         var a = 1, b = 2, temp;
//         for(var i = 3; i <= n; i++){
//             temp = a;
//             a = b;
//             b = temp + b;
//         }
//         return b;   
// };

// console.log(climbStairs(99));

const climbStairs = function(n){
    const f = [];
    f[1] = 1;
    f[2] = 2;
    for(let i = 3;i<=n;i++){
        f[i]=f[i-2]+f[i-1]
    }
    return f[n]
}
=======
// var climbStairs = function(n) {
//     if(n == 1){return 1;}
//         if(n == 2){return 2;}
//         var a = 1, b = 2, temp;
//         for(var i = 3; i <= n; i++){
//             temp = a;
//             a = b;
//             b = temp + b;
//         }
//         return b;   
// };

// console.log(climbStairs(99));

const climbStairs = function(n){
    const f = [];
    f[1] = 1;
    f[2] = 2;
    for(let i = 3;i<=n;i++){
        f[i]=f[i-2]+f[i-1]
    }
    return f[n]
}
>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
console.log(climbStairs(100))