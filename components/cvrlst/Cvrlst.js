// components/hd/Hd.js
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
   * 生命周期方法
   */
  lifetimes:{
    attached(){
      console.log(this.properties)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
  
  }
})
