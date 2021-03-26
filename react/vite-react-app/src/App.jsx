import React, { useState ,useEffect} from 'react'
import {Provider} from 'react-redux';
import store from './store/index'
// 引入单一状态树
import logo from './logo.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <Provider store={store}>

    </Provider>
  )
}

export default App
