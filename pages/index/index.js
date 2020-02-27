//index.js
//获取应用实例
const app = getApp()
const str = "number"
Page({
  data: {
    motto: 'Hello World',
    userInfo: {nickName:"ruoweng"},
    hasUserInfo: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nodeRichText:{
      type:"hr"
    },
    btnText: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    }) 
  },
  onLoad: function () {
    let appInstance = getApp()
    console.log(appInstance)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  add: function(){
    let count = (Math.random() * 10).toFixed(2)
    this.setData({
      btnText: Number(this.data.btnText) + Number(count)
    })
  },
  jumpTo: function(data){
    wx.redirectTo({
      url: 'pages/security',
    })
  }
})
