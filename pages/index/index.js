//index.js
var data = require('../../data/json');
Page({
  data: {
    theText: 'loading',
    lastOne: null,
    dataArr: null,
  },
  onLoad: function(query) {
    this.setData({
      arr: data.arr
    })
    let _text;
    if(query.text) {
      _text = query.text
    } else {
      _text = this.get1fk()
    }
    this.setData({
      theText: _text
    })
  },
  onPullDownRefresh() {
    this.setData({
      lastOne: this.data.theText,
      theText: this.get1fk()
    })
    wx.stopPullDownRefresh();
  },
  // 分享页面
  onShareAppMessage() {
    return{
      "title": '哈哈哈，这个适合你',	
      "path": `/pages/index/index?text=${this.data.theText}`,
    }
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
