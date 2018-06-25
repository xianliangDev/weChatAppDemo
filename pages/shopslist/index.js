// pages/shopslist/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat:0,//纬度
    lng:0,//经度
    shopJsons:[],//店铺列表
    total:0,//店铺总个数

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      success: function(res) {
        console.log('lat' + res.latitude)
        console.log('lng' + res.longitude)
        that.setData({
          lat: res.latitude,
          lng: res.longitude
        }),
        that.loadShopData(options.targetId)
      },
    })
  },

  /**加载页面数据 */
  loadShopData:function(targetId){
    var that = this
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.2',
        subjectId: targetId,
        lat: this.data.lat,
        lng: this.data.lng
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var data = response.data;
        that.setData({
          shopJsons: data.shopJsons,
          total: data.total
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
  
  },

  /**
   * 店铺详情，店铺商品和店铺等级
   */
  toShopGoods:function(e){
      console.log(e)
      wx.navigateTo({
        url: "../shop-goods/index?shopId=" + e.currentTarget.dataset.id
      })
  }
})