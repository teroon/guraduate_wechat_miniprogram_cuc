// pages/select/select.js
const app = getApp();
var _tousList = [{
  name: '母校，母校！',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E4%B8%BB%E6%A5%BC%E7%94%B7.png'
}, 
{
    name: '筑梦之路',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E5%8A%A8%E9%99%A2%E7%94%B7.png'
}, 
{
    name: '青春之歌',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E5%8D%97%E6%93%8D%E7%94%B7.png'
}, 
{
    name: '藏宝地图',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%94%B7.png'
},
{
  name: '万世师表',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E5%AD%94%E5%AD%90%E5%83%8F%E7%94%B7.png'
},
{
  name: '起点和终点',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E6%96%87%E5%8C%96%E5%B9%BF%E5%9C%BA%E7%94%B7.png'
},
{
  name: '潭水清浅',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E6%98%8E%E5%BE%B7%E6%A5%BC%E7%94%B7.png'
},
{
  name: '青葱一隅',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E7%94%B5%E8%A7%86%E5%AD%A6%E9%99%A2%E7%94%B7.png'
},
{
  name: '书山学海',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E8%8A%B1%E6%A0%91%E7%94%B7.png'
},
{
  name: '钢琴湖畔',
  coverImgUrl: 'https://cucprogram-1302361841.cos.ap-beijing.myqcloud.com/%E9%92%A2%E7%90%B4%E6%B9%96%E7%94%B7.png'
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
          url: "../madeph/madeph?x=223&y=742"
        })
        break;
      case 1:
        app.globalData.toubgsrc = _tousList[1].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=809&y=743"
        })
        break;
      case 2:
        app.globalData.toubgsrc = _tousList[2].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=599&y=720"
        })
        break;
      case 3:
        app.globalData.toubgsrc = _tousList[3].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=697&y=725"
        })
        break;
      case 4:
        app.globalData.toubgsrc = _tousList[4].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=694&y=693"
        })
        break;
      case 5:
        app.globalData.toubgsrc = _tousList[5].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=595&y=677"
        })
        break;
      case 6:
        app.globalData.toubgsrc = _tousList[6].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=434&y=679"
        })
        break;
      case 7:
        app.globalData.toubgsrc = _tousList[7].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=125&y=715"
        })
        break;
      case 8:
        app.globalData.toubgsrc = _tousList[8].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=517&y=717"
        })
        break;
      case 9:
        app.globalData.toubgsrc = _tousList[9].coverImgUrl
        wx.navigateTo({
          url: "../madeph/madeph?x=626&y=742"
        })
        break;     
      default:
      //do nothing
    }
  },

})