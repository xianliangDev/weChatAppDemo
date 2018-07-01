// pages/recommend/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    linkUrl:'',//推荐规则
    linkTitle:'多米云商超市',//
    linkContent:'线上运营平台',
    /**	响应代码	1000成功 -1失败 */
  errorcode:'',
/**	响应描述 */
errorinfo:'',
/**	我的推荐码 */
myCode:'',
/**	我推荐的用户为我赚的农币之和 */
income:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.execute_API,
      data: {
        mode: '5.3',
        userId: '5e5f75a79f3842978907f21b6d4c0b89'
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var data = response.data;
        that.setData({
          linkUrl: data.linkUrl,//推荐规则
          linkContent: data.linkContent,
        
          /**	我的推荐码 */
          myCode: data.myCode,
          /**	我推荐的用户为我赚的农币之和 */
          income: data.income
        })
      },
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
  onShareAppMessage: function (res) {
    console.log(res)
    return {
      title:'多米云上超市'
    }
  },
  /**
   * 点击转发按钮
   */
  shareBtnClick:function (){
    wx.showShareMenu({
      
    })
  }
})