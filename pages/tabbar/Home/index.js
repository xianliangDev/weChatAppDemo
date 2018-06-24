// pages/tabbar/Home/index.js
var urlConfig = require('../../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    themes:[
      {
        title:'线上商品',
        iconUrl:'../../../image/top_xian_shang_shang_pin@2x.png',
        nextPage:'online'
      },
      {
        title: '附近商家',
        iconUrl: '../../../image/top_fu_jin_shang_jia@2x.png',
        nextPage: 'shops'
      },
      {
        title: '一起拼团',
        iconUrl: '../../../image/top_yi_qi_pin_tuan@2x.png',
        nextPage: 'buygroup'
      },
      {
        title: '推荐好友',
        iconUrl: '../../../image/top_tui_jian_hao_you@2x.png',
        nextPage: 'invitefriends'
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
    scrollTop:0,
    advertisingJsons:[],
    hotSubjectJson:{},
    nearSubjectJson:{},
    panicBuyingSubjectJson:{},
    presellSubjectJson:{},
    subjectJsons:[],
    sub0_0: {}, 
    sub0_1: {},
    sub0_2: {},
    sub0_3: {},
    sub0_4: {},
    sub0_5: {},
    sub0_6: {},
    sub0_7: {},

    sub1_0: {},
    sub1_1: {},
    sub1_2: {},
    sub1_3: {},
    sub1_4: {},
    sub1_5: {},
    sub1_6: {},
    sub1_7: {},

    sub2_0: {},
    sub2_1: {},
    sub2_2: {},
    sub2_3: {},
    sub2_4: {},
    sub2_5: {},
    sub2_6: {},
    sub2_7: {},

    /**商品类别 */
    catJsons:[],

    /**自适应功能的变量需要 */
    subThemeViewWidth:0,
    subThemeViewHeight:0,
    bannerHeight:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode:'1.1'
      },
      method:'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          advertisingJsons : res.data.advertisingJsons,
          hotSubjectJson : res.data.hotSubjectJson,
          nearSubjectJson : res.data.nearSubjectJson,
          panicBuyingSubjectJson : res.data.panicBuyingSubjectJson,
          presellSubjectJson : res.data.presellSubjectJson,
          subjectJsons: res.data.subjectJsons,
          sub0_0: res.data.subjectJsons[0],
          sub0_1: res.data.subjectJsons[1],
          sub0_2: res.data.subjectJsons[2],
          sub0_3: res.data.subjectJsons[3],
          sub0_4: res.data.subjectJsons[4],
          sub0_5: res.data.subjectJsons[5],
          sub0_6: res.data.subjectJsons[6],
          sub0_7: res.data.subjectJsons[7],
          sub1_0: res.data.subjectJsons[8],
          sub1_1: res.data.subjectJsons[9],
          sub1_2: res.data.subjectJsons[10],
          sub1_3: res.data.subjectJsons[11],
          sub1_4: res.data.subjectJsons[12],
          sub1_5: res.data.subjectJsons[13],
          sub1_6: res.data.subjectJsons[14],
          sub1_7: res.data.subjectJsons[15],

          sub2_0: res.data.subjectJsons[16],
          sub2_1: res.data.subjectJsons[17],
          sub2_2: res.data.subjectJsons[18],
          sub2_3: res.data.subjectJsons[19],
          sub2_4: res.data.subjectJsons[20],
          sub2_5: res.data.subjectJsons[21],
          sub2_6: res.data.subjectJsons[22],
          sub2_7: res.data.subjectJsons[23],

        });
        
      }
    });
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.shop_API,
      data: {
        mode: '2.5',
        catType: '1',
        level:'3',
        imageType:'2',
        updateTime:''
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          catJsons: res.data.catJsons
        });

      }
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData(
          { 
            subThemeViewWidth: res.windowWidth/4.0,
            subThemeViewHeight: res.windowWidth/4.0*(197/186.0),
            bannerHeight:res.windowWidth*3/4.0,
          }
        ) 
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
  onShareAppMessage: function () {
  
  },

  toDetailsTap:function(){
    wx.navigateTo({
      url: '../../Me/index',
    })
  },

  themelistTap:function(e){
    console.log(e)
    var nextPageType = e.currentTarget.dataset.next
    switch(nextPageType){
      case "online":
        wx.navigateTo({
          url: '../../goodslist/index',
        })
        break;
      case "shops":
        wx.navigateTo({
          url: '../../shopslist/index?targetId=' + this.data.nearSubjectJson.subjectId,
        })
        break;
      case "buygroup":
        wx.navigateTo({
          url: '../../goodslist/index',
        })
        break;
      case "invitefriends":
        wx.navigateTo({
          url: '../../goodslist/index',
        })
        break;      
      default:
        break;
    }
  },
  /**
   * 点击banner
   */
  tapBanner:function(e) {
    var data = e.currentTarget.dataset
    console.log(e.currentTarget.dataset)
    if (data.targettype === '2'){//链接地址
      wx.navigateTo({
        url: '../../web-View/webView?title=' + data.title + '&id=' + data.id,
      })
    } else if (data.targettype === '1'){//商品详情
    
    } else{

    }
    
  }
})