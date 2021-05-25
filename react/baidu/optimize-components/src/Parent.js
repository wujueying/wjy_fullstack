import React, { useState, useCallback, useMemo } from 'react';

const Child = ({name, onClick}) => {
    console.log('子组件更新了');
    return(
        <>
            <div style={{ color: name.color }}>我是一个子组件，父级传过来的数据：{name.name}</div>
            <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
        </>
    );
}

const ChildMemo = React.memo(Child);
export default () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child组件');
    
    return (
        <>
            <button onClick={(e) => {setCount(count + 1)}}>加1</button>
            <p>count: {count}</p>
            {
                console.log(name.indexOf('name'), '|||||')
                // console.log(name.indexOf('name'))
            }
            <ChildMemo 
                name={{name: name, color: name.indexOf('name')!== -1?'red':'green'}}
                // onClick={(newName) => setName(newName)}
                onClick={useCallback((newName) => setName(newName), [])}
            />
        </>
    )
}
