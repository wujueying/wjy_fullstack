var len;

function buildMaxHeap(arr){ // 建立大顶堆
    len = arr.length;
    // 初始化最大堆，从最后一个非叶子结点开始倒序遍历所有的非叶子节点
    for(var i = Math.floor((len-1)/2); i >= 0; i--){
        heapify(arr, i);
    }
} 


// 调整堆的顺序，保证是
function heapify(arr,i){
    var left = 2*i+1,
    right = 2*i+2,
    largest = i; 
  if(left < len && arr[left] > arr[largest]) {
      largest = left;
  }
  if(right < len && arr[right] > arr[largest]){
      largest = right;
  } 
  if(largest != i){
      swap(arr, i ,largest);
      heapify(arr, largest);
  }

}
function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapSort(arr){
    buildMaxHeap(arr);
    for(var i=arr.length-1;i>0;i--){
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}

var arr=[12,31,342,54,2,4,5,1321,43]
console.log('排序前：'+arr)
heapSort(arr)
console.log('排序后：'+arr)