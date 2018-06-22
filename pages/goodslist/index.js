// pages/Home/index.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemJsons: [],
    isnext:'yes',//是否还有下一页
    total: '',//总共商品的数量,
    currentPage: 1,//当前页码
  
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
        page: this.data.currentPage
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
    var that = this;
    // 显示加载图标  
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1  
    var currentPage_ = this.data.currentPage
    currentPage_ += 1;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.3',
        catId1: '',
        catId2: '',
        catId3: '',
        itemName: '',
        provId: '',
        cityId: '',
        isFreeFee: '',
        sortNum: '',
        sortBySales: '',
        shopId: '',
        page: currentPage_
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
          currentPage:currentPage_
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
  
  },
  toDetailsTap: function (e) {
    console.log(e)
    wx.navigateTo({
      url: "../goods-details/goods-details?id=" + e.currentTarget.dataset.id
    })
  },
})