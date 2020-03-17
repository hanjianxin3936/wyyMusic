// components/playList-nav/PlayList-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    playNavCatList:Object,
    playNavView:Array,
    playNavSub:Array,
    playcategories:Array,
    url:String
    
  },

  /**
   * 组件的初始数据 
   */
  data: {
    currentTab:"a0",
    playNavCatListMin: [],
    toView:"item0",
    showNavDrap: false,
    navIndex: 0,
    navScrollLeft: 0
  },
   
  /**
   * 组件的方法列表
   */
  methods: {
    swichNav: function (e) {
       console.log(e)
 
      this.setData({
        toView:e.currentTarget.id
      })
      console.log(this.data.toView)
    },
    bindscroll(e){  
    },
    hrefClickplaybar(){

    },
    hrefClickpaybar(){

      wx.navigateTo({
        url: this.properties.url,
        success(){
          console.log("跳转成功")
        },
        fail(){
          console.log(url)
        }
      })
    },
  },


  attached(){
  
    console.log(this.properties.playNavCatList)
  }
 
})
