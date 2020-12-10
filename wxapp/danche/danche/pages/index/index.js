//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude:115.832777,
    latitude:28.724024,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    // console.log('地图组件加载完成了，期待经纬度获取');
    wx.getLocation({
         type: 'gcj0',
         success:(res) => {
           let longitude = res.longitude;
           let latitude = res.latitude;
          //  在wxml 模板里，{{latitude}} 坑
           this.setData({
               longitude: longitude,
              latitude: latitude
           })
         }
    })
  },
  toScan(){
    // console.log('toScan');
    return wx.scanCode({
      success:(res) => {
        // wx.showModel({
        //   title:'二维码',
        //   content: JSON.stringify(res)
        // })
        let id = res.result;
        wx.navigateTo({
          url:`../unlock/unlock?id=${id}`
        })
      }
    })
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
