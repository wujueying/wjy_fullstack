// pages/commend/commend.js
const App = getApp();//设立顶部栏高度
Page({
  data:{
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name:"精选",
      },
      {
        id: 1, name: "超市"
      },
      {
        id: 2, name: "手机"
      },
      {
        id: 3, name: "美妆"
      },
      {
        id: 4, name: "女装"
      },
      {
        id: 5, name: "男装"
      }
    ]
  },
	onLoad: function (options) {
   
    //自定义头部方法
    this.setData({
      navH: App.globalData.navHeight
    });
  },
  
})