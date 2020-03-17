// pages/song/song.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    volumeBtnX: 0,//音量大小btn x方向位置
    movableAreaWidth: 0,//进度条宽度
    volumePercent: 0,//音量大小进度条位置

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  touchstartvolume() {
    console.log(1)
  },
  tapprogress(e) {
    consle.log(1)
  },
  volumeBindchange(event) {
    console.log((event))
    var moveaBleViewX = event.detail.x * 2
    var movableAreaWidth = this.data.movableAreaWidth
    if (moveaBleViewX > 0) {
      console.log((moveaBleViewX + 14) / movableAreaWidth * 100)
      this.setData({
        volumePercent: (moveaBleViewX + 14) / movableAreaWidth * 100
      })
    } else {
      this.setData({
        volumePercent: (moveaBleViewX + 14) / movableAreaWidth * 100
      })
      console.log((moveaBleViewX) / movableAreaWidth * 100)
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let query = this.createSelectorQuery()
    wx.createSelectorQuery().select('.movable-area').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function (res) {
      res.dataset    // 节点的dataset
      res.width      // 节点的宽度
      res.height     // 节点的高度
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
      res.scrollX    // 节点 scroll-x 属性的当前值
      res.scrollY    // 节点 scroll-y 属性的当前值
      // 此处返回指定要返回的样式名
      res.margin
      res.backgroundColor
      res.context    // 节点对应的 Context 对象
    }).exec((res) => {
      console.log(res[0].width * 2)
      this.setData({
        movableAreaWidth: res[0].width * 2
      })
    })
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