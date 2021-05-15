const partition = (arr, low, high) => {
    let pi = arr[low];
    for(let i=low+1; i<=high; i++){
        if(arr[i] < pi){
            index++
            [arr[i],arr[index]] = [arr[index],arr[i]]
        }
    }
    [arr[low], arr[index]] = [arr[index],arr[low]]
    return index 
}

const quickSort = (arr, low=0, high=arr.length-1) => {
    const length = arr.length  
    if(length <= 1) return;
    if(low >= high) return;

    
    let pi = partition(arr, low, high)
    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)
}

let a = [12,332,42,43,2,13,43];
quickSort(a)  
console.log(a)  

/*
 最好情况下 nlogn 
 平均时间复杂度 nlogn 
 最坏情况下的  n² 
 空间复杂度 logn 
*/