// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoDetail: null,
    othersList: [],
    commentsList: null
  },
  /**
   * 获取评论数据
   */
  getComment(currentId) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + currentId,
      success(res) {
        console.log(res.data);
        if (res.data.code === 0) {
          that.setData({
            commentsList: res.data.data.commentData
          })
        }

      }
    })
  },
  /**
   * 获取推荐视频数据
   */
  getOthers(currentId) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + currentId,
      success(res) {
        // console.log(res.data);
        if (res.data.code === 0) {
          that.setData({
            othersList: res.data.data.othersList
          })
        }

      }
    })
  },
  getDetail(currentId) {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + currentId,
      success(res) {
        //console.log(res.data.data.videoInfo);
        if (res.data.code === 0) {
          that.setData({
            videoDetail: res.data.data.videoInfo
          })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options.id);

    this.getOthers(options.id);
    this.getDetail(options.id);
    this.getComment(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})