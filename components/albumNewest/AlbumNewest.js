// components/albumNewest/AlbumNewest.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    toplist:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperJson: {
      indicatorActiveClor: "#ff1d12", //指示点颜色
      indicatorColor: "rgba(120,113,112,.2)",//当前选中的指示点颜色
      indicatorDots:false,//是否显示面板指示点
      autoplay:true,//是否自动轮播
      interval:5000,//自动给轮播时间间隔
      circular:true,//是否采用衔接滑动
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        toplistDetailList:[1,2,3]
      })
      console.log(this.toplistDetailList)
    }
   
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
