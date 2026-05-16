const mbti = require("../data/mbti");
const sbti = require("../data/sbti");

const optionValues = [-2, -1, 0, 1, 2];

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function normalizeAnswers(answers, questions) {
  return questions.map((question, index) => {
    const raw = Number(answers[index]);
    return optionValues.includes(raw) ? raw : 0;
  });
}

function scoreMbti(answers) {
  const normalized = normalizeAnswers(answers, mbti.questions);
  const poles = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  mbti.questions.forEach((question, index) => {
    const value = normalized[index];
    const weight = Math.abs(value);

    if (value < 0) {
      poles[question.leftPole] += weight;
    } else if (value > 0) {
      poles[question.rightPole] += weight;
    } else {
      poles[question.leftPole] += 0.5;
      poles[question.rightPole] += 0.5;
    }
  });

  const dimensions = [
    buildMbtiDimension("EI", "E", "I", poles),
    buildMbtiDimension("SN", "S", "N", poles),
    buildMbtiDimension("TF", "T", "F", poles),
    buildMbtiDimension("JP", "J", "P", poles)
  ];
  const type = dimensions.map((item) => item.pole).join("");
  const profile = mbti.typeProfiles[type];

  return {
    kind: "mbti",
    title: "16 型人格偏好",
    type,
    name: profile.name,
    summary: profile.summary,
    keywords: profile.keywords,
    officialLinks: mbti.officialLinks,
    dimensions,
    sections: buildMbtiSections(type, dimensions),
    disclaimer: "本测试为 16 型人格偏好自测，题目和报告为原创整理，不等同于官方 MBTI 测评，也不构成心理诊断。MBTI 及 Myers-Briggs Type Indicator 是相关权利方的商标；如需正式评估，请访问官方渠道。"
  };
}

function buildMbtiDimension(key, left, right, poles) {
  const leftScore = poles[left];
  const rightScore = poles[right];
  const total = leftScore + rightScore || 1;
  const pole = leftScore >= rightScore ? left : right;
  const percent = clampPercent((Math.max(leftScore, rightScore) / total) * 100);

  return {
    key,
    left,
    right,
    label: mbti.dimensionCopy[key].label,
    pole,
    percent,
    copy: mbti.dimensionCopy[key][pole]
  };
}

function buildMbtiSections(type, dimensions) {
  const poleSet = type.split("");
  const profile = mbti.typeProfiles[type];
  const energy = poleSet[0] === "E" ? "你的心理能量多半来自互动、表达和外部反馈。你倾向于在交流中整理想法，也更容易被现场氛围带动。" : "你的心理能量多半来自独处、沉淀和内部梳理。你倾向于先在心里形成结构，再选择合适时机表达。";
  const info = poleSet[1] === "S" ? "你处理信息时重视事实、细节、经验和可验证材料。你通常会先确认现实条件，再判断下一步。" : "你处理信息时重视模式、趋势、象征意义和未来可能。你通常会先理解整体方向，再回头补充细节。";
  const decision = poleSet[2] === "T" ? "你做判断时倾向于保持逻辑一致、原则清晰和标准公平。你希望结论经得起推敲，而不是只让人舒服。" : "你做判断时倾向于照顾人的处境、感受和关系影响。你希望结论能被人理解，也能保留关系里的温度。";
  const rhythm = poleSet[3] === "J" ? "你更喜欢计划、收敛、完成感和可预期秩序。明确的目标与边界会让你更稳定。" : "你更喜欢弹性、探索、开放选项和情境适应。保留变化空间会让你更自然。";
  const strongest = dimensions.slice().sort((a, b) => b.percent - a.percent)[0];
  const balanced = dimensions.filter((item) => item.percent <= 60);
  const strongestCopy = strongest.percent >= 75 ? `你最明显的偏好是 ${strongest.label} 中的 ${strongest.pole}，这往往是你压力下最先调用的默认策略。` : "你的偏好强度整体不算极端，说明你可能会根据场景切换不同策略。";

  return [
    { title: "类型概览", text: `${profile.summary}${energy}${info}${decision}${rhythm}` },
    { title: "核心优势", text: profile.strengths },
    { title: "潜在盲区", text: profile.blindspots },
    { title: "沟通风格", text: poleSet[0] === "E" ? "你倾向于通过说出来推动理解，适合开放讨论和即时反馈。需要注意的是，别人可能还没有跟上你的表达速度，重要结论最好沉淀成清楚文字。" : "你倾向于先观察和整理，再给出相对完整的表达。需要注意的是，如果你沉默太久，别人可能误以为你没有想法。" },
    { title: "学习与工作方式", text: poleSet[3] === "J" ? "你适合有目标、有节奏、有交付定义的任务。明确边界能提升效率；面对探索型任务时，可以先设置一个小范围试验，而不是一次性追求完全确定。" : "你适合需要探索、应变和整合多种可能的任务。自由度能激发创造力；面对长期任务时，可以设置轻量节点，避免灵感被截止时间追着跑。" },
    { title: "压力反应", text: `${strongestCopy}${balanced.length ? ` 你较均衡的维度是：${balanced.map((item) => item.label).join("、")}，这些地方可能既是弹性来源，也是容易摇摆的地方。` : ""}` },
    { title: "成长建议", text: profile.growth },
    { title: "如何使用这个结果", text: "人格类型不是能力上限，也不是固定标签。更好的用法是：识别自己的默认偏好，理解别人为什么和你不同，并在关键情境里多一个可选择的反应。" }
  ];
}

