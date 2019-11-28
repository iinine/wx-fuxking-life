//index.js
var data = require('../../data/json');
Page({
  data: {
    theText: 'loading',
    dataArr: null,
  },
  //事件处理函数
  handleClick() {
    this.setData({
      theText: this.get1fk()
    })
  },
  onLoad: function() {
    this.setData({
      arr: data.arr
    })
  },
  onReady: function () {
    this.setData({
      theText: this.get1fk()
    })
  },
  onPullDownRefresh() {
    this.setData({
      theText: this.get1fk()
    })
    wx.stopPullDownRefresh();
  },
  get1fk() {
    return this.data.arr[this.getRandomIntInclusive(0, this.data.arr.length)];
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1) + min);
  }
})
