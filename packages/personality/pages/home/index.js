Page({
  data: {
    tests: [
      {
        id: "mbti",
        title: "16 型人格偏好测试",
        subtitle: "32 题专业版",
        desc: "从能量来源、信息获取、判断方式和生活组织四个维度，生成一份克制、有用的自我观察报告。",
        meta: "约 4 分钟",
        accent: "purple"
      },
      {
        id: "sbti",
        title: "医药人 SBTI",
        subtitle: "行业状态码",
        desc: "把临床研究和医药行业日常，翻译成一个适合截图分享的项目组隐藏角色。",
        meta: "约 3 分钟",
        accent: "green"
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({ title: "人格小测" });
  },

  startTest(event) {
    const type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: `/packages/personality/pages/test/index?type=${type}`
    });
  }
});
