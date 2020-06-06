// pages/madeph/madeph.js
const app = getApp();

//js的这部分有很多是找的轮子，谢谢分享轮子的网友
/**
 * 大概两部分：
 * 1、先把用户上传的头像画出来，类一个圆
 * 2、把前一个页面传过来的头像框（中间透明）在画上去就基本结束了
 * PS：思路比较清晰，但细节完善的不是很好，只能说能用吧。
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    bgsrc: '',
    bgcss:'',
    width:0,
  },

  //选择用户自己头像图片
  upload() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const src = res.tempFilePaths[0]
        //将选择的图传至upload页处理
        wx.navigateTo({
          url: `../upload/upload?src=${src}`
        })
      }
    })
  },

  //生成头像，即先画图像再画图像框
  generate() {
    let contex = wx.createCanvasContext('ahaucanvas'); 
    var disp_width = this.data.width*360/375; //这个是画布宽
    var disp_heigth = 4/3*this.data.width*360/375; //这个是高
    contex.drawImage(this.data.src, 0, 0,100,100);
    contex.restore();
    contex.save();
    contex.beginPath(); //开始绘制
    console.debug(this.data.bgsrc);
    contex.drawImage(this.data.bgsrc, 0, 0,disp_width ,disp_heigth ); // 这个是我的背
    contex.restore();
    contex.draw();
  },

  saveImage(){
    let that=this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 960,
      height: 1280,
      destWidth: 960,
      destHeight: 1280,
      canvasId: 'ahaucanvas',
      success: function (res) {
        that.saveImageToPhotos(res.tempFilePath);
      },
      fail: function (res) {
        wx.showToast({
          title: '图片生成失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  saveImageToPhotos: function (tempFilePath) {
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success(result) {
        wx.showToast({
          title: '保存成功，从相册中分享到朋友圈吧',
          icon: 'none',
          duration: 4000
        })
      },
      fail: function (res) {
          wx.showToast({
            title: '图片保存失败',
            icon: 'none',
            duration: 2000
          })
      }
    })
  },

  onLoad(option) {
    var bgcss = app.globalData.toubgsrc.substr(14, 2);
    this.setData({
      bgsrc: app.globalData.toubgsrc,
      bgcss:bgcss
    });

    let { avatar } = option;
    if (avatar) {
      this.setData({
        src: avatar
      });
    }

    wx.getSystemInfo({
      complete: (res) => {
        this.setData({width:res.windowWidth})
      },
    })
  }
})