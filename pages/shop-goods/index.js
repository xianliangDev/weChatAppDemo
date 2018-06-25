// pages/shop-goods/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponCount: '0',/**	优惠券数量 0没有 1单张 2多张 */
    deliverySpeed: '0',/**	发货速度 */
    descConformance:'0',//  描述相符
    serviceAttitude: '0',/**	服务态度 */
    serviceTel:'00',//服务电话
    itemJsons: [],/**	热销商品的集合 */
    recommendItemJsons: [],/**	推荐商品集合 */
    shopIconUrl:'',//店铺头像
    shopGrade: '',/**	店铺等级	String */
    shopName:'',//店铺名称
    shopNotice:'',//店铺公告
    shopSignUrl: '',/**	店铺招牌路径	String */

    catJsons:[],//分类表数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.shopId);
    var that = this;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.7',
        shopId: options.shopId,
        userId: ''
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var data = response.data;
        that.setData({
          couponCount: data.couponCount,/**	优惠券数量 0没有 1单张 2多张 */
          deliverySpeed: data.deliverySpeed,/**	发货速度 */
          descConformance: data.descConformance,//  描述相符
          serviceAttitude: data.serviceAttitude,/**	服务态度 */
          serviceTel: data.serviceTel,//服务电话
          itemJsons: data.itemJsons,/**	热销商品的集合 */
          recommendItemJsons: data.recommendItemJsons,/**	推荐商品集合 */
          shopIconUrl: data.shopIconUrl,//店铺头像
          shopGrade: data.shopGrade,/**	店铺等级	String */
          shopName: data.shopName,//店铺名称
          shopNotice: data.shopNotice,//店铺公告
          shopSignUrl: data.shopSignUrl,/**	店铺招牌路径	String */
        })
      }
    }),
      wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.shop_API,
        data: {
          mode: '2.4',
          shopId: options.shopId,
          level: '2'//  查找的层次
        },
        method: 'POST',
        header: {
          'content-type': 'application/json;text/html;charset=UTF-8'
        },
        success: function (response) {
          console.log(response)
          var data = response.data;
          that.setData({
            catJsons: data.catJsons
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