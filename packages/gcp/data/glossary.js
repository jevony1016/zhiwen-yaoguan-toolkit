/**
 * 缩略语词典 - 中英文官方原文定义 + 行业通用术语
 * 数据来源：ICH E6(R3)、RECIST 1.1、CTCAE v6.0、FDA、EMA、WHO、互联网公开行业经验
 * 更新时间：2026-05-05
 * 总数：189 个
 *
 * 重要说明：
 * - 官方术语定义来自ICH、FDA、EMA等官方文档原文
 * - 行业通用术语来源于互联网公开行业经验，仅供参考
 * - 特别适合准备外企面试的临床试验从业者
 */

module.exports = [
  {
    "abbr": "AE",
    "fullEn": "Adverse Event",
    "fullZh": "不良事件",
    "definitionEn": "Any unfavorable medical occurrence in a trial participant administered the investigational product. The adverse event does not necessarily have a causal relationship with the treatment.",
    "definitionZh": "是指试验参与者接受试验用药品后出现的所有不利的医学事件。不良事件不一定与治疗有因果关系。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "SAE",
    "fullEn": "Serious Adverse Event",
    "fullZh": "严重不良事件",
    "definitionEn": "Any unfavorable medical occurrence that is considered serious at any dose if it: Results in death; Is life-threatening; Requires inpatient hospitalization or prolongation of existing hospitalization; Results in persistent or significant disability/incapacity; Is a congenital anomaly/birth defect.",
    "definitionZh": "在任何剂量下出现的被认为是严重的不利的医学事件：导致死亡；危及生命；需要住院治疗或者延长住院时间；导致永久或者严重的残疾或者功能丧失；先天性异常或者出生缺陷。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "SUSAR",
    "fullEn": "Suspected Unexpected Serious Adverse Reaction",
    "fullZh": "可疑且非预期严重不良反应",
    "definitionEn": "An adverse reaction that meets three criteria: suspected, unexpected, and serious. Suspected: There is a reasonable possibility that the drug caused the adverse drug reaction. Unexpected: An adverse reaction, the nature or severity of which is not consistent with the applicable product information. Serious: See above for SAE.",
    "definitionZh": "满足可疑、非预期和严重三个标准的不良反应。可疑：存在由药物引起不良反应的合理可能性。非预期：不良反应的性质或严重程度同已有的药品信息不符。严重：见上文SAE的定义。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "ADR",
    "fullEn": "Adverse Drug Reaction",
    "fullZh": "药物不良反应",
    "definitionEn": "In the preapproval clinical experience with a new investigational product or its new usages: unfavorable and unintended responses, such as a sign, symptom or disease related to any dose of a medicinal product where a causal relationship between a medicinal product and an adverse event is a reasonable possibility. For marketed medicinal products: a response to a drug that is noxious and unintended and that occurs at doses normally used in humans for prophylaxis, diagnosis or therapy of diseases or for modification of physiological function.",
    "definitionZh": "在新试验用药品或新适应症批准前的临床经验中：不利的、非期望的药物反应，例如征象、症状或疾病等，该反应与任何剂量的药物有关，即药物与不良事件的因果关系存在合理的可能性。对于已上市的药品：指在人体上使用正常剂量来预防、诊断、治疗疾病或改善生理功能时出现的有害的、非期望的药物反应。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "GCP",
    "fullEn": "Good Clinical Practice",
    "fullZh": "药物临床试验质量管理规范",
    "definitionEn": "A standard for the planning, initiating, performing, recording, oversight, evaluation, analysis, and reporting of clinical trials that provides assurance that the data and reported results are reliable and that the rights, safety and well-being of trial participants are protected.",
    "definitionZh": "规范药物临床试验全过程的标准，包括计划、启动、执行、记录、监督、评估、分析和报告，以确保数据和报告结果是可靠的，以及试验参与者的权益、安全和福祉得到保护。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IRB",
    "fullEn": "Institutional Review Board",
    "fullZh": "机构审查委员会",
    "definitionEn": "An independent body (a review board or a committee, institutional, regional, national, or supranational) constituted of medical professionals and nonmedical members whose responsibility it is to ensure the protection of the rights, safety and well-being of human participants involved in a trial.",
    "definitionZh": "由医学专业人员和非医学人员组成的独立机构，其职责是通过对试验方案、研究者资质、设施以及获取和记录试验参与者知情同意的方法和材料，进行审查和批准/提供同意意见，确保人类试验参与者的权益、安全和福祉受到保护。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IEC",
    "fullEn": "Independent Ethics Committee",
    "fullZh": "独立伦理委员会",
    "definitionEn": "An independent body (a review board or a committee, institutional, regional, national, or supranational) constituted of medical professionals and nonmedical members whose responsibility it is to ensure the protection of the rights, safety and well-being of human participants involved in a trial.",
    "definitionZh": "由医学专业人员和非医学人员组成的独立机构，其职责是确保人类试验参与者的权益、安全和福祉受到保护。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "PI",
    "fullEn": "Principal Investigator",
    "fullZh": "主要研究者",
    "definitionEn": "A person responsible for the conduct of the clinical trial, including the trial participants for whom that person has responsibility during the conduct of the trial. If a trial is conducted by a team of individuals, the investigator is the responsible leader of the team and may be called the principal investigator.",
    "definitionZh": "负责实施临床试验的一名人员，包括在实施期间对试验参与者负有责任的人员。如果试验由团队实施，则研究者是其负责人，也称为主要研究者。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "Sub-I",
    "fullEn": "Sub-investigator",
    "fullZh": "助理研究者",
    "definitionEn": "Any individual member of the clinical trial team designated, and under the oversight of the investigator, to perform significant trial-related procedures and/or to make important trial-related decisions (e.g., associates, residents, research fellows).",
    "definitionZh": "由研究者指定并在其监督下执行重要的试验相关程序和/或做出重要的试验相关决定的临床试验团队成员（例如助理、住院医生、研究人员）。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "CRF",
    "fullEn": "Case Report Form",
    "fullZh": "病例报告表",
    "definitionEn": "A data acquisition tool designed to record protocol-required information to be reported by the investigator to the sponsor on each trial participant.",
    "definitionZh": "是指一种数据采集工具，用于记录临床试验方案要求的由研究者向申办者报告的每位试验参与者的信息。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "eCRF",
    "fullEn": "Electronic Case Report Form",
    "fullZh": "电子病例报告表",
    "definitionEn": "A data acquisition tool designed to record protocol-required information to be reported by the investigator to the sponsor on each trial participant, in electronic format.",
    "definitionZh": "电子格式的病例报告表，用于记录临床试验方案要求的由研究者向申办者报告的每位试验参与者的信息。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "CRO",
    "fullEn": "Contract Research Organization",
    "fullZh": "合同研究组织",
    "definitionEn": "A person or organization (commercial, academic or other) providing a service used by either the sponsor or the investigator to fulfill trial-related activities.",
    "definitionZh": "向申办者或研究者提供服务，承担临床试验相关活动的个人或组织（商业的、学术的或其他）。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "SOP",
    "fullEn": "Standard Operating Procedure",
    "fullZh": "标准操作规程",
    "definitionEn": "Detailed, documented instructions to achieve uniformity of the performance of a specific activity.",
    "definitionZh": "为保证某项特定操作行为的一致性而制定的详细的书面指导文件。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "QA",
    "fullEn": "Quality Assurance",
    "fullZh": "质量保证",
    "definitionEn": "All those planned and systematic actions that are established to ensure that the trial is performed and the data are generated, documented (recorded), and reported in compliance with GCP and the applicable regulatory requirement(s).",
    "definitionZh": "临床试验中建立的有计划的系统性措施，以保证临床试验的实施和数据的生成、记录和报告均遵守GCP和适用的监管要求。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "QC",
    "fullEn": "Quality Control",
    "fullZh": "质量控制",
    "definitionEn": "The operational techniques and activities undertaken to verify that the requirements for quality of the trial-related activities have been fulfilled.",
    "definitionZh": "为确证临床试验所有相关活动符合质量要求而实施的技术和活动。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IDMC",
    "fullEn": "Independent Data Monitoring Committee",
    "fullZh": "独立数据监查委员会",
    "definitionEn": "An independent data monitoring committee (e.g., data safety monitoring board) that may be established by the sponsor to assess, at intervals, the progress of a clinical trial, the safety and relevant efficacy data, and to recommend to the sponsor whether to continue, modify, or stop a trial.",
    "definitionZh": "申办者可设立独立数据监查委员会（如数据安全监查委员会），定期对临床试验的进展、安全性和相关疗效数据进行评估，并向申办者建议临床试验是否继续、调整或者停止。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "DSMB",
    "fullEn": "Data Safety Monitoring Board",
    "fullZh": "数据安全监查委员会",
    "definitionEn": "An independent data monitoring committee that may be established by the sponsor to assess, at intervals, the progress of a clinical trial, the safety and relevant efficacy data, and to recommend to the sponsor whether to continue, modify, or stop a trial.",
    "definitionZh": "申办者可设立的独立数据监查委员会，定期对临床试验的进展、安全性和相关疗效数据进行评估，并向申办者建议临床试验是否继续、调整或者停止。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "CSR",
    "fullEn": "Clinical Study Report",
    "fullZh": "临床研究报告",
    "definitionEn": "A documented description of a trial of any investigational product conducted in human participants, in which the clinical and statistical description, presentations, and analyses are fully integrated into a single report.",
    "definitionZh": "对以人作为试验参与者实施的使用试验用药品的临床试验的书面描述，其中临床和统计学描述、说明和分析都全部整合在该报告中。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "TMF",
    "fullEn": "Trial Master File",
    "fullZh": "试验主文件",
    "definitionEn": "Essential records are the documents and data (and relevant metadata), in any format, associated with a clinical trial that facilitate the ongoing management of the trial.",
    "definitionZh": "必备记录是与临床试验相关的任何格式的文件和数据（包括相关元数据），这些文件和数据有助于对试验进行持续管理。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "ISF",
    "fullEn": "Investigator Site File",
    "fullZh": "研究者文件夹",
    "definitionEn": "Essential records maintained at the investigator site that document the conduct of the clinical trial.",
    "definitionZh": "在研究者现场保存的必备记录，用于记录临床试验的实施过程。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IB",
    "fullEn": "Investigator's Brochure",
    "fullZh": "研究者手册",
    "definitionEn": "A compilation of the clinical and nonclinical data on the investigational product(s) that is relevant to the study of the investigational product(s) in human participants.",
    "definitionZh": "针对试验用药品在人类试验参与者中开展临床试验相关的临床和非临床研究资料汇编。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "RSI",
    "fullEn": "Reference Safety Information",
    "fullZh": "安全性参考信息",
    "definitionEn": "Contains a cumulative list of ADRs that are expected for the investigational product being administered to participants in a clinical trial.",
    "definitionZh": "包含临床试验中试验参与者使用试验用药品时预期发生的药物不良反应（ADR）的累积列表。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "DAT",
    "fullEn": "Data Acquisition Tool",
    "fullZh": "数据采集工具",
    "definitionEn": "A paper or electronic tool designed to collect data and associated metadata from a data originator in a clinical trial according to the protocol and to report the data to the sponsor.",
    "definitionZh": "纸质或电子工具，用于根据试验方案从临床试验的数据创建者处收集数据和相关元数据，并将数据报告给申办者。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "EDC",
    "fullEn": "Electronic Data Capture",
    "fullZh": "电子数据采集",
    "definitionEn": "A data acquisition tool in electronic format designed to collect data and associated metadata from a data originator in a clinical trial according to the protocol and to report the data to the sponsor.",
    "definitionZh": "电子格式的数据采集工具，用于根据试验方案从临床试验的数据创建者处收集数据和相关元数据，并将数据报告给申办者。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IRT",
    "fullEn": "Interactive Response Technology",
    "fullZh": "交互式应答技术",
    "definitionEn": "A data acquisition tool designed to collect data and associated metadata in an interactive manner.",
    "definitionZh": "以交互方式收集数据和相关元数据的数据采集工具。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "COA",
    "fullEn": "Clinical Outcome Assessment",
    "fullZh": "临床结局评估",
    "definitionEn": "A data acquisition tool designed to assess clinical outcomes. Examples include patient-reported outcomes (PROs), observer-reported outcomes, clinician-reported outcomes, and performance outcomes.",
    "definitionZh": "用于评估临床结局的数据采集工具。示例包括患者报告结局（PRO）、观察者报告结局、临床医生报告结局和绩效结局。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "PRO",
    "fullEn": "Patient-Reported Outcome",
    "fullZh": "患者报告结局",
    "definitionEn": "A data acquisition tool designed to collect data directly from the patient/trial participant according to the protocol.",
    "definitionZh": "根据试验方案直接从患者/试验参与者处收集数据的数据采集工具。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "ePRO",
    "fullEn": "Electronic Patient-Reported Outcome",
    "fullZh": "电子患者报告结局",
    "definitionEn": "A patient-reported outcome collected via electronic means, such as a smartphone app or web-based platform.",
    "definitionZh": "通过电子方式（如智能手机应用程序或网络平台）收集的患者报告结局。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IMP",
    "fullEn": "Investigational Medicinal Product",
    "fullZh": "试验用药品",
    "definitionEn": "A pharmaceutical form of an active ingredient or placebo being tested or used as a reference in a clinical trial. Investigational products should be considered synonymous with drugs, medicines, medicinal products, vaccines, and biological products.",
    "definitionZh": "在临床试验中供试验或作为对照使用的活性成分或安慰剂的药物制剂。试验用药品应视为药物、药品、医药产品、疫苗和生物制品的同义词。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "ICF",
    "fullEn": "Informed Consent Form",
    "fullZh": "知情同意书",
    "definitionEn": "A process by which a participant or their legally acceptable representative voluntarily confirms their willingness to participate in a trial after having been informed. Informed consent is documented by means of a written (paper or electronic), signed and dated informed consent form.",
    "definitionZh": "试验参与者或其法定代理人被告知后，确认同意自愿参加临床试验的过程。知情同意通过书面的（纸质或电子），签署签名和日期的知情同意书作为记录。",
    "category": "GCP法规",
    "source": "ICH E6(R3)",
    "sourceType": "官方"
  },
  {
    "abbr": "IND",
    "fullEn": "Investigational New Drug",
    "fullZh": "研究性新药",
    "definitionEn": "A new drug or biological product that is used in a clinical investigation.",
    "definitionZh": "用于临床研究的新药或生物制品。",
    "category": "GCP法规",
    "source": "FDA",
    "sourceType": "官方"
  },
  {
    "abbr": "NDA",
    "fullEn": "New Drug Application",
    "fullZh": "新药申请",
    "definitionEn": "An application to the FDA for approval to market a new drug.",
    "definitionZh": "向FDA提交的新药上市申请。",
    "category": "GCP法规",
    "source": "FDA",
    "sourceType": "官方"
  },
  {
    "abbr": "BLA",
    "fullEn": "Biologics License Application",
    "fullZh": "生物制品许可申请",
    "definitionEn": "An application to the FDA for approval to market a biological product.",
    "definitionZh": "向FDA提交的生物制品上市许可申请。",
    "category": "GCP法规",
    "source": "FDA",
    "sourceType": "官方"
  },
  {
    "abbr": "MAA",
    "fullEn": "Marketing Authorization Application",
    "fullZh": "上市许可申请",
    "definitionEn": "An application to the European Medicines Agency (EMA) for authorization to market a medicinal product.",
    "definitionZh": "向欧洲药品管理局（EMA）提交的药品上市许可申请。",
    "category": "GCP法规",
    "source": "EMA",
    "sourceType": "官方"
  },
  {
    "abbr": "CTA",
    "fullEn": "Clinical Trial Application",
    "fullZh": "临床试验申请",
    "definitionEn": "An application to the regulatory authority for authorization to conduct a clinical trial.",
    "definitionZh": "向监管机构提交的临床试验许可申请。",
    "category": "GCP法规",
    "source": "EMA/NMPA",
    "sourceType": "官方"
  },
  {
    "abbr": "DSUR",
    "fullEn": "Development Safety Update Report",
    "fullZh": "研发期间安全性更新报告",
    "definitionEn": "A document intended to be a common standard for annual clinical trial safety reporting among the ICH regions.",
    "definitionZh": "ICH区域间年度临床试验安全性报告的共同标准文件。",
    "category": "GCP法规",
    "source": "ICH E2F",
    "sourceType": "官方"
  },
  {
    "abbr": "CR",
    "fullEn": "Complete Response",
    "fullZh": "完全缓解",
    "definitionEn": "Disappearance of all target lesions. All pathological lymph nodes must have reduction in short axis to <10 mm.",
    "definitionZh": "所有靶病灶消失，全部病理淋巴结短直径必须减少至<10 mm。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "PR",
    "fullEn": "Partial Response",
    "fullZh": "部分缓解",
    "definitionEn": "At least a 30% decrease in the sum of diameters of target lesions, referenced to baseline sum of diameters.",
    "definitionZh": "靶病灶直径之和比基线水平减少至少30%。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "SD",
    "fullEn": "Stable Disease",
    "fullZh": "疾病稳定",
    "definitionEn": "Neither sufficient shrinkage to qualify for PR nor sufficient increase to qualify for PD, referenced to the smallest sum of diameters.",
    "definitionZh": "靶病灶减小的程度没达到PR，增加的程度也没达到PD水平，介于两者之间。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "PD",
    "fullEn": "Progressive Disease",
    "fullZh": "疾病进展",
    "definitionEn": "At least a 20% increase in the sum of diameters of target lesions, referenced to the smallest sum recorded, with an absolute increase of at least 5 mm. The appearance of one or more new lesions is also considered progression.",
    "definitionZh": "靶病灶直径之和相对增加至少20%，且绝对值增加至少5 mm。出现一个或多个新病灶也视为疾病进展。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "ORR",
    "fullEn": "Objective Response Rate",
    "fullZh": "客观缓解率",
    "definitionEn": "The proportion of patients with tumor size reduction of a predefined amount (CR + PR) for a minimum time period.",
    "definitionZh": "达到完全缓解(CR)或部分缓解(PR)的患者比例。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "DCR",
    "fullEn": "Disease Control Rate",
    "fullZh": "疾病控制率",
    "definitionEn": "The proportion of patients with CR, PR or SD for a minimum time period.",
    "definitionZh": "达到完全缓解(CR)、部分缓解(PR)或疾病稳定(SD)的患者比例。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "PFS",
    "fullEn": "Progression-Free Survival",
    "fullZh": "无进展生存期",
    "definitionEn": "The time from treatment initiation until disease progression or death from any cause.",
    "definitionZh": "从治疗开始到疾病进展或因任何原因死亡的时间。",
    "category": "肿瘤学",
    "source": "RECIST 1.1",
    "sourceType": "官方"
  },
  {
    "abbr": "OS",
    "fullEn": "Overall Survival",
    "fullZh": "总生存期",
    "definitionEn": "The time from treatment initiation until death from any cause.",
    "definitionZh": "从治疗开始到因任何原因死亡的时间。",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DFS",
    "fullEn": "Disease-Free Survival",
    "fullZh": "无病生存期",
    "definitionEn": "The time from treatment completion until disease recurrence or death from any cause.",
    "definitionZh": "从治疗结束到疾病复发或因任何原因死亡的时间。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "TTP",
    "fullEn": "Time to Progression",
    "fullZh": "至进展时间",
    "definitionEn": "The time from treatment initiation until disease progression, excluding death.",
    "definitionZh": "从治疗开始到疾病进展的时间，不包括死亡。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "TTF",
    "fullEn": "Time to Treatment Failure",
    "fullZh": "至治疗失败时间",
    "definitionEn": "The time from treatment initiation until discontinuation of treatment for any reason, including disease progression, toxicity, or death.",
    "definitionZh": "从治疗开始到因任何原因停止治疗的时间，包括疾病进展、毒性或死亡。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "RR",
    "fullEn": "Relative Risk",
    "fullZh": "相对风险",
    "definitionEn": "The ratio of the probability of an event occurring in an exposed group to the probability of the event occurring in a comparison, non-exposed group.",
    "definitionZh": "暴露组中某事件发生概率与非暴露组中该事件发生概率之比。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "CBR",
    "fullEn": "Clinical Benefit Rate",
    "fullZh": "临床获益率",
    "definitionEn": "The proportion of patients achieving CR, PR, or durable SD.",
    "definitionZh": "达到CR、PR或持久SD的患者比例。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CI",
    "fullEn": "Confidence Interval",
    "fullZh": "置信区间",
    "definitionEn": "A range of values that is likely to contain the true population parameter with a specified level of confidence (usually 95%).",
    "definitionZh": "可能包含真实总体参数的范围，具有指定的置信水平（通常为95%）。（来源：互联网公开行业经验，仅供参考）",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "HR",
    "fullEn": "Hazard Ratio",
    "fullZh": "风险比",
    "definitionEn": "The ratio of hazard rates in two groups, often used in time-to-event analyses such as survival analysis.",
    "definitionZh": "两组风险率的比值，常用于生存分析等时间-事件分析。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "OR",
    "fullEn": "Odds Ratio",
    "fullZh": "比值比",
    "definitionEn": "The ratio of the odds of an event occurring in one group to the odds of it occurring in another group.",
    "definitionZh": "某事件在一组中发生的比值与在另一组中发生比值之比。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "SE",
    "fullEn": "Standard Error",
    "fullZh": "标准误",
    "definitionEn": "The standard deviation of the sampling distribution of a statistic, most commonly the mean.",
    "definitionZh": "统计量（最常见的是均值）抽样分布的标准差。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "IQR",
    "fullEn": "Interquartile Range",
    "fullZh": "四分位距",
    "definitionEn": "The range between the first quartile (25th percentile) and the third quartile (75th percentile) of a distribution.",
    "definitionZh": "分布的第一四分位数（第25百分位数）与第三四分位数（第75百分位数）之间的范围。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "p-value",
    "fullEn": "p-value",
    "fullZh": "p值",
    "definitionEn": "The probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct.",
    "definitionZh": "在零假设正确的前提下，获得至少与实际观察结果一样极端的检验结果的概率。",
    "category": "统计学",
    "source": "ICH E9",
    "sourceType": "官方"
  },
  {
    "abbr": "ALT",
    "fullEn": "Alanine Aminotransferase",
    "fullZh": "丙氨酸氨基转移酶",
    "definitionEn": "An enzyme found primarily in the liver; elevated levels may indicate liver damage.",
    "definitionZh": "主要存在于肝脏的酶；升高可能提示肝损伤。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "AST",
    "fullEn": "Aspartate Aminotransferase",
    "fullZh": "天冬氨酸氨基转移酶",
    "definitionEn": "An enzyme found in the liver, heart, and other tissues; elevated levels may indicate tissue damage.",
    "definitionZh": "存在于肝脏、心脏和其他组织中的酶；升高可能提示组织损伤。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "ALP",
    "fullEn": "Alkaline Phosphatase",
    "fullZh": "碱性磷酸酶",
    "definitionEn": "An enzyme found in the liver, bones, and other tissues; elevated levels may indicate liver or bone disease.",
    "definitionZh": "存在于肝脏、骨骼和其他组织中的酶；升高可能提示肝脏或骨骼疾病。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "GGT",
    "fullEn": "Gamma-Glutamyl Transferase",
    "fullZh": "γ-谷氨酰转移酶",
    "definitionEn": "An enzyme found mainly in the liver; elevated levels may indicate bile duct or liver disease.",
    "definitionZh": "主要存在于肝脏的酶；升高可能提示胆管或肝脏疾病。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "TBil",
    "fullEn": "Total Bilirubin",
    "fullZh": "总胆红素",
    "definitionEn": "A breakdown product of heme; elevated levels may indicate liver dysfunction or hemolysis.",
    "definitionZh": "血红素的分解产物；升高可能提示肝功能障碍或溶血。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "BUN",
    "fullEn": "Blood Urea Nitrogen",
    "fullZh": "血尿素氮",
    "definitionEn": "A measure of the amount of nitrogen in the blood in the form of urea; used to evaluate kidney function.",
    "definitionZh": "血液中以尿素形式存在的氮的量；用于评估肾功能。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Cr",
    "fullEn": "Creatinine",
    "fullZh": "肌酐",
    "definitionEn": "A waste product from muscle metabolism; elevated levels may indicate kidney dysfunction.",
    "definitionZh": "肌肉代谢的废物；升高可能提示肾功能障碍。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "CrCl",
    "fullEn": "Creatinine Clearance",
    "fullZh": "肌酐清除率",
    "definitionEn": "A measure of kidney function that estimates the volume of blood cleared of creatinine per unit time.",
    "definitionZh": "评估肾功能的指标，估算单位时间内清除肌酐的血液体积。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "eGFR",
    "fullEn": "Estimated Glomerular Filtration Rate",
    "fullZh": "估算肾小球滤过率",
    "definitionEn": "An estimate of the glomerular filtration rate used to assess kidney function.",
    "definitionZh": "肾小球滤过率的估算值，用于评估肾功能。",
    "category": "实验室检查",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Hb",
    "fullEn": "Hemoglobin",
    "fullZh": "血红蛋白",
    "definitionEn": "A protein in red blood cells that carries oxygen; low levels indicate anemia.",
    "definitionZh": "红细胞中携带氧气的蛋白质；低水平提示贫血。（来源：互联网公开行业经验，仅供参考）",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Hgb",
    "fullEn": "Hemoglobin",
    "fullZh": "血红蛋白",
    "definitionEn": "Alternative abbreviation for hemoglobin; a protein in red blood cells that carries oxygen.",
    "definitionZh": "血红蛋白的另一种缩写形式；红细胞中携带氧气的蛋白质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "WBC",
    "fullEn": "White Blood Cell",
    "fullZh": "白细胞",
    "definitionEn": "Cells of the immune system that protect the body against infections.",
    "definitionZh": "免疫系统的细胞，保护身体免受感染。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "RBC",
    "fullEn": "Red Blood Cell",
    "fullZh": "红细胞",
    "definitionEn": "Cells that carry oxygen throughout the body; contains hemoglobin.",
    "definitionZh": "在全身携带氧气的细胞；含有血红蛋白。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "PLT",
    "fullEn": "Platelet",
    "fullZh": "血小板",
    "definitionEn": "Cell fragments that help with blood clotting; low levels increase bleeding risk.",
    "definitionZh": "帮助血液凝固的细胞碎片；低水平增加出血风险。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "ANC",
    "fullEn": "Absolute Neutrophil Count",
    "fullZh": "中性粒细胞绝对计数",
    "definitionEn": "The number of neutrophils in the blood; important for fighting bacterial infections.",
    "definitionZh": "血液中中性粒细胞的数量；对于对抗细菌感染很重要。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "ALC",
    "fullEn": "Absolute Lymphocyte Count",
    "fullZh": "淋巴细胞绝对计数",
    "definitionEn": "The number of lymphocytes in the blood; important for immune function.",
    "definitionZh": "血液中淋巴细胞的数量；对免疫功能很重要。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "INR",
    "fullEn": "International Normalized Ratio",
    "fullZh": "国际标准化比值",
    "definitionEn": "A standardized measure of blood coagulation; used to monitor anticoagulant therapy.",
    "definitionZh": "血液凝固的标准化指标；用于监测抗凝治疗。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "APTT",
    "fullEn": "Activated Partial Thromboplastin Time",
    "fullZh": "活化部分凝血活酶时间",
    "definitionEn": "A test that measures the time it takes for blood to clot; used to evaluate coagulation.",
    "definitionZh": "测量血液凝固所需时间的试验；用于评估凝血功能。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "PT",
    "fullEn": "Prothrombin Time",
    "fullZh": "凝血酶原时间",
    "definitionEn": "A test that measures how long it takes blood to clot; used to evaluate the extrinsic coagulation pathway.",
    "definitionZh": "测量血液凝固所需时间的试验；用于评估外源性凝血途径。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "LDH",
    "fullEn": "Lactate Dehydrogenase",
    "fullZh": "乳酸脱氢酶",
    "definitionEn": "An enzyme found in many tissues; elevated levels may indicate tissue damage.",
    "definitionZh": "存在于多种组织中的酶；升高可能提示组织损伤。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "CK",
    "fullEn": "Creatine Kinase",
    "fullZh": "肌酸激酶",
    "definitionEn": "An enzyme found in muscle and brain; elevated levels may indicate muscle damage.",
    "definitionZh": "存在于肌肉和大脑中的酶；升高可能提示肌肉损伤。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "TSH",
    "fullEn": "Thyroid Stimulating Hormone",
    "fullZh": "促甲状腺激素",
    "definitionEn": "A hormone produced by the pituitary gland that stimulates the thyroid; used to assess thyroid function.",
    "definitionZh": "由垂体产生的刺激甲状腺的激素；用于评估甲状腺功能。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "FT3",
    "fullEn": "Free Triiodothyronine",
    "fullZh": "游离三碘甲状腺原氨酸",
    "definitionEn": "The unbound, biologically active form of triiodothyronine (T3), a thyroid hormone.",
    "definitionZh": "三碘甲状腺原氨酸（T3）的未结合、具有生物活性的形式。",
    "category": "实验室检查",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FT4",
    "fullEn": "Free Thyroxine",
    "fullZh": "游离甲状腺素",
    "definitionEn": "The unbound, biologically active form of thyroxine (T4), a thyroid hormone.",
    "definitionZh": "甲状腺素（T4）的未结合、具有生物活性的形式。（来源：互联网公开行业经验，仅供参考）",
    "category": "实验室检查",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Alb",
    "fullEn": "Albumin",
    "fullZh": "白蛋白",
    "definitionEn": "A protein produced by the liver; low levels may indicate liver or kidney disease or malnutrition.",
    "definitionZh": "由肝脏产生的蛋白质；低水平可能提示肝肾疾病或营养不良。（来源：互联网公开行业经验，仅供参考）",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Glu",
    "fullEn": "Glucose",
    "fullZh": "葡萄糖",
    "definitionEn": "Blood sugar; elevated levels may indicate diabetes.",
    "definitionZh": "血糖；升高可能提示糖尿病。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "K",
    "fullEn": "Potassium",
    "fullZh": "钾",
    "definitionEn": "An essential electrolyte for nerve and muscle function.",
    "definitionZh": "神经和肌肉功能必需的电解质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Na",
    "fullEn": "Sodium",
    "fullZh": "钠",
    "definitionEn": "An essential electrolyte for fluid balance and nerve function.",
    "definitionZh": "体液平衡和神经功能必需的电解质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Ca",
    "fullEn": "Calcium",
    "fullZh": "钙",
    "definitionEn": "An essential mineral for bone health and muscle function.",
    "definitionZh": "骨骼健康和肌肉功能必需的矿物质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Mg",
    "fullEn": "Magnesium",
    "fullZh": "镁",
    "definitionEn": "An essential mineral for many body functions.",
    "definitionZh": "多种身体功能必需的矿物质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "P",
    "fullEn": "Phosphorus",
    "fullZh": "磷",
    "definitionEn": "An essential mineral for bone health and energy metabolism.",
    "definitionZh": "骨骼健康和能量代谢必需的矿物质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "UA",
    "fullEn": "Uric Acid",
    "fullZh": "尿酸",
    "definitionEn": "A waste product from purine metabolism; elevated levels may cause gout.",
    "definitionZh": "嘌呤代谢的废物；升高可能导致痛风。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "TG",
    "fullEn": "Triglycerides",
    "fullZh": "甘油三酯",
    "definitionEn": "A type of fat in the blood; elevated levels may increase cardiovascular risk.",
    "definitionZh": "血液中的一种脂肪；升高可能增加心血管风险。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Chol",
    "fullEn": "Cholesterol",
    "fullZh": "胆固醇",
    "definitionEn": "A waxy substance in blood; elevated levels may increase cardiovascular risk.",
    "definitionZh": "血液中的蜡状物质；升高可能增加心血管风险。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "HDL",
    "fullEn": "High-Density Lipoprotein",
    "fullZh": "高密度脂蛋白",
    "definitionEn": "Often called good cholesterol; helps remove cholesterol from arteries.",
    "definitionZh": "通常称为好胆固醇；帮助从动脉中清除胆固醇。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "LDL",
    "fullEn": "Low-Density Lipoprotein",
    "fullZh": "低密度脂蛋白",
    "definitionEn": "Often called bad cholesterol; elevated levels may increase cardiovascular risk.",
    "definitionZh": "通常称为坏胆固醇；升高可能增加心血管风险。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "LVEF",
    "fullEn": "Left Ventricular Ejection Fraction",
    "fullZh": "左心室射血分数",
    "definitionEn": "A measure of the percentage of blood leaving the left ventricle with each contraction; used to assess heart function.",
    "definitionZh": "测量每次收缩时左心室泵出血液百分比的指标；用于评估心脏功能。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "HCO3",
    "fullEn": "Bicarbonate",
    "fullZh": "碳酸氢根",
    "definitionEn": "An electrolyte that helps maintain acid-base balance.",
    "definitionZh": "帮助维持酸碱平衡的电解质。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Amylase",
    "fullEn": "Amylase",
    "fullZh": "淀粉酶",
    "definitionEn": "An enzyme that helps digest carbohydrates; elevated levels may indicate pancreatic disease.",
    "definitionZh": "帮助消化碳水化合物的酶；升高可能提示胰腺疾病。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "Lipase",
    "fullEn": "Lipase",
    "fullZh": "脂肪酶",
    "definitionEn": "An enzyme that helps digest fats; elevated levels may indicate pancreatic disease.",
    "definitionZh": "帮助消化脂肪的酶；升高可能提示胰腺疾病。",
    "category": "实验室检查",
    "source": "CTCAE v6.0",
    "sourceType": "官方"
  },
  {
    "abbr": "CRA",
    "fullEn": "Clinical Research Associate",
    "fullZh": "临床监查员",
    "definitionEn": "A professional employed by a sponsor or CRO to monitor clinical trials and ensure compliance with the protocol and GCP.",
    "definitionZh": "由申办方或CRO雇佣的专业人员，负责监查临床试验并确保依从试验方案和GCP。",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CRC",
    "fullEn": "Clinical Research Coordinator",
    "fullZh": "临床研究协调员",
    "definitionEn": "A person who works at a clinical trial site to coordinate the day-to-day activities of a clinical trial.",
    "definitionZh": "在临床试验机构工作，协调临床试验日常活动的人员。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DM",
    "fullEn": "Data Manager",
    "fullZh": "数据管理员",
    "definitionEn": "A professional responsible for managing clinical trial data throughout the data lifecycle.",
    "definitionZh": "负责在整个数据生命周期中管理临床试验数据的专业人员。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SDV",
    "fullEn": "Source Data Verification",
    "fullZh": "源数据核查",
    "definitionEn": "The process of verifying that data recorded in the case report form match the source records.",
    "definitionZh": "核实病例报告表中记录的数据与源记录是否一致的过程。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SDR",
    "fullEn": "Source Data Review",
    "fullZh": "源数据审核",
    "definitionEn": "The process of reviewing source records to assess data quality and trial conduct.",
    "definitionZh": "审核源记录以评估数据质量和试验实施的过程。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DMP",
    "fullEn": "Data Management Plan",
    "fullZh": "数据管理计划",
    "definitionEn": "A document that describes how clinical trial data will be collected, processed, and managed.",
    "definitionZh": "描述临床试验数据将如何收集、处理和管理的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DVP",
    "fullEn": "Data Validation Plan",
    "fullZh": "数据验证计划",
    "definitionEn": "A document that describes the validation checks to be performed on clinical trial data.",
    "definitionZh": "描述将对临床试验数据执行的验证检查的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "RCT",
    "fullEn": "Randomized Controlled Trial",
    "fullZh": "随机对照试验",
    "definitionEn": "A clinical trial in which participants are randomly assigned to one of two or more treatment groups.",
    "definitionZh": "参与者被随机分配到两个或更多治疗组之一的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FIH",
    "fullEn": "First-in-Human",
    "fullZh": "首次人体试验",
    "definitionEn": "A clinical trial in which a new drug or treatment is tested in humans for the first time.",
    "definitionZh": "新药或治疗首次在人体中进行测试的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FPI",
    "fullEn": "First Patient In",
    "fullZh": "首位患者入组",
    "definitionEn": "The date when the first patient is enrolled in a clinical trial.",
    "definitionZh": "临床试验中首位患者入组的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LPO",
    "fullEn": "Last Patient Out",
    "fullZh": "末位患者出组",
    "definitionEn": "The date when the last patient completes or withdraws from a clinical trial.",
    "definitionZh": "临床试验中末位患者完成或退出的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FPFV",
    "fullEn": "First Patient First Visit",
    "fullZh": "首位患者首次访视",
    "definitionEn": "The date when the first patient completes their first study visit.",
    "definitionZh": "首位患者完成首次研究访视的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LPFV",
    "fullEn": "Last Patient First Visit",
    "fullZh": "末位患者首次访视",
    "definitionEn": "The date when the last enrolled patient completes their first study visit.",
    "definitionZh": "最后入组的患者完成首次研究访视的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MRCT",
    "fullEn": "Multi-Regional Clinical Trial",
    "fullZh": "多区域临床试验",
    "definitionEn": "A clinical trial conducted in multiple countries or regions according to a single protocol.",
    "definitionZh": "根据单一方案在多个国家或地区进行的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PK",
    "fullEn": "Pharmacokinetics",
    "fullZh": "药代动力学",
    "definitionEn": "The study of how the body absorbs, distributes, metabolizes, and eliminates a drug.",
    "definitionZh": "研究身体如何吸收、分布、代谢和消除药物的学科。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "AEFI",
    "fullEn": "Adverse Event Following Immunization",
    "fullZh": "免疫接种后不良事件",
    "definitionEn": "Any adverse event that occurs after immunization, regardless of causal relationship.",
    "definitionZh": "免疫接种后发生的任何不良事件，不论是否存在因果关系。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "WHO",
    "sourceType": "官方"
  },
  {
    "abbr": "SIV",
    "fullEn": "Site Initiation Visit",
    "fullZh": "中心启动访视",
    "definitionEn": "A visit conducted before the start of patient enrollment to ensure the site is ready to conduct the trial. ICH E6(R3) refers to this as 'initiation' in site monitoring activities.",
    "definitionZh": "在患者入组开始前进行的访视，确保中心已准备好开展试验。ICH E6(R3)在监查活动中称为'启动'。",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SMV",
    "fullEn": "Site Monitoring Visit",
    "fullZh": "中心监查访视",
    "definitionEn": "A routine visit to the investigational site to monitor trial progress and ensure compliance. ICH E6(R3) refers to this as 'routine monitoring'.",
    "definitionZh": "对研究中心进行的常规访视，监查试验进展并确保合规。ICH E6(R3)称为'常规监查'。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "COV",
    "fullEn": "Close-Out Visit",
    "fullZh": "中心关闭访视",
    "definitionEn": "A visit conducted after the completion or termination of a trial at a site to ensure proper closure. ICH E6(R3) refers to this as 'close-out'.",
    "definitionZh": "在中心试验完成或终止后进行的访视，确保妥善关闭。ICH E6(R3)称为'关闭'。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SSV",
    "fullEn": "Site Selection Visit",
    "fullZh": "中心筛选访视",
    "definitionEn": "A visit to evaluate a potential site's suitability for participating in a clinical trial. ICH E6(R3) refers to this as 'site selection'.",
    "definitionZh": "评估潜在中心是否适合参加临床试验的访视。ICH E6(R3)称为'中心选择'。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SSU",
    "fullEn": "Site Start-Up",
    "fullZh": "中心启动",
    "definitionEn": "The process of initiating a clinical trial site, including regulatory submissions, IRB/IEC approval, and preparation for patient enrollment.",
    "definitionZh": "启动临床试验中心的过程，包括监管提交、伦理委员会批准和患者入组准备工作。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LPLV",
    "fullEn": "Last Patient Last Visit",
    "fullZh": "末位患者末次访视",
    "definitionEn": "The date when the last patient completes their final study visit.",
    "definitionZh": "最后一位患者完成末次研究访视的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FPD",
    "fullEn": "First Patient Dosed",
    "fullZh": "首位患者给药",
    "definitionEn": "The date when the first patient receives the first dose of investigational product.",
    "definitionZh": "首位患者接受首次试验药物给药的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LPD",
    "fullEn": "Last Patient Dosed",
    "fullZh": "末位患者给药",
    "definitionEn": "The date when the last patient receives their last dose of investigational product.",
    "definitionZh": "末位患者接受末次试验药物给药的日期。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SAP",
    "fullEn": "Statistical Analysis Plan",
    "fullZh": "统计分析计划",
    "definitionEn": "A document that describes the planned statistical analyses for a clinical trial.",
    "definitionZh": "描述临床试验计划进行的统计分析的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MP",
    "fullEn": "Monitoring Plan",
    "fullZh": "监查计划",
    "definitionEn": "A document that describes the strategy, methods, responsibilities, and requirements for monitoring the trial. Defined in ICH E6(R3).",
    "definitionZh": "描述试验监查策略、方法、职责和要求的文件。ICH E6(R3)有官方定义。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SP",
    "fullEn": "Safety Plan",
    "fullZh": "安全性计划",
    "definitionEn": "A document that describes the safety monitoring procedures for a clinical trial.",
    "definitionZh": "描述临床试验安全性监测程序的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "RP",
    "fullEn": "Risk Management Plan",
    "fullZh": "风险管理计划",
    "definitionEn": "A document that describes the risk identification, assessment, and mitigation strategies for a clinical trial.",
    "definitionZh": "描述临床试验风险识别、评估和缓解策略的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "TFLs",
    "fullEn": "Tables, Figures and Listings",
    "fullZh": "表格、图表和数据列表",
    "definitionEn": "Standard outputs for clinical study reports, including summary tables, figures, and individual data listings.",
    "definitionZh": "临床研究报告的标准输出，包括汇总表格、图表和个体数据列表。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CTM",
    "fullEn": "Clinical Trial Manager",
    "fullZh": "临床试验经理",
    "definitionEn": "A professional responsible for the operational management of clinical trials.",
    "definitionZh": "负责临床试验运营管理的专业人员。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PM",
    "fullEn": "Project Manager",
    "fullZh": "项目经理",
    "definitionEn": "A professional responsible for the overall planning, execution, and delivery of a clinical trial project.",
    "definitionZh": "负责临床试验项目整体规划、执行和交付的专业人员。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PV",
    "fullEn": "Pharmacovigilance",
    "fullZh": "药物警戒",
    "definitionEn": "The science and activities relating to the detection, assessment, understanding and prevention of adverse effects or any other drug-related problems.",
    "definitionZh": "与检测、评估、理解和预防不良反应或其他药物相关问题有关的科学和活动。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Biostat",
    "fullEn": "Biostatistician",
    "fullZh": "生物统计师",
    "definitionEn": "A professional who applies statistical methods to the design and analysis of clinical trials.",
    "definitionZh": "将统计方法应用于临床试验设计和分析的专业人员。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MedAff",
    "fullEn": "Medical Affairs",
    "fullZh": "医学事务",
    "definitionEn": "A department responsible for medical strategy, medical information, and interactions with healthcare professionals.",
    "definitionZh": "负责医学策略、医学信息和与医疗专业人员互动的部门。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MedDir",
    "fullEn": "Medical Director",
    "fullZh": "医学总监",
    "definitionEn": "A physician who provides medical oversight and strategic direction for clinical development programs.",
    "definitionZh": "为临床开发项目提供医学监督和战略指导的医师。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PSUR",
    "fullEn": "Periodic Safety Update Report",
    "fullZh": "定期安全性更新报告",
    "definitionEn": "A report submitted to regulatory authorities at defined intervals summarizing the safety profile of a marketed drug.",
    "definitionZh": "按规定间隔向监管机构提交的汇总已上市药品安全性特征的报告。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PBRER",
    "fullEn": "Periodic Benefit-Risk Evaluation Report",
    "fullZh": "定期获益-风险评估报告",
    "definitionEn": "A report that presents a benefit-risk evaluation of a marketed drug based on accumulated safety data.",
    "definitionZh": "基于累积安全性数据对已上市药品进行获益-风险评估的报告。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "ICSR",
    "fullEn": "Individual Case Safety Report",
    "fullZh": "个例安全性报告",
    "definitionEn": "A detailed report of an adverse event/reaction related to an individual patient.",
    "definitionZh": "与个体患者相关的不良事件/反应的详细报告。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "AEF",
    "fullEn": "Adverse Event Form",
    "fullZh": "不良事件表",
    "definitionEn": "A form used to collect information about adverse events in clinical trials.",
    "definitionZh": "用于收集临床试验中不良事件信息的表格。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "RFS",
    "fullEn": "Recurrence-Free Survival",
    "fullZh": "无复发生存期",
    "definitionEn": "The time from treatment completion until disease recurrence or death from any cause.",
    "definitionZh": "从治疗结束到疾病复发或因任何原因死亡的时间。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DOR",
    "fullEn": "Duration of Response",
    "fullZh": "缓解持续时间",
    "definitionEn": "The time from first documented response (CR or PR) until disease progression.",
    "definitionZh": "从首次记录到缓解（CR或PR）到疾病进展的时间。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "TTNT",
    "fullEn": "Time to Next Treatment",
    "fullZh": "至下一线治疗时间",
    "definitionEn": "The time from treatment initiation until the start of the next line of therapy.",
    "definitionZh": "从治疗开始到开始下一线治疗的时间。（来源：互联网公开行业经验，仅供参考）",
    "category": "肿瘤学",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "OL",
    "fullEn": "Open-Label",
    "fullZh": "开放标签",
    "definitionEn": "A type of clinical trial in which both the researchers and participants know which treatment is being administered.",
    "definitionZh": "研究者和参与者都知道正在接受哪种治疗类型的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DB",
    "fullEn": "Double-Blind",
    "fullZh": "双盲",
    "definitionEn": "A type of clinical trial in which neither the participants nor the researchers know which treatment is being administered.",
    "definitionZh": "参与者和研究者都不知道正在接受哪种治疗类型的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SB",
    "fullEn": "Single-Blind",
    "fullZh": "单盲",
    "definitionEn": "A type of clinical trial in which only the participants do not know which treatment is being administered.",
    "definitionZh": "只有参与者不知道正在接受哪种治疗类型的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PC",
    "fullEn": "Placebo-Controlled",
    "fullZh": "安慰剂对照",
    "definitionEn": "A type of clinical trial in which one group receives a placebo as the control.",
    "definitionZh": "一组接受安慰剂作为对照的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "AC",
    "fullEn": "Active-Controlled",
    "fullZh": "阳性对照",
    "definitionEn": "A type of clinical trial in which the investigational product is compared to an established treatment.",
    "definitionZh": "将试验药物与已确立的治疗进行比较的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MC",
    "fullEn": "Multi-Center",
    "fullZh": "多中心",
    "definitionEn": "A clinical trial conducted at multiple investigational sites according to a single protocol.",
    "definitionZh": "根据单一方案在多个研究中心进行的临床试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SQ",
    "fullEn": "Sequential",
    "fullZh": "序贯设计",
    "definitionEn": "A trial design that allows for interim analyses and early stopping based on accumulating data.",
    "definitionZh": "允许根据累积数据进行中期分析和提前停止的试验设计。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Adaptive",
    "fullEn": "Adaptive Design",
    "fullZh": "适应性设计",
    "definitionEn": "A trial design that allows for modifications to the trial procedures based on interim data without undermining the trial's integrity.",
    "definitionZh": "允许根据中期数据修改试验程序而不损害试验完整性的试验设计。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CMDh",
    "fullEn": "Coordination Group for Mutual Recognition and Decentralised Procedures - human",
    "fullZh": "互认可和分散程序协调组（人用）",
    "definitionEn": "A regulatory body in the EU responsible for coordinating mutual recognition and decentralized procedures.",
    "definitionZh": "欧盟负责协调互认可和分散程序的监管机构。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PRIME",
    "fullEn": "Priority Medicines",
    "fullZh": "优先药物",
    "definitionEn": "An EMA scheme to enhance support for medicines that target an unmet medical need.",
    "definitionZh": "EMA加强对针对未满足医疗需求药物支持的计划。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "BTD",
    "fullEn": "Breakthrough Therapy Designation",
    "fullZh": "突破性疗法认定",
    "definitionEn": "An FDA program to expedite the development and review of drugs for serious conditions.",
    "definitionZh": "FDA加速严重疾病药物开发和审评的计划。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FAD",
    "fullEn": "Fast Track Designation",
    "fullZh": "快速通道认定",
    "definitionEn": "An FDA program to facilitate the development and expedite the review of drugs for serious conditions.",
    "definitionZh": "FDA促进严重疾病药物开发和加速审评的计划。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "AAD",
    "fullEn": "Accelerated Approval Designation",
    "fullZh": "加速批准认定",
    "definitionEn": "An FDA program that allows earlier approval of drugs for serious conditions based on surrogate endpoints.",
    "definitionZh": "FDA允许基于替代终点提前批准严重疾病药物的计划。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "DBL",
    "fullEn": "Database Lock",
    "fullZh": "数据库锁定",
    "definitionEn": "The process of finalizing a clinical database after all data entry, cleaning, and validation activities are complete.",
    "definitionZh": "在所有数据录入、清理和验证活动完成后确定最终临床数据库的过程。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "UAT",
    "fullEn": "User Acceptance Testing",
    "fullZh": "用户验收测试",
    "definitionEn": "Testing performed by end users to verify that a system meets business requirements.",
    "definitionZh": "由最终用户执行的测试，以验证系统是否满足业务需求。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SAE Recon",
    "fullEn": "SAE Reconciliation",
    "fullZh": "严重不良事件核对",
    "definitionEn": "The process of comparing safety data between the clinical database and the safety database.",
    "definitionZh": "比较临床数据库和安全性数据库中安全性数据的过程。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CV",
    "fullEn": "Curriculum Vitae",
    "fullZh": "简历",
    "definitionEn": "A document summarizing an individual's education, work experience, and qualifications. Commonly required when applying for clinical trial positions.",
    "definitionZh": "汇总个人教育、工作经历和资质的文件。申请临床试验岗位时通常需要提供。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "ML",
    "fullEn": "Medical License",
    "fullZh": "执业证书",
    "definitionEn": "An official document certifying that a healthcare professional is authorized to practice medicine. Required for investigators and some clinical trial roles.",
    "definitionZh": "证明医疗专业人员获准执业的正式文件。研究者和部分临床试验岗位需要提供。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CA",
    "fullEn": "Confidentiality Agreement",
    "fullZh": "保密协议",
    "definitionEn": "A legal agreement requiring parties to keep certain information confidential. Also known as Non-Disclosure Agreement (NDA). Often required before accessing trial-related information.",
    "definitionZh": "要求各方对某些信息保密的法律协议，也称NDA。接触试验相关信息前通常需要签署。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "GCP Cert",
    "fullEn": "GCP Certificate",
    "fullZh": "GCP证书",
    "definitionEn": "A certificate indicating completion of Good Clinical Practice training. Often required for clinical trial personnel.",
    "definitionZh": "完成药物临床试验质量管理规范培训的证明文件。临床试验人员通常需要提供。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CITI",
    "fullEn": "Collaborative Institutional Training Initiative",
    "fullZh": "CITI培训",
    "definitionEn": "An online training program for human subjects research protection, often required for clinical trial personnel in the US and international studies.",
    "definitionZh": "人体受试者研究保护在线培训项目，美国和国际研究通常要求临床试验人员完成。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "HSP",
    "fullEn": "Human Subjects Protection",
    "fullZh": "人体受试者保护",
    "definitionEn": "Training and procedures to protect the rights, safety, and welfare of human research participants.",
    "definitionZh": "保护人类研究参与者权益、安全和福利的培训和程序。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "COI",
    "fullEn": "Conflict of Interest",
    "fullZh": "利益冲突",
    "definitionEn": "A situation where personal interests may potentially influence professional judgment. Investigators and study personnel must disclose any COI.",
    "definitionZh": "个人利益可能影响专业判断的情况。研究者和试验人员必须披露任何利益冲突。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FD",
    "fullEn": "Financial Disclosure",
    "fullZh": "财务披露",
    "definitionEn": "A document disclosing any financial interests related to the clinical trial. Required for investigators in FDA-regulated studies.",
    "definitionZh": "披露与临床试验相关的任何财务利益的文件。FDA监管的研究要求研究者提供。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "FMV",
    "fullEn": "Fair Market Value",
    "fullZh": "公允价值",
    "definitionEn": "The reasonable price for services rendered in a clinical trial, used for consultant fees and site payments to avoid undue influence.",
    "definitionZh": "临床试验中服务的合理价格，用于顾问费和中心付款以避免不当影响。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "1572",
    "fullEn": "FDA Form 1572",
    "fullZh": "FDA 1572表",
    "definitionEn": "Statement of Investigator form required for investigators participating in FDA-regulated clinical trials. Officially known as Form FDA 1572.",
    "definitionZh": "FDA监管的临床试验中研究者必须提交的研究者声明表。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LOI",
    "fullEn": "Letter of Intent",
    "fullZh": "意向书",
    "definitionEn": "A preliminary agreement outlining the intent to enter into a formal contract, often used in site selection or CRO engagement.",
    "definitionZh": "概述签订正式合同意向的初步协议，常用于中心选择或CRO合作。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SOW",
    "fullEn": "Statement of Work",
    "fullZh": "工作说明书",
    "definitionEn": "A document that defines the scope, deliverables, timeline, and responsibilities for a project or service.",
    "definitionZh": "定义项目或服务的范围、交付物、时间表和职责的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MSA",
    "fullEn": "Master Service Agreement",
    "fullZh": "主服务协议",
    "definitionEn": "A framework agreement that sets standard terms for future work orders or projects between two parties.",
    "definitionZh": "设定双方未来工作单或项目标准条款的框架协议。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "WO",
    "fullEn": "Work Order",
    "fullZh": "工作单",
    "definitionEn": "A document specifying the detailed scope and cost for a specific task under a master service agreement.",
    "definitionZh": "在主服务协议下指定具体任务详细范围和费用的文件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "PO",
    "fullEn": "Purchase Order",
    "fullZh": "采购订单",
    "definitionEn": "A commercial document issued by a buyer to a seller indicating types, quantities, and agreed prices for products or services.",
    "definitionZh": "买方向卖方发出的商业文件，说明产品或服务的类型、数量和商定价格。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CDISC",
    "fullEn": "Clinical Data Interchange Standards Consortium",
    "fullZh": "临床数据交换标准协会",
    "definitionEn": "An organization that develops global standards for clinical trial data. FDA and PMDA require CDISC standards for submissions.",
    "definitionZh": "制定临床试验数据全球标准的组织。FDA和PMDA要求提交数据符合CDISC标准。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SDTM",
    "fullEn": "Study Data Tabulation Model",
    "fullZh": "研究数据列表模型",
    "definitionEn": "A CDISC standard for organizing and formatting clinical trial data for regulatory submissions.",
    "definitionZh": "用于组织临床试验数据以供监管提交的CDISC标准。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "ADaM",
    "fullEn": "Analysis Data Model",
    "fullZh": "分析数据模型",
    "definitionEn": "A CDISC standard for organizing analysis datasets and related metadata for clinical trial reporting.",
    "definitionZh": "用于组织临床试验报告分析数据集和相关元数据的CDISC标准。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "eCTD",
    "fullEn": "Electronic Common Technical Document",
    "fullZh": "电子通用技术文档",
    "definitionEn": "The standard format for electronic regulatory submissions, accepted by FDA, EMA, PMDA, and other regulatory agencies.",
    "definitionZh": "电子监管提交的标准格式，FDA、EMA、PMDA等监管机构接受。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CDASH",
    "fullEn": "Clinical Data Acquisition Standards Harmonization",
    "fullZh": "临床数据获取标准协调",
    "definitionEn": "A CDISC standard for data collection in clinical trials, designed to be compatible with SDTM.",
    "definitionZh": "临床试验数据收集的CDISC标准，设计上与SDTM兼容。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Onc",
    "fullEn": "Oncology",
    "fullZh": "肿瘤学",
    "definitionEn": "The branch of medicine dealing with the prevention, diagnosis, and treatment of cancer.",
    "definitionZh": "医学的一个分支，涉及癌症的预防、诊断和治疗。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "CNS",
    "fullEn": "Central Nervous System",
    "fullZh": "中枢神经系统",
    "definitionEn": "The part of the nervous system consisting of the brain and spinal cord.",
    "definitionZh": "神经系统的一部分，由大脑和脊髓组成。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Paed",
    "fullEn": "Paediatric",
    "fullZh": "儿科",
    "definitionEn": "Relating to the medical care of infants, children, and adolescents.",
    "definitionZh": "与婴儿、儿童和青少年的医疗护理相关。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "ID",
    "fullEn": "Infectious Disease",
    "fullZh": "感染性疾病",
    "definitionEn": "Diseases caused by pathogenic microorganisms, such as bacteria, viruses, parasites, or fungi.",
    "definitionZh": "由细菌、病毒、寄生虫或真菌等病原微生物引起的疾病。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Cardio",
    "fullEn": "Cardiovascular",
    "fullZh": "心血管",
    "definitionEn": "Relating to the heart and blood vessels. A common therapeutic area in clinical trials.",
    "definitionZh": "与心脏和血管相关。临床试验中常见的治疗领域。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "Rare",
    "fullEn": "Rare Disease",
    "fullZh": "罕见病",
    "definitionEn": "A disease that affects a small percentage of the population. Different regions have different prevalence thresholds.",
    "definitionZh": "影响人口比例很小的疾病。不同地区有不同的患病率阈值。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "OD",
    "fullEn": "Orphan Drug",
    "fullZh": "孤儿药",
    "definitionEn": "A drug developed to treat rare diseases. Orphan drug designation provides regulatory incentives.",
    "definitionZh": "为治疗罕见病而开发的药物。孤儿药认定提供监管激励。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "GMP",
    "fullEn": "Good Manufacturing Practice",
    "fullZh": "药品生产质量管理规范",
    "definitionEn": "Standards for the manufacturing of pharmaceutical products to ensure quality and safety. Clinical trial supplies must be manufactured according to GMP.",
    "definitionZh": "药品生产的标准，确保质量和安全。临床试验用药必须按照GMP生产。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SC",
    "fullEn": "Study Coordinator",
    "fullZh": "研究协调员",
    "definitionEn": "A person who coordinates the day-to-day activities of a clinical trial at the site. Also known as CRC (Clinical Research Coordinator).",
    "definitionZh": "在中心协调临床试验日常活动的人员。也称CRC（临床研究协调员）。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "AdCo",
    "fullEn": "Adjudication Committee",
    "fullZh": "裁决委员会",
    "definitionEn": "A committee that independently reviews and classifies clinical events, often used in cardiovascular and oncology trials.",
    "definitionZh": "独立审查和分类临床事件的委员会，常用于心血管和肿瘤试验。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "IM",
    "fullEn": "Investigator Meeting",
    "fullZh": "研究者会议",
    "definitionEn": "A meeting held before or during a clinical trial to train investigators and discuss trial procedures.",
    "definitionZh": "在临床试验开始前或期间召开的研究者培训和试验程序讨论会议。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "TM",
    "fullEn": "Training Material",
    "fullZh": "培训材料",
    "definitionEn": "Documents and presentations used for training clinical trial personnel.",
    "definitionZh": "用于培训临床试验人员的文件和演示材料。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "SOC",
    "fullEn": "System Organ Class",
    "fullZh": "系统器官分类",
    "definitionEn": "The highest level in MedDRA coding hierarchy, used to classify adverse events by body system.",
    "definitionZh": "MedDRA编码层级中的最高级别，用于按身体系统分类不良事件。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "LLT",
    "fullEn": "Lowest Level Term",
    "fullZh": "低位语",
    "definitionEn": "The most specific level in MedDRA coding hierarchy, representing a single medical concept.",
    "definitionZh": "MedDRA编码层级中最具体的级别，代表单一医学概念。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "MedDRA",
    "fullEn": "Medical Dictionary for Regulatory Activities",
    "fullZh": "监管活动医学词典",
    "definitionEn": "A standardized medical terminology used for coding adverse events, diseases, and other medical conditions in clinical trials.",
    "definitionZh": "用于临床试验中不良事件、疾病和其他医学状况编码的标准化医学术语。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  },
  {
    "abbr": "WHODrug",
    "fullEn": "WHO Drug Dictionary",
    "fullZh": "WHO药物词典",
    "definitionEn": "A standardized dictionary for coding concomitant medications in clinical trials.",
    "definitionZh": "用于临床试验中合并用药编码的标准化词典。（来源：互联网公开行业经验，仅供参考）",
    "category": "行业通用",
    "source": "互联网公开行业经验",
    "sourceType": "行业通用"
  }
];