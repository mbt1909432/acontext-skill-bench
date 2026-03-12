# Acontext Skill Memory Benchmark

> 技能记忆系统评估基准 - 验证 Acontext 技能记忆的有效性

## 项目简介

本项目旨在通过 Benchmark 对比实验，验证 Acontext 技能记忆系统能够有效提升 AI Agent 的任务执行能力。

### 对比实验设计

| | 对照组 (Baseline) | 实验组 (Acontext) |
|---|---|---|
| 方法 | 传统 ReAct | 集成 Acontext 技能记忆 |
| 记忆系统 | 无 | 有 |
| 预期结果 | 表现稳定 | 表现随轮次提升 |

## 数据来源

采用 **ETO 专家轨迹** (ACL 2024) 作为基准数据：

| 文件 | 大小 | 轨迹数量 | 任务类型 |
|------|------|----------|----------|
| alfworld_sft.json | 18.5 MB | 3,119 条 | 家务任务 |
| sciworld_sft.json | 13.4 MB | - | 科学实验 |
| webshop_sft.json | 10.7 MB | - | 电商购物 |

## 项目进度

- [x] Clone ETO 仓库
- [x] 下载专家轨迹数据
- [x] 分析轨迹数据格式
- [x] 编写格式转换脚本
- [ ] 上传数据到 Acontext
- [ ] 设计对比实验
- [ ] 运行评估
- [ ] 撰写实验报告

## 技术栈

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Deployment**: Vercel
- **API**: Acontext API (https://api.acontext.app/api/v1)

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 参考链接

- [ETO GitHub](https://github.com/Yifan-Song793/ETO)
- [ETO 论文](https://arxiv.org/abs/2403.02502)
- [ReAct GitHub](https://github.com/ysymyth/ReAct)
- [ALFWorld](https://github.com/alfworld/alfworld)

---

*文档版本: v1.0 | 日期: 2026-03-12*
