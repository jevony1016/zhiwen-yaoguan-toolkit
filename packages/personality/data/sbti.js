const questions = [
  { id: "s01", dimension: "evidence", left: "没有 source 的说法，我会自动打一个问号。", right: "经验判断也很重要，不一定每句话都要找出处。" },
  { id: "s02", dimension: "compliance", left: "看到版本号、签名页、日期不一致，我会立刻警觉。", right: "只要核心内容没错，小问题可以后面再补。" },
  { id: "s03", dimension: "detail", left: "我能在一堆附件里发现少了一个页码。", right: "我更关心整体方向，不太想陷在格式里。" },
  { id: "s04", dimension: "drive", left: "项目卡住时，我会主动把人拉到一起定下一步。", right: "我更愿意等信息充分后再推进，避免返工。" },
  { id: "s05", dimension: "social", left: "我能在群聊、会议和私信之间来回切换。", right: "我更喜欢少一点噪音，把关键内容写清楚。" },
  { id: "s06", dimension: "pressure", left: "越到 deadline，我越能进入冷静处理模式。", right: "越到 deadline，我脑内弹窗越多但也能硬交付。" },
  { id: "s07", dimension: "evidence", left: "我习惯把结论写成：依据、判断、建议。", right: "我习惯先给方向，再按需要补依据。" },
  { id: "s08", dimension: "compliance", left: "流程不是形式，是保护项目和人的边界。", right: "流程要服务业务，不能让事情完全走不动。" },
  { id: "s09", dimension: "detail", left: "表格、缩写、单位、大小写不统一会让我难受。", right: "只要大家理解一致，表达不用追求完美。" },
  { id: "s10", dimension: "drive", left: "没人负责时，我很难忍住不接手。", right: "职责没说清楚前，我不会轻易把锅背上。" },
  { id: "s11", dimension: "social", left: "我愿意主动解释、提醒、同步，减少误会。", right: "我希望大家先看文档，别什么都开会。" },
  { id: "s12", dimension: "pressure", left: "突发问题来了，我会先拆优先级。", right: "突发问题来了，我会先确认谁能帮忙。" },
  { id: "s13", dimension: "evidence", left: "我喜欢把信息追到原始文件或法规条款。", right: "我更相信高质量二手总结和资深经验。" },
  { id: "s14", dimension: "compliance", left: "我宁愿慢一点，也不想留下明显合规风险。", right: "我可以先让项目动起来，再逐项降低风险。" },
  { id: "s15", dimension: "detail", left: "我改材料时，经常连措辞层级也一起调整。", right: "我改材料时，主要抓影响判断的核心问题。" },
  { id: "s16", dimension: "drive", left: "我天然会盯进度、盯责任人、盯下一次反馈。", right: "我更适合做高质量输入，不喜欢一直催人。" },
  { id: "s17", dimension: "social", left: "我能把不同角色的话翻译成彼此听得懂的语言。", right: "我更愿意保持边界，减少无效社交消耗。" },
  { id: "s18", dimension: "pressure", left: "临场变化不会吓到我，先救火再复盘。", right: "我讨厌临场变化，但会用清单把自己稳住。" },
  { id: "s19", dimension: "evidence", left: "结论没有证据链，我很难安心。", right: "有时先做合理假设，比等证据齐全更有效。" },
  { id: "s20", dimension: "compliance", left: "我对审计、核查、伦理问题有天然雷达。", right: "我对业务节奏和现实限制更敏感。" },
  { id: "s21", dimension: "detail", left: "数据不干净，我会觉得整个世界不太平。", right: "数据有瑕疵很正常，先分清轻重缓急。" },
  { id: "s22", dimension: "drive", left: "我习惯把模糊问题变成行动项。", right: "我习惯先把模糊问题问得更准确。" },
  { id: "s23", dimension: "social", left: "我能承担大量沟通，并尽量让每个人舒服。", right: "我更适合深度工作，不适合长时间在线营业。" },
  { id: "s24", dimension: "pressure", left: "压力越大，我越像项目现场的急救箱。", right: "压力越大，我越需要安静空间恢复判断力。" },
  { id: "s25", dimension: "evidence", left: "我喜欢在汇报里保留限定条件和适用范围。", right: "我喜欢让汇报更直接，先讲最重要的结论。" },
  { id: "s26", dimension: "compliance", left: "如果文件链条不完整，我会持续惦记。", right: "如果风险可控，我不想被文件链条拖住。" },
  { id: "s27", dimension: "detail", left: "别人说差不多时，我会问差多少。", right: "别人说差不多时，我会先判断是否值得继续深挖。" },
  { id: "s28", dimension: "drive", left: "项目组需要一个人往前推时，我常常就是那个人。", right: "项目组需要冷静判断时，我更能提供价值。" },
  { id: "s29", dimension: "social", left: "我能在复杂关系里找到推进事情的说法。", right: "我宁可把话说清楚，也不想过度包装。" },
  { id: "s30", dimension: "pressure", left: "我遇到突发情况会先稳定别人。", right: "我遇到突发情况会先稳定自己。" }
];

