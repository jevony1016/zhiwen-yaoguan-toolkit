const { getByAbbr, getByCategory } = require("../../utils/search");

Page({
  data: {
    item: null,
    related: []
  },

  onLoad(options) {
    const abbr = decodeURIComponent(options.abbr || "");
    const item = getByAbbr(abbr);

    if (item) {
      wx.setNavigationBarTitle({
        title: item.abbr
      });

      // 获取同分类的相关缩略语（排除当前项，最多显示6个）
      let related = getByCategory(item.category)
        .filter(i => i.abbr !== item.abbr)
        .slice(0, 6);

      this.setData({ item, related });
    }
  },

  openRelated(event) {
    const abbr = event.currentTarget.dataset.abbr;
    wx.redirectTo({
      url: `/packages/gcp/pages/detail/detail?abbr=${encodeURIComponent(abbr)}`
    });
  }
});
