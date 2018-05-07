// SM page/smpage.js


Page({

  /**
   * 页面的初始数据
   */


  set_input: function (e) {

    getApp().globalData.taskId = e.detail.value

  },

  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  create_task: function (taskId) {
    var that = this;
    var sTaskID = "";
    var planevent = [];
    var smaster = getApp().globalData.usrId;
    var id_existed = that.checkSmId(smaster);
   // if (id_existed = True &&
    
    var task_name = {};
    task_name = getApp().globalData.taskId;
    sTaskID = task_name;
    if (sTaskID != '') {
    planevent.push('1');

    //task_name  = e.detail.value.TaskID;
    wx.request({
      url: 'http://www.angnote.club/api/tasks/',
      method: 'POST',
      data: {
        name: smaster,
        planningevents: planevent,
        scrummaster: smaster
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    });
    

    wx.navigateTo({
      url: "/smvote/smvote"
    });
    }
  },


  checkSmId: function (scrummaster_id) {
    wx.request({
      url: 'http://www.angnote.club/api/scrummasters/',
      method: 'GET',
      data: {
        scrummaster_id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // res.statusCode === 200
        // console.log(res.data)
        if (res.data.name = getApp().globalData.usrId)
          return true
        else
          return false
      }
    });



  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})