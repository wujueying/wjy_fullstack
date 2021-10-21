const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// 1. 引入模板 中间件
// path 路径模块, join 返回有效路径 
// __dirname 当前项目的物理路径, 
// views ./views 在当前项目的根上 
// MVC View  views 
// console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 启用一个body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  name:'sky',
  secret: 'jijcsicnjka',
  store: new FileStore(),
  saveUninitialized: false,
  resave: false,
  cookie:{
    maxAge: 1000*1000
  }
}))

// controller 


app.get('/', (req, res) => {
  // view 
  // cookie 
  var session = req.session;
  var loginUser = session.loginUser;
  var isLogined = !!loginUser
  if(isLogined){
    res.render('index', {
      title: '首页，咏琪跳高破纪录...',
      isLogined: true,
      loginUser: loginUser
    })
  } else {
    
  }
  console.log(session,'****////*****');
  
})

app.get('/logout',(req, res)=>{
  req.session.destroy((err)=>{
    res.clearCookie('sky')
    res.redirect('/');
  })
})

app.post('/login', function(req, res) {
  // name password? 
  // console.log(req.body.name, '-----------------');
  const {name, password} = req.body;
    console.log(name,req,'******');
    if(name === 'root' && password == "123456"){

      req.session.regenerate(function(err){
        if(err){
          return res.json({
            code:2,
            msg: '登录失败'
          })
        }
        req.session.loginUser = name;
        res.json({
          code: 0, 
          msg: '登录成功！'
        })
      })
    }else{
        res.json({
            code: 1, 
            msg: '账号或密码失败'
          })
    }
  
})
app.listen(3000, () => {
  console.log('服务器启动起来');
})
