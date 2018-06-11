// pages/tabbar/Me/index.js
Page({
  data: {
    userInfo: {},
    isLogin: true,
    orderStatus:[{
        statusType:'1',
        icon:'../../../image/me/tuijian.png',
        text:'待付款',
        num:3
    }, {
      statusType: '2',
      icon: '../../../image/me/tuijian.png',
      text: '待发货',
      num: 6
      }, {
        statusType: '3',
        icon: '../../../image/me/tuijian.png',
        text: '待收货',
        num: 2
    }, {
      statusType: '4',
      icon: '../../../image/me/tuijian.png',
      text: '评价',
      num: 0
      }
    ],
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