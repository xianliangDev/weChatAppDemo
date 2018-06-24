// pages/goods-details/goods-details.js
var urlConfig = require('../../urlConfig.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0, 
    /**	响应代码	1000成功 -1失败 */
    errorcode:'',
    /**	响应描述 */
    errorinfo:'',
    /**	商品名称 */
    itemName:'',
    /**	商品产地 */
    cityName:'',
    /**	商品销量 */
    totalSales:'',
    /**	农币可抵百分比 */
    useScore:'',
    /**	价格 */
    currPrice:'',
    /**	商品库存 */
    inventoryAmount:'',
    /**	商品原价 */
    origPrice:'',
    /**	商品详情路径 */
    itemUrl:'',
    /**	配送地区 */
    deliveryInfo:'',
    /**	商品总评论数 */
    total:'',
    /**	运费	包邮 价钱 */
    deliveryPrice:'',
    /**	开始时间	抢购开始时间 预售开始发货时间 */
    startTime:'',
    /**	结束时间	抢购结束时间 */
    endTime:'',
    /**	是否收藏	0否 1是 */
    isCollect:'',
    /**	是否有下一页评论 yes有 no没有 */
    isnext:'',
    /**	是否限区域 0不限 1限区域 */
    isAreaLimit:'',
    /**	商品标签	1自营 2他营 */
    itemTag:'',
    /**	商品类型	商品标签: 0普通 1热销 2预售 3抢购 4团购 */
    itemType:'',
    /**	商品展示图集合 */
    images:'',
    /**	出售商品的店铺信息 */
    shopJson:{},
    /**	商品评论的集合 */
    commentJsons:[],


    /**	优惠券数量 0没有 1单张 2多张 */
    couponCount:'', // v1.01.00添加字段
    /**	满包邮 没值说明没活动 */
    freeCount:0,   // v1.01.00添加字段
    /**	是否可以使用优惠券	0否 1是 */
    useCoupon:'',  // v1.01.00添加字段
    /**	单张优惠券详情 */
    couponJson:{},  // v1.01.00添加字段

    /**	参团数量 */
      nnt:'',         // v1.02.01添加字段
    /**	团购价格 */
    grouponPrice:'',// v1.02.01添加字段
    /**	拼团说明路径 */
    grouponUrl:'',  // v1.02.01添加字段
    /** 返还农币百分比 */
    backScore:'',   // v1.03.01添加字段


    /**	最小销售单元集合 */
    skuJsons:[],  // v1.03.00添加字段
    /**	商品属性的集合 	比如： 重量：{200g,250g} */
    featureMap:{},// v1.03.00添加字段
    /**	属性名称	String	比如： 请选择口味，重量，颜色 */
    featureValues:'',// v1.03.00添加字段
    /**	分享信息 */
    shareJson:{},// v1.03.00添加字段

    shopNum: 0,
    hideShopPopup: true,
    buyNumber: 0,
    buyNumMin: 1,
    buyNumMax: 0,

    propertyChildIds: "",
    propertyChildNames: "",
    canSubmit: false, //  选中规格尺寸时候是否允许加入购物车
    shopCarInfo: {},
    shopType: "addShopCar",//购物类型，加入购物车或立即购买，默认为加入购物车
  },

  //事件处理函数
  swiperchange: function (e) {
    console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('' + options)
    var that = this
    // 获取购物车数据
    wx.getStorage({
      key: 'shopNum',
      success: function (res) {
        that.setData({
          // shopCarInfo: res.data,
          // shopNum: res.data.shopNum
        });
      }
    })
    wx.request({
      url: '' + urlConfig.rootDomain + '/' + urlConfig.trade_API,
      data: {
        mode: '1.4',
        itemId:options.id,
        userId:''
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;text/html;charset=UTF-8'
      },
      success: function (response) {
        console.log(response)
        var data = response.data
        that.setData({
          errorcode: data.errorcode,
          errorinfo: data.errorinfo,
          itemName: data.itemName,
          cityName: data.cityName,
          totalSales: data.totalSales,
          useScore: data.useScore,
          currPrice: data.currPrice,
          inventoryAmount: data.inventoryAmount,
          // origPrice: data.origPrice,
          itemUrl: data.itemUrl,
          deliveryInfo: data.deliveryInfo,
          total: data.total,
          deliveryPrice: data.deliveryPrice,
          // startTime: data.startTime,
          // endTime: data.endTime,
          // isCollect: data.isCollect,
          isnext: data.isnext,
          isAreaLimit: data.isAreaLimit,
          itemTag: data.itemTag,
          itemType: data.itemType,
          images: data.images,
          shopJson: data.shopJson,
          commentJsons: data.commentJsons,
          couponCount: data.couponCount, 
          freeCount: data.freeCount ? parseInt(data.freeCount):0,  
          useCoupon: data.useCoupon,

          backScore: data.backScore,
          shareJson: data.shareJson
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

  toAddShopCar: function () {
    this.setData({
      shopType: "addShopCar"
    })
    // this.bindGuiGeTap();
  },
  /**
   * 组建购物车信息
   */
  bulidShopCarInfo: function () {
    // 加入购物车
    var shopCarMap = {};
    // shopCarMap.pic = this.data.goodsDetail.basicInfo.pic;
    // shopCarMap.name = this.data.goodsDetail.basicInfo.name;
    // // shopCarMap.label=this.data.goodsDetail.basicInfo.id; 规格尺寸 
    // shopCarMap.propertyChildIds = this.data.propertyChildIds;
    // shopCarMap.label = this.data.propertyChildNames;
    // shopCarMap.price = this.data.selectSizePrice;
    // shopCarMap.score = this.data.totalScoreToPay;
    // shopCarMap.left = "";
    // shopCarMap.active = true;
    shopCarMap.number = 1;
    // shopCarMap.logisticsType = this.data.goodsDetail.basicInfo.logisticsId;
    // shopCarMap.logistics = this.data.goodsDetail.logistics;
    // shopCarMap.weight = this.data.goodsDetail.basicInfo.weight;

    var shopCarInfo = this.data.shopCarInfo;
    if (!shopCarInfo.shopNum) {
      shopCarInfo.shopNum = 0;
    }
    if (!shopCarInfo.shopList) {
      shopCarInfo.shopList = [];
    }
    var hasSameGoodsIndex = -1;
    for (var i = 0; i < shopCarInfo.shopList.length; i++) {
      var tmpShopCarMap = shopCarInfo.shopList[i];
      if (tmpShopCarMap.goodsId == shopCarMap.goodsId && tmpShopCarMap.propertyChildIds == shopCarMap.propertyChildIds) {
        hasSameGoodsIndex = i;
        shopCarMap.number = shopCarMap.number + tmpShopCarMap.number;
        break;
      }
    }

    // shopCarInfo.shopNum = shopCarInfo.shopNum + this.data.buyNumber;
    shopCarInfo.shopNum = shopCarInfo.shopNum + 1;
    if (hasSameGoodsIndex > -1) {
      shopCarInfo.shopList.splice(hasSameGoodsIndex, 1, shopCarMap);
    } else {
      shopCarInfo.shopList.push(shopCarMap);
    }
    // shopCarInfo.kjId = this.data.kjId;
    return shopCarInfo;
  },
  /**
  * 加入购物车
  */
  addShopCar: function () {
    // if (this.data.goodsDetail.properties && !this.data.canSubmit) {
    //   if (!this.data.canSubmit) {
    //     wx.showModal({
    //       title: '提示',
    //       content: '请选择商品规格！',
    //       showCancel: false
    //     })
    //   }
    //   this.bindGuiGeTap();
    //   return;
    // }
    // if (this.data.buyNumber < 1) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '购买数量不能为0！',
    //     showCancel: false
    //   })
    //   return;
    // }
    //组建购物车
    var shopCarInfo = this.bulidShopCarInfo();

    this.setData({
      shopCarInfo: shopCarInfo,
      shopNum: shopCarInfo.shopNum
    });

    // 写入本地存储
    wx.setStorage({
      key: 'shopNum',
      data: 1
    })
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
    //console.log(shopCarInfo);

    //shopCarInfo = {shopNum:12,shopList:[]}
  },
})