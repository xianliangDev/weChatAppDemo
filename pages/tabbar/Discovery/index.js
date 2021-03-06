// pages/tabbar/Discovery/index.js
var urlConfig = require('../../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage:1,
    freshJsons:[],
    isnext:'yes',//是否还有下一页内容
    total:0 //总共有的数据条数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.execute_API,
      data:{
        mode:'6.1',
        page: that.currentPage
      },
      method:'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8' // 默认值
      },
      success:function(respondse){
        console.log(respondse.data)
        that.setData({
          freshJsons: respondse.data.freshJsons,
          total:respondse.data.total,
          isnext: respondse.data.isnext
        })
      }
    })
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