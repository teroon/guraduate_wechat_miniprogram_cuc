
const promisify = require('./promisify')

// 压缩图片，由于 imgSecCheck 方法限制 1M
const compressImage = promisify(wx.compressImage)
import {
  readFile
} from './fileManager'

const cloudCall = promisify(wx.cloud.callFunction)

/**
* 图片校验调用函数
* 参数 图片临时路径
*
*/
function imgSecCheck(filePath) {
  console.log("imgSecCheck", filePath)
  return new Promise((resolve, reject) => {
    compressImage({
      src: filePath, // 图片路径
      quality: 50 // 压缩质量
    }).then(res => {
      readFile({
        filePath: res.tempFilePath
      }).then(res => {
        console.log("fileManager", res)
        console.log("fileManager", res.data.byteLength)
        cloudCall({
          name: "openapi",
          data: {
            action: "imgSecCheck",
            file: res.data
          }
        }).then(res => {
          console.log("cloudCall", res)
          resolve(res)
        }).catch(err => {
          reject(err)
          console.log("cloudCall:err", err)
        })
      }).catch(err => {
        reject(err)
        console.log("fileManager:err", err)
      })
    }).catch(err=>{
      reject(err)
        console.log("compressImage:err", err)
    })
  })
}
export {
  imgSecCheck
}