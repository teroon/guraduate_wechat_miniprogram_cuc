// pages/select/select.js
const app = getApp();
var _tousList = [{
  name: '类 型 1',
  coverImgUrl: '/images/girl.png'
}, 
{
    name: '类 型 2',
  coverImgUrl: 'https://wx1.sinaimg.cn/mw690/0061u2uAgy1gfilrn8isbj30qo0zkb2a.jpg'
}, 
{
    name: '类 型 3',
  coverImgUrl: 'https://wx1.sinaimg.cn/mw690/0061u2uAgy1gfilrn8isbj30qo0zkb2a.jpg'
}, 
{
    name: '类 型 4',
  coverImgUrl: 'https://wx1.sinaimg.cn/mw690/0061u2uAgy1gfilrn8isbj30qo0zkb2a.jpg'
},
{
  name: '类 型 5',
  coverImgUrl: 'https://wx1.sinaimg.cn/mw690/0061u2uAgy1gfilrn8isbj30qo0zkb2a.jpg'
},
{
  name: '类 型 6',
  coverImgUrl: 'https://wx1.sinaimg.cn/mw690/0061u2uAgy1gfilrn8isbj30qo0zkb2a.jpg'
}
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    touList: _tousList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击选项进入详情页
  detail: function (e) {
    // console.log(e)
    var touNum = e.currentTarget.dataset.tounum
    // console.log(yangzhiNum)
    switch (touNum) {
      case 0:
        app.globalData.toubgsrc = _tousList[0].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 1:
        app.globalData.toubgsrc = _tousList[1].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 2:
        app.globalData.toubgsrc = _tousList[2].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 3:
        app.globalData.toubgsrc = _tousList[3].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 4:
        app.globalData.toubgsrc = _tousList[4].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 5:
        app.globalData.toubgsrc = _tousList[5].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      default:
      //do nothing
    }
  },

})