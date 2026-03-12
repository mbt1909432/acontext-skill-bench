# Acontext Skill Memory Benchmark - 项目规范

## 项目说明

这是 Skill Memory Benchmark 的文档展示项目，用于向老板/团队展示项目进度和方案设计。

## 重要规则

### 文档更新流程

1. **所有文档更新必须通过 Next.js 项目管理**
   - 文档位置: `app/page.tsx`
   - 使用 Tailwind CSS 样式
   - 三个 Tab: 项目概览、数据资源、实验设计

2. **每次更新后必须推送到 GitHub**
   ```bash
   git add .
   git commit -m "描述更新内容"
   git push
   ```

3. **Vercel 会自动部署**
   - 推送后 Vercel 自动触发部署
   - 约 1-2 分钟后生效

## 项目结构

```
acontext-skill-bench/
├── app/
│   ├── page.tsx          # 主页面 (核心文档)
│   ├── layout.tsx        # 布局
│   └── globals.css       # 全局样式
├── CLAUDE.md             # 本文件
├── README.md             # 项目说明
└── package.json          # 依赖配置
```

## 关联资源

- **GitHub**: https://github.com/mbt1909432/acontext-skill-bench
- **数据目录**: `../方案A-ETO数据/`
- **上传脚本**: `../方案A-ETO数据/upload_to_acontext.py`

## 当前状态

- [x] 项目创建
- [x] 推送到 GitHub
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
