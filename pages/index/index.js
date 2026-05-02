Page({
  data: {
    tools: [
      {
        id: "ctcae",
        icon: "C",
        title: "CTCAE v6.0 检索",
        subtitle: "不良事件分级标准中英文对照",
        meta: "850 条标准条目",
        status: "已上线",
        path: "/packages/ctcae/pages/ctcae/index"
      }
    ]
  },

  openTool(event) {
    const path = event.currentTarget.dataset.path;
    if (!path) {
      wx.showToast({
        title: "功能规划中",
        icon: "none"
      });
      return;
    }

    wx.navigateTo({ url: path });
  }
});
