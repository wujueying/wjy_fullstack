const arr = [1,2,3,4,4,5,5,5,6,7];
<!-- 数组去重 reduce 贪吃蛇 -->
arr = arr.reduce((acc,cur)=>{
    <!-- [] => unique -->
    <!-- 每一次都不重复 -->
  arr[next]?"":arr[next] =true && cur.push(next);
				return cur;
			}, [])
})
