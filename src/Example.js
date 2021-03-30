import React, { useState } from 'react';
function Example(){  //相当于组件
    // 第一个是值，第二个是函数，用来改变前者的值
    const [ count, setCount] = useState(0)  // 初始值设定为0 useState是一个方法 数组解构
    // let _useState = userState0(0)  // 局部变量 相当于一个函数
    // let count = _useState[0]  // 数组的第一位
    // let setState = _useState[1]  // 
    return (
        <div>
            <p>You clicked {count} times</p>  
            <button onClick={()=>{setCount(count+1)}}>Clicked me</button>
        </div>
    )
}

export default Example;