const archetypes = [
  {
    code: "SOP",
    name: "SOP 守门人",
    tagline: "流程、证据、版本号，一个都不能少。",
    weights: { compliance: 3, evidence: 2, detail: 2, drive: 0, social: 0, pressure: 1 },
    keywords: ["合规雷达", "版本敏感", "风险前置"],
    advice: "你的价值在于让项目少踩坑。记得给同事留出解释空间，流程会更容易被接受。"
  },
  {
    code: "QRY",
    name: "Query 清道夫",
    tagline: "别人看到问题，你看到根因。",
    weights: { detail: 3, evidence: 2, compliance: 1, drive: 1, social: -1, pressure: 1 },
    keywords: ["数据洁癖", "追根溯源", "精准修复"],
    advice: "你适合做质量兜底。别把所有问题都扛成自己的责任，优先级也是一种专业。"
  },
  {
    code: "CRA",
    name: "CRA 雷达型",
    tagline: "现场风险还没说出口，你已经听见提示音。",
    weights: { compliance: 2, evidence: 2, social: 2, pressure: 2, detail: 1, drive: 1 },
    keywords: ["现场感", "风险识别", "沟通推进"],
    advice: "你能连接文件、现场和人。注意给自己留恢复时间，长期在线会磨损判断力。"
  },
  {
    code: "CRC",
    name: "CRC 多线程型",
    tagline: "电话、受试者、系统、快递，同时在线。",
    weights: { social: 3, pressure: 2, drive: 2, detail: 1, compliance: 1, evidence: 0 },
    keywords: ["多线并行", "临场协调", "高响应"],
    advice: "你是项目现场的缓冲层。把边界和记录留好，不要让所有临时需求都变成你的默认任务。"
  },
  {
    code: "PM",
    name: "PM 推进器",
    tagline: "进度可以调整，但不能没人负责。",
    weights: { drive: 3, social: 2, pressure: 2, compliance: 1, evidence: 1, detail: 0 },
    keywords: ["目标感", "责任拆解", "向前推动"],
    advice: "你擅长让事情动起来。偶尔慢半拍听完异议，会让推进更稳。"
  },
  {
    code: "MW",
    name: "医学写作显微镜",
    tagline: "一句话能改出三层逻辑。",
    weights: { evidence: 3, detail: 3, compliance: 1, drive: 0, social: -1, pressure: 1 },
    keywords: ["逻辑洁净", "表达精修", "证据链"],
    advice: "你能把复杂材料变清楚。记得区分必须精修和可以通过的部分，别被完美主义拖住。"
  },
  {
    code: "PV",
    name: "PV 警报器",
    tagline: "看到 SAE 三个字母，精神自动上线。",
    weights: { compliance: 3, pressure: 3, evidence: 2, detail: 1, drive: 1, social: 0 },
    keywords: ["安全敏感", "快速响应", "边界清晰"],
    advice: "你适合守住安全底线。高敏感是优势，也需要稳定节奏来避免长期紧绷。"
  },
  {
    code: "EDC",
    name: "EDC 纠错型",
    tagline: "数据不干净，世界不太平。",
    weights: { detail: 3, evidence: 2, drive: 1, compliance: 1, social: -1, pressure: 1 },
    keywords: ["字段敏感", "异常捕捉", "秩序恢复"],
    advice: "你能让混乱数据恢复秩序。面对反复修改时，保留记录和边界会保护你的耐心。"
  },
  {
    code: "IRB",
    name: "伦理材料折叠大师",
    tagline: "附件、盖章、版本号，人生三件套。",
    weights: { compliance: 3, detail: 2, social: 1, pressure: 2, evidence: 1, drive: 1 },
    keywords: ["材料统筹", "节点意识", "审查预判"],
    advice: "你擅长把复杂材料收拢成可提交状态。别忘了把规则变成模板，减少重复消耗。"
  },
  {
    code: "AUD",
    name: "稽查预言家",
    tagline: "还没 audit，已经知道会被问什么。",
    weights: { compliance: 3, evidence: 3, detail: 2, pressure: 2, drive: 0, social: 0 },
    keywords: ["预判风险", "证据闭环", "问题前移"],
    advice: "你看问题很穿透。表达风险时加上解决路径，会让你的提醒更有行动力。"
  },
  {
    code: "DLV",
    name: "摆烂但交付型",
    tagline: "嘴上 OJBK，节点前总能交。",
    weights: { pressure: 3, drive: 1, social: 1, detail: -1, compliance: 0, evidence: 0 },
    keywords: ["临门一脚", "弹性生存", "结果导向"],
    advice: "你有很强的最后交付力。提前留一点余量，会让你的能力看起来更稳定。"
  },
  {
    code: "MUTE",
    name: "会议静音观察者",
    tagline: "不常发言，但关键截图和纪要都在脑子里。",
    weights: { evidence: 2, detail: 2, social: -3, compliance: 1, drive: -1, pressure: 1 },
    keywords: ["安静观察", "信息沉淀", "低噪输出"],
    advice: "你适合在安静处做高质量判断。关键时刻主动说出结论，会让你的价值更容易被看见。"
  }
];

module.exports = {
  questions,
  archetypes
};
