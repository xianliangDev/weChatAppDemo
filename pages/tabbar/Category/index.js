// pages/tabbar/Category/index.js
var urlConfig = require('../../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorys:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
     wx.request({
       url: '' + urlConfig.rootDomain + '/' + urlConfig.shop_API,
       data:{
          mode:'2.5',
          catType:'1',
          level:'2',//数据返回的是一级+二级数据
          imageType:'1',//返回的数据布局样式 1水平 2竖直
          updateTime:''
       },
       method:'POST',
       header: {
         'content-type': 'application/json;text/html;charset=UTF-8' // 默认值
       },
       success:function(response){
         console.log(response)
         that.setData({
           categorys: response.data.catJsons
         }
         )
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