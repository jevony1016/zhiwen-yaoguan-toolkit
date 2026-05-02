const { searchCtcae } = require("../../utils/search");

Page({
  data: {
    query: "",
    results: [],
    searched: false,
    examples: ["贫血", "Anemia", "血红蛋白 输血", "10002272"]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: "CTCAE v6.0 检索"
    });
  },

  onInput(event) {
    this.setData({
      query: event.detail.value
    });
  },

  onSearch() {
    const query = this.data.query.trim();
    const results = searchCtcae(query);

    this.setData({
      results,
      searched: true
    });
  },

  useExample(event) {
    const query = event.currentTarget.dataset.query;
    this.setData({ query }, () => {
      this.onSearch();
    });
  },

  openDetail(event) {
    const code = event.currentTarget.dataset.code;
    wx.navigateTo({
      url: `/packages/ctcae/pages/detail/detail?code=${encodeURIComponent(code)}`
    });
  }
});
