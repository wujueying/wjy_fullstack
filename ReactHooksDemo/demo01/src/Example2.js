import React, { useState } from 'react';
let showSex = true;
function Example2(){  //相当于组件
    const [ age,setAge] = useState(18)  
    const [ sex,setSex] = useState('男') // useState 无法存在于条件语句中
    const [ work,setWork] = useState('程序员') 
    return (
        <div>
            <p>JSPang今年：{age}岁</p>
            <p>JSPang今年：{sex}</p>
            <p>JSPang工作是:  {work}</p>
        </div>
    )
}

export default Example2;

// useEffect() 