function scoreSbti(answers) {
  const normalized = normalizeAnswers(answers, sbti.questions);
  const scores = { evidence: 0, compliance: 0, detail: 0, drive: 0, social: 0, pressure: 0 };

  sbti.questions.forEach((question, index) => {
    scores[question.dimension] += -normalized[index];
  });

  const dimensions = Object.keys(scores).map((key) => ({
    key,
    label: sbtiDimensionLabel(key),
    percent: clampPercent(((scores[key] + 10) / 20) * 100),
    score: scores[key]
  }));

  const ranked = sbti.archetypes
    .map((item) => ({
      ...item,
      match: Object.keys(item.weights).reduce((sum, key) => sum + item.weights[key] * scores[key], 0)
    }))
    .sort((a, b) => b.match - a.match);

  const top = ranked[0];

  return {
    kind: "sbti",
    title: "医药人 SBTI",
    type: top.code,
    name: top.name,
    summary: top.tagline,
    keywords: top.keywords,
    dimensions,
    sections: [
      { title: "你的状态码", text: top.tagline },
      { title: "项目组里的你", text: buildSbtiWorkCopy(top.code) },
      { title: "高光时刻", text: buildSbtiHighlight(top.code) },
      { title: "温柔提醒", text: top.advice },
      { title: "传播文案", text: `把这个结果发给项目组，看看谁才是真正的「${top.name}」。` }
    ],
    disclaimer: "医药人 SBTI 是面向临床研究和医药行业场景的轻量状态测试，仅供娱乐、社交破冰和自我观察。"
  };
}

function sbtiDimensionLabel(key) {
  return {
    evidence: "证据意识",
    compliance: "合规敏感",
    detail: "细节雷达",
    drive: "推进能量",
    social: "沟通负荷",
    pressure: "抗压模式"
  }[key];
}

function buildSbtiWorkCopy(code) {
  const copy = {
    SOP: "你像项目里的边界提示器，能把隐形风险提前说清楚。",
    QRY: "你擅长把混乱问题拆成可修复的 query 和行动项。",
    CRA: "你能同时读懂现场、文件和人的状态，是风险识别的前线触角。",
    CRC: "你是现场多线程处理中枢，能在复杂需求里维持基本秩序。",
    PM: "你负责把模糊目标往前推，尤其擅长定义下一步和责任人。",
    MW: "你把证据、逻辑和表达揉成可读材料，适合处理高要求文本。",
    PV: "你对安全信息高度敏感，能在紧急场景里守住底线。",
    EDC: "你能从数据缝隙里发现问题，让系统重新变得可信。",
    IRB: "你擅长把材料、版本和节点收拢到可提交状态。",
    AUD: "你总能提前想到会被问什么，适合做质量和稽查前置准备。",
    DLV: "你看似随缘，实际很懂节点和交付，关键时刻常能补位。",
    MUTE: "你不一定抢话，但你能沉淀出别人遗漏的重要信息。"
  };
  return copy[code] || "你在项目组里有一套独特的稳定贡献方式。";
}

function buildSbtiHighlight(code) {
  const copy = {
    SOP: "文件链条清楚、责任边界明确、项目少走弯路的时候。",
    QRY: "一堆问题被你整理成优先级、根因和解决路径的时候。",
    CRA: "现场风险被你提前识别，沟通后顺利闭环的时候。",
    CRC: "所有人都在找信息，而你已经把事情安排出去的时候。",
    PM: "没人知道下一步时，你把方向、节点和负责人定下来的时候。",
    MW: "材料从能看变成清楚、准确、有说服力的时候。",
    PV: "安全信息需要快速判断、记录、升级的时候。",
    EDC: "数据异常被定位，逻辑重新闭合的时候。",
    IRB: "材料终于齐、章终于盖、版本终于对上的时候。",
    AUD: "别人以为没问题，你已经准备好证据链的时候。",
    DLV: "大家都觉得来不及，而你把最关键部分交出来的时候。",
    MUTE: "会议结束后，你用一段纪要把真正的问题讲清楚的时候。"
  };
  return copy[code] || "你用自己的方式让项目更可控的时候。";
}

function encodeAnswers(answers) {
  return answers.map((value) => String(Number(value) + 2)).join("");
}

function decodeAnswers(text) {
  return String(text || "").split("").map((value) => Number(value) - 2);
}

module.exports = {
  scoreMbti,
  scoreSbti,
  encodeAnswers,
  decodeAnswers
};
