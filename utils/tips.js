/**
 * 提示与加载工具类
 */
export default class Tips {
    constructor() {
        this.isLoading = false
    }
    /**
     * 弹出提示框
     */

    static success(title, duration = 500) {
        wx.showToast({
            title: title,
            icon: 'success',
            mask: true,
            duration: duration
        })
        if (duration > 0) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, duration);
            });
        }
    }
// 爱心+1

    static love(title, duration = 500) {
      wx.showToast({
        title: title,
        icon: 'http://p1jrmxejh.bkt.clouddn.com/photo/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180120102346.png',
        mask: true,
        duration: duration
      })
      if (duration > 0) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, duration);
        });
      }
    }
    /**
     * 弹出确认窗口
     */
    static confirm(text, payload = {}, title = '提示') {
        return new Promise((resolve, reject) => {
            wx.showModal({
                title: title,
                content: text,
                showCancel: true,
                success: res => {
                    if (res.confirm) {
                        resolve(payload)
                    } else if (res.cancel) {
                        reject(payload)
                    }
                },
                fail: res => {
                    reject(payload)
                }
            })
        })
    }

    static toast(title, onHide, icon = 'success') {
        wx.showToast({
            title: title,
            icon: icon,
            mask: true,
            duration: 500
        })
        // 隐藏结束回调
        // if (onHide) {
        //     setTimeout(() => {
        //         onHide()
        //     }, 500)
        // }
    }

    /**
     * 警告框
     */
    static alert(title) {
        wx.showToast({
            title: title,
            image: '../img/alert.png',
            mask: true,
            duration: 2000
        })
    }

    /**
     * 错误框
     */

    static error(title, onHide) {
        wx.showToast({
            title: title,
            image: '../img/error.png',
            mask: true,
            duration: 500
        })
        // 隐藏结束回调
        if (onHide) {
            setTimeout(() => {
                onHide()
            }, 500)
        }
    }
    /*录音*/
    static voice(title) {
      wx.showToast({
        title: title,
        image: '../img/voice.png',
        mask: true
      })
    }
    /**
     * 弹出加载提示
     */
    static loading(title = '加载中') {
        if (Tips.isLoading) {
            return
        }
        Tips.isLoading = true
        wx.showLoading({
            title: title,
            mask: true
        })
    }

    /**
     * 加载完毕
     */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false
            wx.hideLoading()
        }
    }



    static share(title, url, desc) {
        return {
            title: title,
            path: url,
            desc: desc,
            success: function (res) {
                Tips.toast('分享成功')
            }
        }
    }
}

/**
 * 静态变量，是否加载中
 */

Tips.isLoading = false;