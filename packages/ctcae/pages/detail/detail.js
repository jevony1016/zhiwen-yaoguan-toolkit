const { getCtcaeByCode } = require("../../utils/search");

Page({
  data: {
    item: null
  },

  onLoad(options) {
    const item = getCtcaeByCode(decodeURIComponent(options.code || ""));

    if (item) {
      wx.setNavigationBarTitle({
        title: item.termZh || item.termEn
      });
    }

    this.setData({ item });
  }
});
