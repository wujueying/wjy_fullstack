import logo from './logo.svg';
import './App.css';
// 引入antd
// import { Button } from 'antd';  // 组件库
import Login from './Login';
import Post from './Post'; // 新的页面 组件

function App() {
  return (
    <div className="App">
      <Login/>
       {/* <Login /> */}
      {/* <Button type="primary"> Primary Button </Button> */}
    </div>
  );
}

export default App;
