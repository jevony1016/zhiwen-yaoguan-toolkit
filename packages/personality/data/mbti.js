const questions = [
  { id: "m01", dimension: "EI", leftPole: "E", rightPole: "I", left: "和别人交流后，我通常会感到更有能量。", right: "独处一段时间后，我通常会感到更有能量。" },
  { id: "m02", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更相信具体事实、经验和已经验证的信息。", right: "我更容易被可能性、趋势和隐藏模式吸引。" },
  { id: "m03", dimension: "TF", leftPole: "T", rightPole: "F", left: "做决定时，我会优先考虑逻辑、公平和一致性。", right: "做决定时，我会优先考虑感受、关系和人的处境。" },
  { id: "m04", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢提前计划，让生活保持可预期。", right: "我喜欢保留弹性，顺着变化调整安排。" },
  { id: "m05", dimension: "EI", leftPole: "E", rightPole: "I", left: "我常常通过说出来，才更清楚自己在想什么。", right: "我通常先在心里想清楚，再表达给别人。" },
  { id: "m06", dimension: "SN", leftPole: "S", rightPole: "N", left: "我喜欢清楚的步骤、细节和可执行方法。", right: "我喜欢先理解原则、框架和整体方向。" },
  { id: "m07", dimension: "TF", leftPole: "T", rightPole: "F", left: "即使不太好听，我也更重视直接指出问题。", right: "即使观点不同，我也会尽量照顾对方感受。" },
  { id: "m08", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢把任务尽早完成，之后再放松。", right: "我喜欢边做边调整，在最后阶段也能保持弹性。" },
  { id: "m09", dimension: "EI", leftPole: "E", rightPole: "I", left: "参加聚会或讨论后，我常常更兴奋。", right: "参加聚会或讨论后，我常常需要安静恢复。" },
  { id: "m10", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更容易注意现实中的细节和变化。", right: "我更容易注意事物背后的意义和关联。" },
  { id: "m11", dimension: "TF", leftPole: "T", rightPole: "F", left: "我倾向于用标准和原则评价一件事。", right: "我倾向于结合情境和个人影响评价一件事。" },
  { id: "m12", dimension: "JP", leftPole: "J", rightPole: "P", left: "日程、清单和截止时间会让我安心。", right: "选择、灵感和临场发挥会让我安心。" },
  { id: "m13", dimension: "EI", leftPole: "E", rightPole: "I", left: "我愿意主动认识新的人、打开话题。", right: "我更愿意先观察，再决定是否靠近一个人。" },
  { id: "m14", dimension: "SN", leftPole: "S", rightPole: "N", left: "我倾向于描述事情本身发生了什么。", right: "我倾向于解释这件事可能意味着什么。" },
  { id: "m15", dimension: "TF", leftPole: "T", rightPole: "F", left: "如果必须选择，我会让客观判断优先于个人情绪。", right: "如果必须选择，我会让人际影响优先于纯粹逻辑。" },
  { id: "m16", dimension: "JP", leftPole: "J", rightPole: "P", left: "计划被打乱时，我会明显感到不舒服。", right: "计划太早定死时，我会明显感到受限制。" },
  { id: "m17", dimension: "EI", leftPole: "E", rightPole: "I", left: "我在多人互动中更容易进入状态。", right: "我在一对一或独处中更像真正的自己。" },
  { id: "m18", dimension: "SN", leftPole: "S", rightPole: "N", left: "我喜欢先处理眼前明确的问题。", right: "我喜欢先思考这个问题背后的可能性。" },
  { id: "m19", dimension: "TF", leftPole: "T", rightPole: "F", left: "我欣赏清晰、准确、少修饰的反馈。", right: "我欣赏温和、体面、顾及处境的反馈。" },
  { id: "m20", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢尽快做决定，减少悬而未决。", right: "我喜欢多保留选项，直到信息更充分。" },
  { id: "m21", dimension: "EI", leftPole: "E", rightPole: "I", left: "我更容易在外部反馈中获得灵感。", right: "我更容易在安静思考中获得灵感。" },
  { id: "m22", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更关注实际、可见、可检验的内容。", right: "我更关注抽象、未来、尚未成形的内容。" },
  { id: "m23", dimension: "TF", leftPole: "T", rightPole: "F", left: "冲突出现时，我会先分析问题本身。", right: "冲突出现时，我会先稳定人的情绪和关系。" },
  { id: "m24", dimension: "JP", leftPole: "J", rightPole: "P", left: "我喜欢有条理的环境和稳定的节奏。", right: "我喜欢开放的环境和可变化的节奏。" },
  { id: "m25", dimension: "EI", leftPole: "E", rightPole: "I", left: "想法还不成熟时，我也可以先和别人讨论。", right: "想法还不成熟时，我更愿意先自己消化。" },
  { id: "m26", dimension: "SN", leftPole: "S", rightPole: "N", left: "我更容易记住具体内容、数字和原话。", right: "我更容易记住整体印象、方向和象征意义。" },
  { id: "m27", dimension: "TF", leftPole: "T", rightPole: "F", left: "我容易被不严谨的逻辑困扰。", right: "我容易被冷硬的表达方式困扰。" },
  { id: "m28", dimension: "JP", leftPole: "J", rightPole: "P", left: "我倾向于把生活安排得清楚有序。", right: "我倾向于让生活保留自然流动感。" },
  { id: "m29", dimension: "EI", leftPole: "E", rightPole: "I", left: "别人常觉得我比较外放、容易接近。", right: "别人常觉得我比较安静、需要时间了解。" },
  { id: "m30", dimension: "SN", leftPole: "S", rightPole: "N", left: "比起新奇想法，我更看重现实可行性。", right: "比起现实限制，我更看重新奇想法的潜力。" },
  { id: "m31", dimension: "TF", leftPole: "T", rightPole: "F", left: "我希望评价尽量减少个人偏好影响。", right: "我希望评价能看见每个人的努力和处境。" },
  { id: "m32", dimension: "JP", leftPole: "J", rightPole: "P", left: "完成一件事会让我很踏实。", right: "发现新的可能性会让我很兴奋。" }
];

const typeProfiles = {
  ISTJ: { name: "审慎执行者", summary: "你可靠、务实、重视责任，擅长把复杂事务整理成可执行的秩序。", keywords: ["可靠", "务实", "有责任感"], strengths: "稳定、守信、细致，能够长期维护标准和承诺。", blindspots: "可能过度依赖既有经验，对模糊变化和情绪信号反应较慢。", growth: "给新想法一个试运行空间，也练习把关心表达出来。" },
  ISFJ: { name: "温和守护者", summary: "你细腻、体贴、重视稳定，常在安静处承担很多支持性的工作。", keywords: ["体贴", "耐心", "守护"], strengths: "善于照顾细节和人的需要，能让关系与环境变得可靠。", blindspots: "容易过度承担，或因为不想打扰别人而压下真实需求。", growth: "把边界说清楚，把自己的需要也放进关系里。" },
  INFJ: { name: "洞察理想者", summary: "你关注意义、关系和长期影响，常能看见表面之下的情绪与动机。", keywords: ["洞察", "理想", "深度"], strengths: "有愿景、有共情，也能把抽象价值转成具体行动。", blindspots: "容易对自己和世界要求过高，或把未说出口的期待放得太重。", growth: "把洞察落成小步骤，并允许事情以不完美的方式推进。" },
  INTJ: { name: "战略构建者", summary: "你独立、理性、重视系统，擅长为复杂目标设计长期路径。", keywords: ["战略", "系统", "独立"], strengths: "能看见结构问题，善于规划、优化和建立高效模型。", blindspots: "可能低估沟通成本，或显得过于冷静和难以靠近。", growth: "在输出结论前补充意图和温度，会让你的方案更容易被接住。" },
  ISTP: { name: "冷静解题者", summary: "你现实、灵活、反应快，喜欢在真实情境中找到最有效的解决办法。", keywords: ["冷静", "实操", "灵活"], strengths: "临场处理强，能快速识别关键变量并动手解决。", blindspots: "可能不喜欢解释过程，让别人跟不上你的判断。", growth: "把你的思考路径多说一点，协作会更轻松。" },
  ISFP: { name: "真实体验者", summary: "你温和、敏感、重视真实感受，倾向于用行动表达自己的价值。", keywords: ["真诚", "敏感", "自由"], strengths: "审美和体验敏锐，尊重个体差异，能带来柔和但坚定的影响。", blindspots: "可能回避冲突，或在压力下突然抽离。", growth: "提前表达不舒服的地方，不必等到自己耗尽。" },
  INFP: { name: "价值探索者", summary: "你重视内在价值和自我一致性，常用温和方式坚持很深的原则。", keywords: ["理想", "共情", "自洽"], strengths: "共情强、想象力丰富，能在复杂处境中看见人的可能性。", blindspots: "可能过度理想化，或因现实不够纯粹而迟迟不行动。", growth: "让价值观变成可执行的小选择，理想会更有力量。" },
  INTP: { name: "概念分析者", summary: "你理性、好奇、喜欢追问前提，擅长发现概念和逻辑中的隐藏结构。", keywords: ["分析", "好奇", "抽象"], strengths: "独立思考强，能拆解复杂问题并提出新解释。", blindspots: "可能沉迷分析而延迟行动，或忽略他人的情绪节奏。", growth: "为思考设置输出节点，也练习用简单语言解释复杂想法。" },
  ESTP: { name: "现场行动者", summary: "你直接、敏捷、适应力强，常能在变化中迅速抓住机会。", keywords: ["敏捷", "现实", "行动"], strengths: "临场感强，敢尝试，能把停滞局面快速带动起来。", blindspots: "可能低估长期后果，或对细节收尾缺少耐心。", growth: "行动前多看一步后果，行动后补上复盘。" },
  ESFP: { name: "氛围带动者", summary: "你鲜活、亲和、关注当下体验，擅长让人放松并进入真实互动。", keywords: ["鲜活", "亲和", "即兴"], strengths: "有感染力，能捕捉现场情绪并带来积极能量。", blindspots: "可能回避沉重议题，或容易被即时反馈牵动。", growth: "把热情和长期计划连接起来，影响力会更稳定。" },
  ENFP: { name: "可能性发起者", summary: "你热情、开放、善于连接人和想法，常能从普通事物中看见新机会。", keywords: ["热情", "创造", "连接"], strengths: "有创造力和感染力，能激发别人尝试新的方向。", blindspots: "可能启动很多，收束较难，或被过多可能性分散。", growth: "选择少数真正重要的方向，把灵感推进到结果。" },
  ENTP: { name: "辩证创新者", summary: "你机敏、好奇、喜欢挑战默认答案，擅长用重构打开新方案。", keywords: ["机敏", "创新", "辩证"], strengths: "反应快，能从不同角度拆问题并激发新思路。", blindspots: "可能为了探索而争辩，或低估他人对稳定感的需要。", growth: "把挑战变成共同探索，而不是让人感觉被否定。" },
  ESTJ: { name: "秩序推进者", summary: "你高效、直接、重视结果，擅长把目标拆成清楚的规则和行动。", keywords: ["高效", "直接", "负责"], strengths: "执行力强，责任边界清楚，能让事情稳定向前。", blindspots: "可能显得强势，或对非线性探索不够耐心。", growth: "在推动之前先听见不同处境，秩序会更有人味。" },
  ESFJ: { name: "协作组织者", summary: "你周到、负责、重视关系，擅长把人组织到稳定的共同节奏里。", keywords: ["协作", "周到", "组织"], strengths: "能照顾氛围和细节，促进团队配合与彼此支持。", blindspots: "可能过度在意认可，或把和谐看得比真实问题更重。", growth: "允许必要的冲突出现，它不一定会破坏关系。" },
  ENFJ: { name: "共识推动者", summary: "你有感染力、重视成长，善于理解人的需要并推动共同方向。", keywords: ["鼓舞", "共识", "领导"], strengths: "能激励他人，整合关系和目标，带来方向感。", blindspots: "可能过度承担别人的成长，或忽略自己的疲惫。", growth: "把支持和边界放在一起，你的影响力会更长久。" },
  ENTJ: { name: "目标统筹者", summary: "你果断、全局感强、重视效率，适合处理高复杂度目标和资源统筹。", keywords: ["统筹", "果断", "全局"], strengths: "能快速识别关键路径，推动资源向目标集中。", blindspots: "可能过快进入解决模式，忽略他人的感受和接受节奏。", growth: "让别人参与定义目标，会让执行更有共识。" }
};

const dimensionCopy = {
  EI: {
    label: "能量来源",
    E: "外倾偏好：你更容易从互动、表达和外部反馈中获得能量。",
    I: "内倾偏好：你更容易从独处、沉淀和内部梳理中恢复能量。"
  },
  SN: {
    label: "信息获取",
    S: "实感偏好：你更依赖事实、细节、经验和已经验证的信息。",
    N: "直觉偏好：你更关注趋势、可能性、抽象关系和未来图景。"
  },
  TF: {
    label: "判断方式",
    T: "思考偏好：你做决定时更看重逻辑、原则和客观一致性。",
    F: "情感偏好：你做决定时更看重人的处境、感受和关系影响。"
  },
  JP: {
    label: "生活方式",
    J: "判断偏好：你更偏好计划、收敛、完成感和可预期秩序。",
    P: "知觉偏好：你更偏好弹性、探索、开放选项和情境适应。"
  }
};

const officialLinks = [
  { label: "MBTIonline 官方测评", url: "https://www.mbtionline.com/en-US" },
  { label: "The Myers-Briggs Company", url: "https://www.themyersbriggs.com/" }
];

module.exports = {
  questions,
  typeProfiles,
  dimensionCopy,
  officialLinks
};
