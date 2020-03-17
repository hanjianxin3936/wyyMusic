// components/playbar/Playbar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },

  /**
   * 组件的初始数据
   */
  data: {
    windowHeight: app.globalData.windowHeight,
    isplay: true,
    BackgroundAudioManager:null,
    musicName:"未知音乐",
    picUrl:"",
    singer:""
  },
  lifetimes: {
    created() {
      console.log(app)
      wx.$BackgroundAudioManager.onPlay((res)=>{
        let musicName=wx.$BackgroundAudioManager.name
        let picUrl =  wx.$BackgroundAudioManager.picUrl
        let singer = wx.$BackgroundAudioManager.audiosinger
         this.setData({
          musicName,
          picUrl,
          isplay:false,
          singer
         })
      })
      wx.$BackgroundAudioManager.onPause((res)=>{
        this.setData({
          isplay:true
         })
      })
    }

  },
  /**
   * 组件的方法列表
   */
  methods: {
    cons() {
      console.log(app.data.musicUrl)
    },
    playaudo() {
        if(this.data.isplay){
          wx.$BackgroundAudioManager.play()
        }else{
          wx.$BackgroundAudioManager.pause()
        }
    }
  }
})
