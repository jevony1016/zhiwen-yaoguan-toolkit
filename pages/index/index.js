Page({
  data: {
    tools: [
      {
        path: "/packages/ctcae/pages/ctcae/index"
      },
      {
        path: "/packages/gcp/pages/glossary/index"
      },
      {
        path: "/packages/personality/pages/home/index"
      }
    ]
  },

  openTool(event) {
    const path = event.currentTarget.dataset.path;
    wx.navigateTo({ url: path });
  },

  openWechat() {
    // wx.openOfficialAccountArticle 只能在真机使用
    wx.openOfficialAccountArticle({
      biz: 'MzY4MTI5NzE1Mw==',
      success: () => {
        console.log('打开公众号成功');
      },
      fail: (err) => {
        console.log('打开公众号失败', err);
        // 开发者工具不支持此API，改为复制公众号名称
        wx.setClipboardData({
          data: '知闻药观',
          success: () => {
            wx.showModal({
              title: '公众号名称已复制',
              content: '请在微信中搜索"知闻药观"关注公众号',
              showCancel: false,
              confirmText: '知道了'
            });
          }
        });
      }
    });
  }
});
