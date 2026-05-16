# 知闻药观工具箱

一个微信小程序项目，用于临床研究、药物安全、标准术语与实用知识工具检索。当前已实现的核心功能包括 **CTCAE v6.0 不良事件分级检索**、**临床试验缩略语词典** 和 **人格小测**。

## 项目定位

本工具箱仅用于学习、资料检索与工作参考，不构成医学诊断、治疗建议或临床决策依据。

当前版本不做自动医学判断。用户进入 CTCAE v6.0 检索模块后，可以输入关键词、中文描述、英文描述或实验室指标异常，小程序会返回可能相关的 CTCAE 条目，并完整展示该条目的 Grade 1-5 分级定义，由用户结合原始 CTCAE 标准和专业判断自行确认。

缩略语词典模块用于查询临床试验、GCP、肿瘤学、统计学、实验室检查和行业通用缩略语，帮助用户快速完成中英文术语对照和概念理解。

人格小测模块提供通用 16 型人格偏好测试和临研人 SBTI 状态测试。测试题库、计分和结果解释全部本地化，不上传答题内容，不保存用户记录。

## 已实现功能

### CTCAE v6.0 检索

- ✅ 支持中文术语搜索，例如：贫血
- ✅ 支持英文术语搜索，例如：Anemia
- ✅ 支持 MedDRA code 搜索，例如：10002272
- ✅ 支持 SOC 分类搜索
- ✅ 支持 Grade 描述关键词搜索，例如：输血、Hgb、血红蛋白
- ✅ 支持实验室指标搜索，例如：血氧、ALT、血红蛋白
- ✅ 搜索结果中英文并列显示
- ✅ 详情页展示中文在上、英文在下的 Grade 1-5 对照
- ✅ 数据本地化，不需要服务器
- ✅ 不保存用户输入
- ✅ 不提供诊断、治疗或自动分级建议

### 缩略语词典

- ✅ 支持缩略语搜索，例如：AE、SAE、PI、GCP
- ✅ 支持中文全称、英文全称和定义关键词搜索
- ✅ 支持按分类筛选：GCP法规、肿瘤学、统计学、实验室检查、行业通用
- ✅ 详情页展示中英文全称、定义、来源和相关术语
- ✅ 数据本地化，不需要服务器
- ✅ 不保存用户输入

### 人格小测

- ✅ 16 型人格偏好测试：32 道原创通用题，本地计分，完整结果报告
- ✅ 临研人 SBTI：30 道临床研究场景题，输出临研人状态码
- ✅ 结果页展示维度画像、报告解读、关键词和免责声明
- ✅ 支持生成、预览和保存结果分享图
- ✅ 不上传答题内容
- ✅ 结果页提供官方 MBTI 相关入口链接，便于用户查看正式测评
- ✅ 不构成官方 MBTI 测评、心理诊断或职业决策依据

16 型人格偏好测试说明：题目与报告为本项目原创整理，用于免费自我观察，不复制官方 MBTI 题库或付费报告。正式 MBTI 评估请参考 [MBTIonline](https://www.mbtionline.com/en-US) 或 [The Myers-Briggs Company](https://www.themyersbriggs.com/)。

## 规划中功能

- 更多临床研究常用工具：如 MedDRA 术语辅助、实验室指标速查、法规检查清单等

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/你的用户名/zhiwen-yaoguan-toolkit.git
cd zhiwen-yaoguan-toolkit
```

### 2. 配置 AppID

复制示例配置文件，并填入你的小程序 AppID：

```bash
cp project.config.example.json project.config.json
```

编辑 `project.config.json`，将 `appid` 字段修改为你的小程序 AppID：

```json
{
  "appid": "你的小程序AppID"
}
```

### 3. 导入项目

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开微信开发者工具
3. 选择「导入项目」
4. 选择项目目录
5. 填写 AppID

### 4. 编译运行

导入后，微信开发者工具会自动编译项目，你可以在模拟器中预览效果。

## 目录结构

```text
ctcae-miniprogram/
├── app.js                 # 小程序入口逻辑
├── app.json               # 小程序页面和窗口配置
├── app.wxss               # 全局样式
├── project.config.json    # 项目配置（需自行创建）
├── project.config.example.json  # 项目配置示例
├── sitemap.json           # 小程序索引配置
├── assets/                # 静态资源
│   └── logo.png           # Logo 图片
├── docs/                  # 文档
│   └── 需求说明.md         # 产品需求文档
├── pages/                 # 主包页面
│   └── index/             # 工具箱首页
├── packages/              # 分包
│   ├── ctcae/             # CTCAE 检索模块
│   │   ├── data/          # 本地数据
│   │   │   └── ctcae.js   # CTCAE v6.0 数据
│   │   ├── pages/         # 页面
│   │   │   ├── ctcae/     # 检索页
│   │   │   └── detail/    # 详情页
│   │   └── utils/         # 工具函数
│   │       └── search.js  # 搜索逻辑
│   ├── gcp/               # 缩略语词典模块
│   │   ├── data/          # 本地数据
│   │   │   └── glossary.js
│   │   ├── pages/         # 词典列表页和详情页
│   │   └── utils/         # 搜索、分类和详情查询逻辑
│   └── personality/       # 人格小测模块
│       ├── data/          # MBTI/SBTI 本地题库和结果文案
│       ├── pages/         # 测试首页、答题页和结果页
│       └── utils/         # 计分和答题编码逻辑
└── scripts/               # 脚本
    └── build_ctcae_data.py  # 数据构建脚本
```

## 数据来源

- **CTCAE 英文数据**：CTCAE v6.0 公开标准，由美国国家癌症研究所（NCI）发布
- **CTCAE 中文数据**：基于公开资料整理，仅供参考
- **缩略语数据**：整理自 ICH、FDA、EMA、RECIST、CTCAE 等公开资料，以及部分行业通用术语

**重要说明：** CTCAE v6.0 官方版本为英文。本工具中的中文内容基于公开资料整理，仅供参考，以英文版本为准。

## 数据构建

如果你需要更新 CTCAE 数据，可以使用以下步骤：

1. 准备中英文 Excel 文件
2. 运行构建脚本：

```bash
python scripts/build_ctcae_data.py
```

## 技术栈

- 微信小程序原生框架
- 纯前端实现，无需后端服务
- 本地数据存储

## 合规声明

本工具仅用于资料检索、学习与工作参考，不构成医学诊断、治疗建议、临床决策依据或心理测评结论。

本工具内容仅代表个人学习、观察与思考，不代表任何任职单位、合作机构或相关组织立场。

最终术语选择、分级判断和专业解释请结合原始文献、适用法规和专业判断。

## 开源协议

本项目采用 MIT 协议开源。

## 贡献

欢迎提交 Issue 和 Pull Request！

如果你在工作中遇到其他痛点，或者有好的工具想法，欢迎反馈。

## 相关链接

- [CTCAE v6.0 官方文档](https://ctep.cancer.gov/protocolDevelopment/electronic_applications/ctc.htm)
- [MedDRA 官方网站](https://www.meddra.org/)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)

---

> 知闻药观小工具
> 本工具免费开放，供学习交流使用
