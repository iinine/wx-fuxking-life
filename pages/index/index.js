//index.js
var data = require('../../data/json');
Page({
  data: {
    theText: 'loading',
    lastOne: null,
    dataArr: null,
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
      lastOne: this.data.theText,
      theText: this.get1fk()
    })
    wx.stopPullDownRefresh();
  },
  onShareAppMessage() {
    wx.showShareMenu({
      withShareTicket: false
    })
  },
  handleClick() {
    this.setData({
      lastOne: this.data.theText,
      theText: this.get1fk()
    })
  },
  get1fk() {
    return this.data.arr[this.getRandomIntInclusive(0, this.data.arr.length)];
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1) + min);
  },
  handleViewLast() {
    this.setData({
      theText: this.data.lastOne,
      lastOne: null
    })
  }
})
