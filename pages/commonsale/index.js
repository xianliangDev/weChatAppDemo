// pages/commonsale/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjectName:'',//标题
    subjectType:'',//类型
    targetId:'',//项目ID
    outerShowImageUrl:'',//顶部显示的链接
    pageNum:1,//首页
    itemJsons:[],//列表
    isnext:'yes'//是否还有下一页
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this
    that.setData({
      subjectName: options.subjectName,
      subjectType: options.subjectType,
      targetId: options.targetId,
      outerShowImageUrl: options.outerShowImageUrl
    })
    wx.setNavigationBarTitle({
      title: options.subjectName,
    })
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.2',
        page: this.pageNum,
        subjectId: options.targetId
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var data = response.data;
        that.setData({
          itemJsons: data.itemJsons ? data.itemJsons:[],
          isnext: data.isnext
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
    if (this.data.isnext === 'no'){
      wx.showToast({
        title: '已是最后一页！',
      })
      return;
    }
    
    var that = this;
    // 显示加载图标  
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1  
    var pageNum = this.data.pageNum
    pageNum += 1;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.2',
        page: pageNum,
        subjectId: this.data.targetId
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var itemsJson = that.data.itemJsons
        var moment_list = response.data.itemJsons
        var resArr = [];
        for (let i = 0; i < moment_list.length; i++) {
          resArr.push(moment_list[i]);
        };
        var cont = itemsJson.concat(resArr);
        that.setData({
          itemJsons: cont,
          isnext: response.data.isnext,
          total: response.data.total,
          pageNum: pageNum
        })
        // 隐藏加载框  
        wx.hideLoading();
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})