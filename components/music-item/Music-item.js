// components/music-item/Music-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    personalizedList:Array
  },
  options:{
    addGlobalClass:true
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hrefSongList(e){
      console.log(e)
      wx.navigateTo({
        url:"../../pages/songList/songList",
        success(res){
          console.log("跳转成功")
          res.eventChannel.emit('acceptDataFromOpenerPage', { audioId:e.currentTarget.dataset.audoid })
        },
        events:{
          
        }
      })
    }
  }
})
