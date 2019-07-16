// page/home/home.js


import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     appScreat:'c4d418debb577ce68a11fa62a7f98bfe',
     appId:'wx3b8b3392c97707d6'

  },

  /*doPost(){
    console.log("----------")
    console.log(this.appScreat)
    // 2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://192.168.137.1:8080/abc'
      
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    
  },*/


  doPost(){
    

    // 2.使用封装的request发送网络请求
    // Promise最大的好处就是防止出现回调地狱
    request({
     
     /* url: 'http://192.168.137.1:8080/user/login',
      method: 'post',
      data: {
        username: '123',
        password: '123'
      },
      header:{
        //浏览器的原生 <form> 表单,其中ajax也是用这种方式提交的
        //让后台可以解析到正确数据
        'content-type': 'application/x-www-form-urlencoded'
      }*/
      url: 'http://192.168.56.1:8080/ll',
      method: 'post',
      data: {
        username: '123',
        password: '123'
      },
      header:{
        //浏览器的原生 <form> 表单,其中ajax也是用这种方式提交的
        //让后台可以解析到正确数据
        'content-type': 'application/x-www-form-urlencoded',
        token:'1eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjMyODUxNTAsInVOYW1lIjoiMTIzIiwidUlkIjoiMTIzIiwiZXhwIjo0NTYzMjg1MTUwfQ.t_2nWZ_dkN9KypzPnYwgZ3NWVlJNybAn6DsvKefnnMg'
      }


      
    }).then(res => {
      console.log(res)
      console.log(res.data.data)
    }).catch(err => {
      console.log(err)
    })
    
  },

  

  /**
   * 回调函数
   */
  handleTabClick(event) {
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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