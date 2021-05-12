function maopao(elements){
    for(let i = 0;i < elements.length - 1;i++){
        for(let j = 0;j < elements.length - i - 1;j++){
            if(elements[j]>elements[j+1]){
                let swap = elements[j];
                elements[j] = elements[j+1];
                elements[j+1] = swap;
            }
        }
    }
}

var elements = [2236,89,6,51,48,56,100];
console.log('排序前'+elements);
maopao(elements);
console.log('排序后'+elements);

/**
 * 时间复杂度O(n) 渐进记法 
 * 1. 最好 Ω 
 * 2. 最差 O
 * 3. 平均 θ       
*/

/**
 * 递归遍历树的空间复杂度等于树的高度 logn(n) 
*/

