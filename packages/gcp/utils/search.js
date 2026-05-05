const glossaryData = require("../data/glossary");

/**
 * 计算搜索匹配权重（权重越高越相关）
 */
function getMatchScore(item, q, qOriginal) {
  const abbr = item.abbr || "";
  const abbrLower = abbr.toLowerCase();
  const fullEn = (item.fullEn || "").toLowerCase();
  const fullZh = (item.fullZh || "").toLowerCase();
  const defEn = (item.definitionEn || "").toLowerCase();
  const defZh = (item.definitionZh || "").toLowerCase();

  let score = 0;

  // 缩略语精确匹配（区分大小写，最高优先级）
  if (abbr === qOriginal) {
    score = 100;
  }
  // 缩略语精确匹配（不区分大小写）
  else if (abbrLower === q) {
    score = 95;
  }
  // 缩略语以搜索词开头（区分大小写）
  else if (abbr.startsWith(qOriginal)) {
    score = 92;
  }
  // 缩略语以搜索词开头（不区分大小写）
  else if (abbrLower.startsWith(q)) {
    score = 90;
  }
  // 缩略语包含搜索词（区分大小写）
  else if (abbr.includes(qOriginal)) {
    score = 85;
  }
  // 缩略语包含搜索词（不区分大小写）
  else if (abbrLower.includes(q)) {
    score = 80;
  }
  // 中文全称精确匹配
  else if (fullZh === q) {
    score = 70;
  }
  // 中文全称以搜索词开头
  else if (fullZh.startsWith(q)) {
    score = 60;
  }
  // 中文全称包含搜索词
  else if (fullZh.includes(q)) {
    score = 50;
  }
  // 英文全称精确匹配
  else if (fullEn === q) {
    score = 45;
  }
  // 英文全称以搜索词开头
  else if (fullEn.startsWith(q)) {
    score = 40;
  }
  // 英文全称包含搜索词
  else if (fullEn.includes(q)) {
    score = 30;
  }
  // 定义包含搜索词
  else if (defZh.includes(q) || defEn.includes(q)) {
    score = 10;
  }

  return score;
}

/**
 * 搜索缩略语
 * 支持按缩略语、中文全称、英文全称、定义搜索
 * 结果按相关度排序：精确匹配 > 前缀匹配 > 包含匹配
 * 缩略语匹配区分大小写
 */
function searchGlossary(query) {
  if (!query || !query.trim()) {
    return [];
  }

  const qOriginal = query.trim();
  const q = qOriginal.toLowerCase();

  // 过滤并计算权重
  const results = glossaryData
    .map(item => ({
      item,
      score: getMatchScore(item, q, qOriginal)
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item);

  return results;
}

/**
 * 按分类获取缩略语
 */
function getByCategory(category) {
  if (!category) {
    return glossaryData;
  }
  return glossaryData.filter(item => item.category === category);
}

/**
 * 获取所有分类
 */
function getCategories() {
  const categories = {};
  glossaryData.forEach(item => {
    if (item.category) {
      categories[item.category] = (categories[item.category] || 0) + 1;
    }
  });
  return Object.entries(categories).map(([name, count]) => ({ name, count }));
}

/**
 * 根据缩略语获取详情（精确匹配，区分大小写）
 */
function getByAbbr(abbr) {
  if (!abbr) return null;
  // 先尝试精确匹配
  const exactMatch = glossaryData.find(item => item.abbr === abbr);
  if (exactMatch) return exactMatch;

  // 如果精确匹配没找到，再尝试不区分大小写匹配
  return glossaryData.find(item =>
    item.abbr && item.abbr.toLowerCase() === abbr.toLowerCase()
  );
}

module.exports = {
  searchGlossary,
  getByCategory,
  getCategories,
  getByAbbr
};
