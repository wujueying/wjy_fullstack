function shellSort(arr) {
    let len = arr.length;
    // gap 即为增量
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        let current = arr[i];
        while(j - gap >= 0 && current < arr[j - gap]) {
          arr[j] = arr[j - gap];
          j = j - gap;
        }
        arr[j] = current;
      }
    }
  }
   
  var arr = [3,5,789,25,0,9,8,42,37,0];
  console.log('排序前：'+arr)
  shellSort(arr);
  console.log('排序后：'+arr)
  /*
    平均复杂度 n²
  */