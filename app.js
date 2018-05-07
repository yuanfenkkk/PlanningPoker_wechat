App({
  globalData: {
    taskId: '',
    taskEfforts: 1,
    aFlag: '',
    smId: '',
    devId: '',
    usrId:''},
  
  onLaunch: function () {
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo

        var nickName = userInfo.nickName
        getApp().globalData.usrId = nickName
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
      
        var city = userInfo.city
      
      }
    })
 
  }
})


