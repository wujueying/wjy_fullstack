//index.js
//获取应用实例
const app = getApp()
const utils = require('../../utils/util')

Page({
  data: {
    status:'1',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  showStatus(e) {
    let status = e.currentTarget.dataset.status
    this.setData({
      status
    })
  },
  addTodoShow(){
    this.setData({
      addShow:true, // 电影拉幕一样出来表单
      focus:true
    })
  }
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   console.log(utils.formatTime(new Date())); 
   //+new Date() 时间戳
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})