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

  data: {
    src: '',
    bgsrc: '',
    bgcss:'',
    pos_x:0,
    pos_y:0,
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

  doImgSecCheck: function () {
    var d = Date.now()
    wx.serviceMarket.invokeService({
      service: 'wxee446d7507c68b11',
      api: 'imgSecCheck',
      data: {
        "Action": "ImageModeration",
        "Scenes": ["PORN", "POLITICS", "TERRORISM"],
        "ImageUrl": this.data.src,
        "ImageBase64": "",
        "Config": "",
        "Extra": ""
      },
    }).then(res => {
      console.log(JSON.stringify(res))
      wx.showModal({
        title: 'cost',
        content: (Date.now() - d) + ' ',
      })
    })
  },

  //生成头像，即先画图像再画图像框
  generate() {
    let contex = wx.createCanvasContext('ahaucanvas'); 
    console.log("pos_x:"+this.data.pos_x+typeof(this.data.pos_x));
    console.log("pos_y:"+this.data.pos_y+typeof(this.data.pos_y));
    console.log("width:"+this.data.width+typeof(this.data.width));
    var disp_width = this.data.width*360/375; //这个是画布宽
    var disp_heigth = 4/3*this.data.width*360/375; //这个是高
    var avatar_x=(app.globalData.pos_x-14)/960*disp_width;
    var avatar_y=(app.globalData.pos_y+5)/1280*disp_heigth;
    contex.drawImage(this.data.src,avatar_x , avatar_y,128/960*disp_width,128/960*disp_width);
    contex.restore();
    contex.save();

    contex.beginPath(); //开始绘制
    wx.getImageInfo({
      src : this.data.bgsrc,
     success : res => {
       //res.path 为getImageInfo预加载的缓存图片地址
       contex.drawImage( res.path ,0, 0,disp_width ,disp_heigth);
       contex.restore();
       contex.draw();
   }
  });

  },

  saveImage(){
    var disp_width = this.data.width*360/375; //这个是画布宽
    var disp_heigth = 4/3*this.data.width*360/375; //这个是高
    let that=this;
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: disp_width,
      height: disp_heigth,
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
          icon: 'success',
          duration: 2000
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

  onLoad:function(option) {
    console.log(option)
    var that=this;

    //var opx=parseInt(option.x);
    //var opy=parseInt(option.y);
    //console.log("opx:"+opx+typeof(opx));
    var bgcss = app.globalData.toubgsrc.substr(14, 2);
    that.setData({
      bgsrc: app.globalData.toubgsrc,
      bgcss:bgcss,
    });


    let { avatar } = option;
    if (avatar) {
      that.setData({
        src: avatar,
      });
      wx.showToast({
        title: '上传成功，点击"合成图片"得到专属云合照',
        icon: 'none',
        duration: 2000
      })
    }
    if(!avatar){
      app.globalData.pos_x=Number(option.x);
      app.globalData.pos_y=Number(option.y);
    }
    wx.getSystemInfo({
      complete: (res) => {
        that.setData({
          width:res.windowWidth,
        });
      },
    })
    
    console.log("src:"+this.data.src+typeof(this.data.src));
    console.log("pos_x:"+app.globalData.pos_x+typeof(app.globalData.pos_x));
    console.log("pos_y:"+app.globalData.pos_y+typeof(app.globalData.pos_y));
    console.log("width:"+this.data.width+typeof(this.data.width));
  }
})