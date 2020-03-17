// components/my-image/My-image.js
const LOADING_SRC = "../../assets/image/loadingimg.jpg"
Component({
  /**
   * 组件的属性列表
   */
  
  properties: {
      src:{
        type:String,
        value:"",
      },
      loadingSrc:{
        type:String,
        value: LOADING_SRC
      },
      imgMode:{
        type:String,
        value:"widthFix"
      }
  },

  attached(){

  },
  /**
   * 组件的初始数据
   */
  data: {
    imgSrc:"",
    isLoading:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    load(){
      this.setData({
        isLoading:false
     })
    }
  }
})
