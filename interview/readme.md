如果一个函数直接修改全局的对象， 我们认为是不应该的， 是不纯的
redux reducer 是纯函数 

const state
(state = initialState,action) => {
    switch(action){
        case 'ADD':
          return{
              ...state,
              const: state.count + 1
          }
          return state
    }
}

- 当函数运行后产生了修改全局数据的副作用， 不纯
  易产生问题
- reducer 是一个纯函数 不会有副作用 
