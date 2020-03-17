//index.js
//获取应用实例
const app = getApp()
Page({
  _data:{},
  data: {
    constData: { //固定不变直
      islogo:"block"
    },
    variable: {//变化值
      personalizedList: [1, 2],//推荐歌单list
      bannerList: [],//bannerList
      albumnewest: [],//新碟LIST
      toplist: [],//排行榜
      list: [],
    }
  },
  hrefClickplay(){
    wx.navigateTo({
      url:"../../pages/playlist/playlist"
    })
  },
  onLoad: function () {

    Promise.all([
      this.personalized(),
      this.getBanner(),
      this.getalbumnewest(),
      this.getToplist()
    ]).then(() => {
      var obj = {};
      Object.assign(obj, this.data.variable,this._data)
      console.log(obj)
      this.setData({
        variable: obj,

      })
      setTimeout(()=>{
        this.setData({
          constData:{islogo:"none"}
        },3000)
      })
      console.log(this.data.variable, "所有异步操作完成后的data")
      
      console.log(this.data.variable.bannerList)
    })
  },

  //推荐歌单
  personalized() {
    return new Promise((relove, reject) => {
      let params = { limit: 6 }
      wx.$httpApi.personalized(params).then(res => {
        if (res.code === app.data.HTTP_CODE.suc) {
          this._data.personalizedList = res.result
          relove()
        }
      })
    })
  },
  // banner
  getBanner() {
    return new Promise((relove, reject) => {
      let params = { type: 1 };
      wx.$httpApi.getBanner(params).then(res => {
        if (res.code === app.data.HTTP_CODE.suc) {
          this._data.bannerList = res.banners
          relove();
        }else{
          reject();
        }
      })
    })
  },
  getalbumnewest() {
    return new Promise((relove, reject) => {
      wx.$httpApi.getalbumnewest().then(res => {
        if (res.code === app.data.HTTP_CODE.suc) {
          this._data.albumnewest = res.albums
          relove();
        }
      })
    })
  },
  getToplist() {
    return new Promise((relove, reject) => {
      let params = {
        idx: 0
      }
      wx.$httpApi.getTopList(params).then(res => {
        if (res.code === app.data.HTTP_CODE.suc) {
          let _res = res.playlist.tracks.slice(0, 3)
          this._data.toplist = [[..._res]]
        }
      }).then(() => {
        let params = {
          idx: 1
        }
        wx.$httpApi.getTopList(params).then(res => {
          if (res.code === app.data.HTTP_CODE.suc) {
            let _res = res.playlist.tracks.slice(0, 3)
            this._data.toplist = [...this._data.toplist, [..._res]] 
          }
        })
      }).then(() => {
        let params = {
          idx: 2
        }
        wx.$httpApi.getTopList(params).then(res => {
          if (res.code === app.data.HTTP_CODE.suc) {
            let _res = res.playlist.tracks.slice(0, 3)
            this._data.toplist = [...this._data.toplist, [..._res]]
            relove()
          }
        })
      })
    
    })
  }
})
