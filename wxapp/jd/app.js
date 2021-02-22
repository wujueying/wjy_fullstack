// app.js

App({
  
  onLaunch() {
    wx.getSystemInfo({
      success: res => {
        //导航高度 
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0
  },

  // 合局的列表查询方法  全局共享的方法
  // setName  表名
  // ruleItem  条件
  // orderFun  排序方式
  getInfoByOrder(setName, ruleItem, orderFunc, callback) {
    const db = wx.cloud.database();
    db
    .collection(setName) // 边接数据表 mongodb 没有严格的字段 tmpPictures  json文档document mysql 关系型 mongodb 文档型
    .orderBy(ruleItem, orderFunc)
    .get() // promise 
    .then(callback) // 回到页面去  
    .catch(console.error) // 容错处理
  }
})
