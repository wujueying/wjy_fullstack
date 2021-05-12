function selection(arr){
    for(let i=0; i<arr.length-1; i++){
        let min = i;
        for(let j=i+1; j<arr.length;j++){
            if(arr[min]>arr[j]){
                let swap=arr[i]
                min = j;
            }
            [arr[min],arr[i]]=[arr[i],arr[min]]
        }
    }
}
var arr = [2236,89,6,51,48,568,100];
console.log('排序前' + arr);
selection(arr);
console.log('排序后' + arr);