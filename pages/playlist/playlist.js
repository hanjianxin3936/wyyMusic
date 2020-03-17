// pages/playlist/playlist.js
const app = getApp()
Page({
  _dataVariable: {},
  /**
   * 页面的初始数据
   */
  data: {
    playNavCatList: {},
    playNavView: [{isLoading:true}],
    playcategories: [],
    playNavSub: [],
    currentTab: "a0",
    playNavCatListMin: [],
    toView: "item0",
    showNavDrap: false,
    navIndex: 0,
    navScrollLeft: 0,
    personalizedList: [],
    swiperHeight:5400,
    url: "../../pages/songLabel/songLabel",
    swiperJson: {
      indicatorActiveClor: "#ff1d12", //指示点颜色
      indicatorColor: "rgba(120,113,112,.2)",//当前选中的指示点颜色
      indicatorDots: false,//是否显示面板指示点
      autoplay: false,//是否自动轮播
      interval: 5000,//自动给轮播时间间隔
      circular: false,//是否采用衔接滑动
      duration: 300,//动画时长
      current: 0,//滑块index位置
    },
    getTopPlaylistParams: {
      limit: 12,
      order: "hot",
      cat: ""
    },//歌单详情参数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.playNavCatList)
    wx.setNavigationBarTitle({
      title: "歌单广场"
    })
    this.getPlayListCatlist()

  },
  /**
* @method 获取歌单列表，分类
* @param {}
*/
  getPlayListCatlist() {
    wx.showLoading({
      title: '加载中',
    })
    var cat = `getTopPlaylistParams.cat`
    wx.$httpApi.getPlayListCatlist().then(res => {
      if (res.code === app.data.HTTP_CODE.suc) {
        res.sub.forEach((item)=>{
          item.isLoading=true
        })
        this.setData({
          playNavCatList: res,
          playNavView: res.sub.slice(0, 5),
          playNavSub: res.sub,
          playcategories: res.categories,
          [cat]: res.sub[0].name
        })
      }
      wx.hideLoading()
      this.getTopPlaylist()
    })
  },

  /**
* @method 获取歌单列表详情
* @param {params} Object 请求参数
*/
  getTopPlaylist(params,index) {
    
    if(!index){
      index=0
    }
    if(this.data.playNavView[index].playlists){
       return
    }
    
    wx.$httpApi.getTopPlaylist(params).then((res) => {
      if (res.code === app.data.HTTP_CODE.suc) {
        res.playlists.forEach(item => {
          item.picUrl = item.coverImgUrl
        })
        var playNavViewIndex = `playNavView[${index}].playlists`
        var playLoading=`playNavView[${index}].isLoading`
        this.setData({
          [playNavViewIndex]: res.playlists,
          [playLoading]:false,
        })
        
      }
    })
  },
  /**
 * @method 导航tap
 * @param {*} e 
 */
  swichNav: function (e) {
    if (e.currentTarget.id === this.data.toView) {
      console.log("现在已经在" + e.currentTarget.dataset.name)
      return
    }
    var current = 'swiperJson.current'
    var cat = `getTopPlaylistParams.cat`

    console.log(e)
    this.setData({
      toView: e.currentTarget.id,
      // [current]: e.currentTarget.id.substr(e.currentTarget.id.length - 1, 1),
      [cat]: e.currentTarget.dataset.name
    })
    this.getTopPlaylist(this.data.getTopPlaylistParams);

  },
  bindscroll(e) {
  },
  hrefClickplaybar() {
  },
  /**
   * @method 跳转歌单详情
   * @param {}
   */
  hrefClickpaybar() {
    wx.navigateTo({
      url: this.properties.url,
      success() {
        console.log("跳转成功")
      },
      fail() {
        console.log(url)
      }
    })
  },
  /**
 * @method 滑动swiperChange
 * @param {*} e
 */
  swiperbindchange(e) {
    console.log(e)
    var current = 'swiperJson.current'
    var cat = 'getTopPlaylistParams.cat'
    this.setData({
      toView: 'item' + e.detail.current,   //nav id
      // [current]: e.detail.current,     //swiper current
    })

      this.data.playNavView.forEach((item, index) => {
        if (item.name === e.detail.currentItemId) {
          this.setData({
            [cat]: item.name
          })
        }
      }) 
      let params = {
        ...this.data.getTopPlaylistParams
      }
      console.log(params)
      this.getTopPlaylist(params, e.detail.current)
      console.log(123)

    console.log("滑动到" + e.detail.current)
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