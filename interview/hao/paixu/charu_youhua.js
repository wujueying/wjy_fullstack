/*
    二分查找的条件是在序列有限的情况下，才能使用
    在插入排序的插入过程中可以运用这一个知识点
*/

function insertSort(arr){
    let key,low,high,mid,j;
    let len = arr.length;
    for(let i=1;i<len;i++){ // 遍历无序区间的所有数，i的左边为有序序列,i到len为准备插入的无序数列
        low=0;
        high=i-1;
        key = arr[i];       // 准备插入排序的无序元素
        while(low<=high){   // 经过二分查找法找到确切要插入的key的位置 arr[low]
            mid=parseInt((low+high)/2);
            if(key<arr[mid]){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
      for( j=i-1;j>=high+1;j--){
                arr[j+1]=arr[j];
            }
            arr[low]=key;
    }
    return arr;
} 

var arr = [23,45,56,5,4,89,568]
console.log('排序前：' + arr);
insertSort(arr);
console.log('排序后：' + arr);