# 知闻药观工具箱

一个微信小程序项目，用于临床研究、药物安全与标准术语相关资料检索。当前已上线的核心功能是 **CTCAE v6.0 不良事件分级检索**。

## 项目定位

本工具箱仅用于学习、资料检索与工作参考，不构成医学诊断、治疗建议或临床决策依据。

第一版不做自动分级判断。用户进入 CTCAE v6.0 检索模块后，可以输入关键词、中文描述、英文描述或实验室指标异常，小程序会返回可能相关的 CTCAE 条目，并完整展示该条目的 Grade 1-5 分级定义，由用户结合原始 CTCAE 标准和专业判断自行确认。

## 功能特点

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
│   └── ctcae/             # CTCAE 检索模块
│       ├── data/          # 本地数据
│       │   └── ctcae.js   # CTCAE v6.0 数据
│       ├── pages/         # 页面
│       │   ├── ctcae/     # 检索页
│       │   └── detail/    # 详情页
│       └── utils/         # 工具函数
│           └── search.js  # 搜索逻辑
└── scripts/               # 脚本
    └── build_ctcae_data.py  # 数据构建脚本
```

## 数据来源

- **英文数据**：CTCAE v6.0 公开标准，由美国国家癌症研究所（NCI）发布
- **中文数据**：基于公开资料整理，仅供参考

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

本工具仅用于 CTCAE v6.0 不良事件分级检索、学习与工作参考，不构成医学诊断、治疗建议或临床决策依据。

本工具内容仅代表个人学习、观察与思考，不代表任何任职单位、合作机构或相关组织立场。

最终术语选择和分级判断请结合原始 CTCAE 文献和专业判断。

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
