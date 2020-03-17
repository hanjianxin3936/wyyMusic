// components/banner/Banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bannerList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperJson: {
      indicatorActiveClor: "#ff1d12", //指示点颜色
      indicatorColor: "rgba(120,113,112,.2)",//当前选中的指示点颜色
      indicatorDots:true,//是否显示面板指示点
      autoplay:true,//是否自动轮播
      interval:5000,//自动给轮播时间间隔
      circular:true,//是否采用衔接滑动
    }
  },
  lifetimes: {
    attached() {
      console.log(this.properties)

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
