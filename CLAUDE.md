# Acontext Skill Memory Benchmark - 项目规范

## 项目说明

这是 Skill Memory Benchmark 的文档展示项目，用于向老板/团队展示项目进度和方案设计。

## 重要规则

### 文档更新流程 (必须遵守!)

1. **所有文档更新必须通过 Next.js 项目管理**
   - 主文档位置: `app/page.tsx`
   - 使用 Tailwind CSS 样式
   - 四个 Tab: 项目概览、ETO 介绍、数据资源、实验设计

2. **更新网页时同步更新 Markdown 导出**
   - `app/page.tsx` 中的 `generateMarkdown()` 函数
   - 确保网页内容和导出的 Markdown 内容一致

3. **每次更新后必须推送到 GitHub**
   ```bash
   cd "C:\claude_agent_sdk_lab\skill-benchmark\acontext-skill-bench"
   git add .
   git commit -m "描述更新内容"
   git push
   ```

4. **Vercel 会自动部署**
   - 推送后 Vercel 自动触发部署
   - 约 1-2 分钟后生效

### 更新检查清单

每次更新文档时检查：

- [ ] `app/page.tsx` - 网页内容已更新
- [ ] `generateMarkdown()` - Markdown 导出已同步
- [ ] `git push` - 已推送到 GitHub
- [ ] Vercel 部署成功

## 页面结构

| Tab | 内容 | 更新场景 |
|-----|------|----------|
| 项目概览 | 核心问题、对比设计、进度 | 进度变化时 |
| ETO 介绍 | ETO是什么、FAQ | 老板问问题时 |
| 数据资源 | 文件列表、格式、流程 | 数据变化时 |
| 实验设计 | 指标、Acontext、下一步 | 实验进展时 |

## 项目结构

```
acontext-skill-bench/
├── app/
│   ├── page.tsx          # 主页面 (核心文档 + Markdown导出)
│   ├── layout.tsx        # 布局
│   └── globals.css       # 全局样式
├── CLAUDE.md             # 本文件 (项目规范)
├── README.md             # GitHub 说明
└── package.json          # 依赖配置
```

## 关联资源

- **GitHub**: https://github.com/mbt1909432/acontext-skill-bench
- **Vercel**: 自动部署
- **数据目录**: `../方案A-ETO数据/`
- **上传脚本**: `../方案A-ETO数据/upload_to_acontext.py`

## 当前状态

- [x] 项目创建
- [x] 推送到 GitHub
- [x] ETO 介绍页面
- [x] 导出 Markdown 功能
- [ ] 部署到 Vercel
- [ ] 上传数据到 Acontext
- [ ] 运行实验
- [ ] 更新实验结果

## 数据统计 (2026-03-12)

| 指标 | 值 |
|------|-----|
| ALFWorld 轨迹 | 3,119 条 |
| 数据总量 | 42.6 MB |
| Benchmark 覆盖 | 3 个 |

---

*最后更新: 2026-03-12*
