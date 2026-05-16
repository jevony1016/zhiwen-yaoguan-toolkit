const questions = [
  { id: "m01", dimension: "EI", leftPole: "E", rightPole: "I", left: "和项目组讨论后，我通常更有能量。", right: "独自整理思路后，我通常更有能量。" },
  { id: "m02", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更信任具体事实、数据和已发生的证据。", right: "我更容易先看到趋势、可能性和潜在模式。" },
  { id: "m03", dimension: "TF", leftPole: "T", rightPole: "F", left: "做判断时，我会优先看逻辑、标准和一致性。", right: "做判断时，我会优先看人的感受、关系和影响。" },
  { id: "m04", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢提前规划，把事情拆成清晰节点。", right: "我喜欢保留弹性，边推进边根据情况调整。" },
  { id: "m05", dimension: "EI", leftPole: "E", rightPole: "I", left: "面对新任务，我倾向于边说边把想法讲清楚。", right: "面对新任务，我倾向于先想明白再表达。" },
  { id: "m06", dimension: "SN", leftPole: "S", rightPole: "N", left: "我会先问：现在已有材料是什么。", right: "我会先问：这件事背后的方向是什么。" },
  { id: "m07", dimension: "TF", leftPole: "T", rightPole: "F", left: "即使气氛尴尬，我也会指出规则或逻辑漏洞。", right: "即使自己有不同意见，我也会留意表达方式是否让人舒服。" },
  { id: "m08", dimension: "JP", leftPole: "J", rightPole: "P", left: "临近截止日期前，我希望大部分内容已经定稿。", right: "临近截止日期前，我仍能接受继续优化和变更。" },
  { id: "m09", dimension: "EI", leftPole: "E", rightPole: "I", left: "我更容易在互动中获得灵感。", right: "我更容易在安静环境中获得灵感。" },
  { id: "m10", dimension: "SN", leftPole: "S", rightPole: "N", left: "我喜欢说明具体步骤、条件和例外情况。", right: "我喜欢说明核心原则、框架和未来空间。" },
  { id: "m11", dimension: "TF", leftPole: "T", rightPole: "F", left: "我更在意方案是否客观、可验证。", right: "我更在意方案是否被理解、被接受。" },
  { id: "m12", dimension: "JP", leftPole: "J", rightPole: "P", left: "待办事项清零会让我很安心。", right: "可选方案充足会让我很安心。" },
  { id: "m13", dimension: "EI", leftPole: "E", rightPole: "I", left: "我愿意主动发起讨论，把人拉到同一频道。", right: "我更愿意用文字或沉淀材料表达完整观点。" },
  { id: "m14", dimension: "SN", leftPole: "S", rightPole: "N", left: "我擅长发现材料里的遗漏、矛盾和格式问题。", right: "我擅长发现不同信息之间的隐含联系。" },
  { id: "m15", dimension: "TF", leftPole: "T", rightPole: "F", left: "如果必须选择，我会让原则优先于照顾情绪。", right: "如果必须选择，我会让关系和长期信任优先。" },
  { id: "m16", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢明确分工、负责人和时间线。", right: "我喜欢开放探索，不太早锁死路径。" },
  { id: "m17", dimension: "EI", leftPole: "E", rightPole: "I", left: "参加多人会议后，我一般还能继续输出。", right: "参加多人会议后，我通常需要独处恢复。" },
  { id: "m18", dimension: "SN", leftPole: "S", rightPole: "N", left: "我会先把眼前问题处理扎实。", right: "我会先判断这个问题是否代表更大的系统问题。" },
  { id: "m19", dimension: "TF", leftPole: "T", rightPole: "F", left: "我欣赏直接、准确、少修饰的反馈。", right: "我欣赏体面、顾及处境的反馈。" },
  { id: "m20", dimension: "JP", leftPole: "J", rightPole: "P", left: "计划变来变去会明显消耗我。", right: "固定计划太早定死会明显消耗我。" },
  { id: "m21", dimension: "EI", leftPole: "E", rightPole: "I", left: "我在群体里更容易进入状态。", right: "我在一对一或独处时更像自己。" },
  { id: "m22", dimension: "SN", leftPole: "S", rightPole: "N", left: "比起抽象概念，我更喜欢可执行清单。", right: "比起执行清单，我更喜欢先理解概念模型。" },
  { id: "m23", dimension: "TF", leftPole: "T", rightPole: "F", left: "争议出现时，我会先拆问题本身。", right: "争议出现时，我会先稳住人的状态。" },
  { id: "m24", dimension: "JP", leftPole: "J", rightPole: "P", left: "我倾向于先完成，再放松。", right: "我倾向于工作和放松穿插进行。" },
  { id: "m25", dimension: "EI", leftPole: "E", rightPole: "I", left: "我不介意在想法还不成熟时先抛出来。", right: "我更希望表达时观点已经比较完整。" },
  { id: "m26", dimension: "SN", leftPole: "S", rightPole: "N", left: "我会注意描述是否准确贴合原始信息。", right: "我会注意描述是否打开了新的理解角度。" },
  { id: "m27", dimension: "TF", leftPole: "T", rightPole: "F", left: "我容易被不严谨的推理说服力不足所困扰。", right: "我容易被冷硬的沟通方式所困扰。" },
  { id: "m28", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢把不确定性尽早收敛。", right: "我喜欢让不确定性多保留一段时间。" },
  { id: "m29", dimension: "EI", leftPole: "E", rightPole: "I", left: "认识新同事时，我通常能较快打开话题。", right: "认识新同事时，我通常需要一点观察时间。" },
  { id: "m30", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更容易记住细节、数字和具体表达。", right: "我更容易记住氛围、意图和整体图景。" },
  { id: "m31", dimension: "TF", leftPole: "T", rightPole: "F", left: "我希望评价标准清楚，少受个人偏好影响。", right: "我希望评价过程有温度，能看见人的努力。" },
  { id: "m32", dimension: "JP", leftPole: "J", rightPole: "P", left: "我的桌面、文件或任务常有一套固定秩序。", right: "我的工作方式更像按需要随时重组资源。" }
];

const typeProfiles = {
  ISTJ: { name: "审慎执行者", summary: "你重视事实、秩序和责任，擅长把复杂任务落到可靠流程里。", keywords: ["可靠", "细致", "重承诺"] },
  ISFJ: { name: "稳定支持者", summary: "你细腻、负责，擅长在具体事务里照顾人和维持系统稳定。", keywords: ["体贴", "耐心", "守护"] },
  INFJ: { name: "洞察引导者", summary: "你关注意义、关系和长期影响，常能看见别人尚未说出口的线索。", keywords: ["洞察", "理想", "深度"] },
  INTJ: { name: "系统设计者", summary: "你擅长建立长期框架，喜欢用结构化思考解决复杂问题。", keywords: ["战略", "独立", "系统"] },
  ISTP: { name: "冷静解题者", summary: "你务实、灵活，倾向于在真实问题里快速定位关键变量。", keywords: ["冷静", "实操", "灵活"] },
  ISFP: { name: "温和体验者", summary: "你重视真实感受和当下体验，表达克制但有稳定的个人判断。", keywords: ["真诚", "敏感", "自由"] },
  INFP: { name: "价值探索者", summary: "你重视内在价值和一致性，常用温和方式坚持很深的原则。", keywords: ["理想", "共情", "自洽"] },
  INTP: { name: "概念分析者", summary: "你喜欢拆解概念、追问前提，擅长发现逻辑中的隐藏结构。", keywords: ["分析", "好奇", "抽象"] },
  ESTP: { name: "现场行动者", summary: "你反应快、会抓机会，适合在动态环境中迅速试错和推进。", keywords: ["敏捷", "现实", "行动"] },
  ESFP: { name: "氛围带动者", summary: "你对人和现场变化敏感，擅长把沉闷局面变得可进入。", keywords: ["鲜活", "亲和", "即兴"] },
  ENFP: { name: "可能性发起者", summary: "你热衷连接想法与人，常能把普通议题打开成新的机会。", keywords: ["热情", "创造", "连接"] },
  ENTP: { name: "辩证创新者", summary: "你喜欢挑战默认答案，擅长用反问和重构推动新方案出现。", keywords: ["机敏", "创新", "辩证"] },
  ESTJ: { name: "秩序推进者", summary: "你重视效率、责任和结果，擅长把目标拆成明确动作。", keywords: ["高效", "直接", "负责"] },
  ESFJ: { name: "协作组织者", summary: "你擅长协调关系和资源，让团队在有秩序的氛围里前进。", keywords: ["协作", "周到", "组织"] },
  ENFJ: { name: "共识推动者", summary: "你善于理解人和目标之间的关系，能把团队带向共同方向。", keywords: ["鼓舞", "共识", "领导"] },
  ENTJ: { name: "目标统筹者", summary: "你习惯看全局、定目标、调资源，适合处理高复杂度推进任务。", keywords: ["统筹", "果断", "全局"] }
};

const dimensionCopy = {
  EI: {
    E: "你更容易从互动、讨论和外部反馈中获得能量。",
    I: "你更容易从独处、沉淀和内部梳理中恢复能量。"
  },
  SN: {
    S: "你更依赖事实、细节、经验和已经验证的信息。",
    N: "你更关注趋势、可能性、抽象关系和未来图景。"
  },
  TF: {
    T: "你做决定时更看重逻辑、原则和客观一致性。",
    F: "你做决定时更看重人的处境、感受和关系影响。"
  },
  JP: {
    J: "你更偏好计划、收敛、完成感和可预期秩序。",
    P: "你更偏好弹性、探索、开放选项和情境适应。"
  }
};

module.exports = {
  questions,
  typeProfiles,
  dimensionCopy
};
