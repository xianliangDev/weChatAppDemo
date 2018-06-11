// pages/tabbar/Me/index.js
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      infoType:'1',
      icon: '../../../image/me/tuijian.png',
      text: '我的推荐',
      isunread: true,
      unreadNum: 2
    }, {
      infoType: '2',
      icon: '../../../image/me/nongbi.png',
      text: '我的积分',
      isunread: false,
      unreadNum: 2
    }, {
      infoType: '3',
      icon: '../../../image/me/shangjia.png',
      text: '我是商家',
      isunread: true,
      unreadNum: 1
    }, {
        infoType: '4',
      icon: '../../../image/me/pintuan.png',
      text: '我的拼团'
    }, {
        infoType: '5',
        icon: '../../../image/me/youhuijuan.png',
      text: '我的优惠券'
    }]
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})