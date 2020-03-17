import { CONTENT_TYPE, HTTP_CODE, BASE_URL } from "./http_constants.js"

const app = getApp();
const request = (url, data, method, type) => {
  return new Promise((resolve, reject) => {
    url = BASE_URL + url
    if (data && method !== "get") {
      data = JSON.stringify(data)
    }
    if (!type) {
      type = CONTENT_TYPE.form
    }

    wx.request({
      header: { 'Content-Type': CONTENT_TYPE[type] },
      url,
      data,
      method,
      type,
      success: (res) => {
        resolve(res.data)
      },
      fail: (erro) => {
        reject(res.erro)
      },

    })
  })
}
export default request;