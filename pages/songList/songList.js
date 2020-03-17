// pages/songList/songList.js
import {GetCharLength} from  "../../filter/filter"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlisttracks:[],
    personalizedList:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "歌单"
    })
    var that =this

    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      let params = { id:data.audioId}
      that.getPlayListDetail(params)
    })
  },
  //获取歌单
  getPlayListDetail(params){
    wx.$httpApi.getPlayListDetail(params).then((res)=>{
      console.log(res)
      this.setData({
         converData:{
           imagePic: res.playlist.coverImgUrl,
           name: GetCharLength(res.playlist.name)>40?res.playlist.name.substring(0,20)+"...":res.playlist.name,
           playCount: res.playlist.playCount,
           description: GetCharLength(res.playlist.description)>40?res.playlist.description.substring(0,20)+"...":res.playlist.description,
           nickname: GetCharLength(res.playlist.creator.nickname)>40?res.playlist.creator.nickname.substring(0,20)+"...":res.playlist.creator.nickname
         },
         playlisttracks:res.playlist.tracks,
         musicName:res.playlist.tracks[0].name,
         personalizedList:[]
      })
    })
  },
  //播放歌单音乐
  hrefSongUrl(e){
    console.log(e)
    wx.$BackgroundAudioManager.stop()
    let params = {id:e.currentTarget.dataset.data.id}
    wx.$httpApi.getSongUrl(params).then((res)=>{
        wx.$BackgroundAudioManager.src = res.data[0].url,
        wx.$BackgroundAudioManager.title = e.currentTarget.dataset.data.name
        wx.$BackgroundAudioManager.name = e.currentTarget.dataset.data.name
        wx.$BackgroundAudioManager.picUrl = e.currentTarget.dataset.data.al.picUrl
        wx.$BackgroundAudioManager.audiosinger = e.currentTarget.dataset.data.ar[0].name
        wx.$BackgroundAudioManager.play()
        console.log( wx.$BackgroundAudioManager.audiosinger) 
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