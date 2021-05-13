function insertSort(arr){
    let preIndex,current;
    for(let i=1;i<arr.length;i++){
        preIndex = i-1;
        current = arr[i]; // 无序元素的下标
        while(preIndex >= 0 && current < arr[preIndex]){ // 通过比较向后移动位置
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current; //将arr[i]插入预留出来的空位
    }
    return arr;
} 

var arr = [23,45,56,5,4,89,568]
console.log('排序前：' + arr);
insertSort(arr);
console.log('排序后：' + arr);