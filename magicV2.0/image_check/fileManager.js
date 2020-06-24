
// 文件管理
const promisify = require('./promisify')
const fileSystemManager = wx.getFileSystemManager()
const readFile = promisify(fileSystemManager.readFile)
export { readFile }