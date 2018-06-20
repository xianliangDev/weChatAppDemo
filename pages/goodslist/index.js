// pages/Home/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemJsons: [],
    isnext:'yes',//是否还有下一页
    total: ''//总共商品的数量
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' +  urlConfig.trade_API,
      data:{
        mode:'1.3',
        catId1:'',
        catId2:'',
        catId3:'',
        itemName:'',
        provId:'',
        cityId:'',
        isFreeFee:'',
        sortNum:'',
        sortBySales:'',
        shopId:'',
        page:'0'
      },
      method:'POST',
      header:{
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success:function(response){
        console.log(response)
        var data = response.data;
        that.setData({
          itemJsons: data.itemJsons,
          isnext: data.isnext,
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
  
  }
})