const { searchGlossary, getCategories, getByCategory } = require("../../utils/search");

Page({
  data: {
    query: "",
    results: [],
    searched: false,
    activeCategory: "",
    categories: [],
    totalCount: 0,
    examples: ["AE", "PI", "CR", "ALT", "GCP", "SAE"]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: "缩略语词典"
    });
    
    // 获取分类统计
    const categories = getCategories();
    const totalCount = categories.reduce((sum, cat) => sum + cat.count, 0);
    
    this.setData({
      categories,
      totalCount,
      results: getByCategory() // 默认显示全部
    });
  },

  onInput(event) {
    this.setData({
      query: event.detail.value
    });
  },

  onSearch() {
    const query = this.data.query.trim();
    const activeCategory = this.data.activeCategory;
    
    let results;
    if (query) {
      // 有关键词时，在当前分类下搜索
      results = searchGlossary(query);
      if (activeCategory) {
        results = results.filter(item => item.category === activeCategory);
      }
    } else {
      // 无关键词时，显示当前分类下的全部
      results = getByCategory(activeCategory);
    }

    this.setData({
      results,
      searched: !!query
    });
  },

  selectCategory(event) {
    const category = event.currentTarget.dataset.category;
    const query = this.data.query.trim();
    
    this.setData({
      activeCategory: category,
      searched: false
    });
    
    // 重新搜索或显示分类下全部
    if (query) {
      this.onSearch();
    } else {
      this.setData({
        results: getByCategory(category)
      });
    }
  },

  useExample(event) {
    const query = event.currentTarget.dataset.query;
    this.setData({ 
      query,
      activeCategory: "" // 清除分类筛选
    }, () => {
      this.onSearch();
    });
  },

  openDetail(event) {
    const abbr = event.currentTarget.dataset.abbr;
    wx.navigateTo({
      url: `/packages/gcp/pages/detail/detail?abbr=${encodeURIComponent(abbr)}`
    });
  }
});
