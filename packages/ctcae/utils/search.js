const ctcaeData = require("../data/ctcae.js");

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value) {
  return normalizeText(value).replace(/\s+/g, "");
}

function collectSearchText(item) {
  const gradeText = item.grades
    .map((grade) => `${grade.zh} ${grade.en}`)
    .join(" ");

  return [
    item.code,
    item.socZh,
    item.socEn,
    item.termZh,
    item.termEn,
    item.definitionZh,
    item.definitionEn,
    item.navigationalNoteZh,
    item.navigationalNoteEn,
    item.changeZh,
    item.changeEn,
    gradeText
  ].join(" ");
}

function scoreItem(item, query) {
  const normalizedQuery = normalizeText(query);
  const compactQuery = compactText(query);
  const text = normalizeText(collectSearchText(item));
  const compact = compactText(collectSearchText(item));

  if (!normalizedQuery) {
    return 0;
  }

  let score = 0;

  if (normalizeText(item.code) === normalizedQuery) score += 100;
  if (normalizeText(item.termZh) === normalizedQuery) score += 90;
  if (normalizeText(item.termEn) === normalizedQuery) score += 90;
  if (compact.includes(compactQuery)) score += 40;

  const tokens = normalizedQuery
    .split(/[ ,，;；。.!！?？:：/\\()（）[\]{}<>《》"'“”‘’+-]+/)
    .filter((token) => token.length >= 2);

  tokens.forEach((token) => {
    if (text.includes(token)) score += 8;
  });

  return score;
}

function searchCtcae(query, limit = 50) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return [];
  }

  return ctcaeData
    .map((item) => ({
      ...item,
      score: scoreItem(item, normalizedQuery)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.termEn.localeCompare(b.termEn))
    .slice(0, limit);
}

function getCtcaeByCode(code) {
  return ctcaeData.find((item) => item.code === String(code));
}

module.exports = {
  searchCtcae,
  getCtcaeByCode
};
