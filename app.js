//app.js
import http from "./http/http_api.js"
import {HTTP_CODE} from "./http/http_constants.js" 
App({
  data:{
    HTTP_CODE: HTTP_CODE,

  },
  onLaunch: function () {
     let that = this
     wx.$httpApi = http
     
     this.globalData.BackgroundAudioManager=wx.getBackgroundAudioManager();
     wx.$BackgroundAudioManager= this.globalData.BackgroundAudioManager
     wx.$BackgroundAudioManager.onPlay((res)=>{
      console.log("开始播放")
    })
    wx.$BackgroundAudioManager.onPause((res)=>{
      console.log("暂停播放")
    })
     wx.getSystemInfo({
      success(res){
        console.log(res.windowHeight - res.statusBarHeight)
      }
    })
    var h = wx.getSystemInfoSync().windowHeight;
     var t = wx.getSystemInfoSync().statusBarHeight
     this.globalData.windowHeight=`${(h-20-40)*2}"rpx"`
     console.log(this.globalData.windowHeight)
  },
  // 自定义监听globalData方法

  watch(){
    var obj = this.globalData
    Object.defineProperties(obj,'musicUrl',{
      get:function (){
        return data
      },
      set:function(newValue){
        data = newValue
        console.log("变化了")
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl:'www.baidu.com',
    windowHeight: 0,
    BackgroundAudioManager:null,
    musicUrl: "",
    musicName: "未知音乐",
  },
})