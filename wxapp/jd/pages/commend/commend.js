// pages/commend/commend.js
wx. cloud. init()
const app = getApp();//设立顶部栏高度
Page({
  data:{
    isShow:false,
    goodsInfo:[],
    activeTypeId: 0,
    typeCat: [ /** 类型的数据配置 */
      {
        id: 0, name: "精选",
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
  typeSwitch(e){
    this.setData({
      activeTypeId: e.currentTarget.dataset.id
    })
  },

  tapToDetail(e) {
     const _id = e.currentTarget.dataset.gID
  },

	onLoad: function (options) {
     console.log('load')
     wx.showLoading({
       title:'正在加载中...',
     })
    //自定义头部方法
    this.setData({
      navH: app.globalData.navHeight
    });
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('show')
    app.getInfoByOrder('goods-board', 'time', 'desc', e => {
      this.setData({
        goodsInfo: e.data,
        isShow:true
      })
      wx.hideLoading(); // 
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})