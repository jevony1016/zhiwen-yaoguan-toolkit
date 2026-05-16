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
    dimensions,
    sections: buildMbtiSections(type, dimensions),
    disclaimer: "本结果是基于人格偏好模型的自我观察工具，不等同于官方 MBTI 测评，也不构成心理诊断。"
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
    pole,
    percent,
    copy: mbti.dimensionCopy[key][pole]
  };
}

function buildMbtiSections(type, dimensions) {
  const poleSet = type.split("");
  const energy = poleSet[0] === "E" ? "你更适合在讨论、反馈和协作中校准方向。" : "你更适合先独立沉淀，再输出高质量判断。";
  const info = poleSet[1] === "S" ? "你处理信息时重视事实、细节和可验证材料。" : "你处理信息时重视模式、趋势和长期可能性。";
  const decision = poleSet[2] === "T" ? "你做判断时倾向于保持逻辑一致和标准清晰。" : "你做判断时倾向于照顾处境、关系和人的接受度。";
  const rhythm = poleSet[3] === "J" ? "你更喜欢明确计划和收敛路径，完成感会给你稳定感。" : "你更喜欢保留弹性和探索空间，变化会激发你的适应力。";
  const strongest = dimensions.slice().sort((a, b) => b.percent - a.percent)[0];

  return [
    { title: "核心画像", text: `${energy}${info}${decision}${rhythm}` },
    { title: "工作协作", text: poleSet[3] === "J" ? "你适合负责计划、交付、流程和质量边界。与更开放的人协作时，提前约定变更窗口会更顺。" : "你适合处理变化、探索方案和现场调整。与更计划型的人协作时，主动同步阶段性结论会更稳。" },
    { title: "沟通方式", text: poleSet[0] === "E" ? "你可以通过讨论快速推进共识，但重要结论最好落到文字，避免信息在热烈互动后散掉。" : "你表达前会先整理结构。关键场合可以提前准备三句话结论，让你的判断更容易被看见。" },
    { title: "压力反应", text: strongest.percent >= 75 ? `你的 ${strongest.pole} 倾向较明显，压力下可能更依赖这一侧的熟悉策略。适度使用相反偏好，可以帮你避免过度用力。` : "你的部分维度比较均衡，压力下可能会根据场景切换策略。优势是灵活，挑战是别让自己长期处在摇摆里。" },
    { title: "成长建议", text: "把人格类型当作观察语言，而不是身份标签。真正有用的是识别自己的默认反应，并在重要关系和复杂任务里多一个可选择的动作。" }
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
