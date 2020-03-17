// pages/songLabel/songLabel.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    playcategoriesList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "歌单标签"
    })
    this.getPlayListCatlist()
  },
  getPlayListCatlist(){
    wx.$httpApi.getPlayListCatlist().then(res=>{
        if(res.code === app.data.HTTP_CODE.suc){
            var ListCatlist = [];
            for(var key in  res.categories){
              ListCatlist.push({title: res.categories[key],type:key,list:[]})
            }
            console.log(ListCatlist)
            res.sub.forEach((subitem,subindex)=>{
              ListCatlist.forEach((ListCatlistitem,ListCatlistindex)=>{
                  if(subitem.category==ListCatlistitem.type){
                    ListCatlist[ListCatlistindex].list.push(subitem)
                  }
              })
            })
            console.log(ListCatlist)
            this.setData({
              playcategoriesList: ListCatlist
            })


        }
   
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