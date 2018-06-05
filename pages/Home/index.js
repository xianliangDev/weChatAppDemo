// pages/Home/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    themes: [
      {
        title: '线上商品',
        iconUrl: '../../../image/top_xian_shang_shang_pin@2x.png'
      },
      {
        title: '附近商家',
        iconUrl: '../../../image/top_fu_jin_shang_jia@2x.png'
      },
      {
        title: '一起拼团',
        iconUrl: '../../../image/top_yi_qi_pin_tuan@2x.png'
      },
      {
        title: '推荐好友',
        iconUrl: '../../../image/top_tui_jian_hao_you@2x.png'
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    swiperCurrent: 0,
    selectCurrent: 0,
    scrollTop: 0,
    advertisingJsons: [],
    hotSubjectJson: {},
    nearSubjectJson: {},
    panicBuyingSubjectJson: {},
    presellSubjectJson: {},
    subjectJsons: []

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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