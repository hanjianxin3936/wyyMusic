// components/nav/Nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    iIconSytleNum:"1"
  },
  lifetimes: {
    attached(){
      let data = new Date().getDate()-1
      console.log(data)
      this.setData({
        iIconSytleNum:'iconfont rili icon-rili' + data
      })
      console.log(this.data.riliIconSytleNum)
    },
   
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
