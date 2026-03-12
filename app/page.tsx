'use client'

import { useState } from 'react'

// 数据统计
const stats = [
  { label: 'ALFWorld 轨迹', value: '3,119', unit: '条' },
  { label: '数据总量', value: '42.6', unit: 'MB' },
  { label: 'Benchmark 覆盖', value: '3', unit: '个' },
  { label: '格式兼容', value: '100', unit: '%' },
]

// 项目进度
const progress = [
  { task: 'Clone ETO 仓库', status: 'done', phase: '数据准备' },
  { task: '下载专家轨迹数据', status: 'done', phase: '数据准备' },
  { task: '分析轨迹数据格式', status: 'done', phase: '数据准备' },
  { task: '编写格式转换脚本', status: 'done', phase: '数据处理' },
  { task: '上传数据到 Acontext', status: 'pending', phase: '数据处理' },
  { task: '设计对比实验', status: 'pending', phase: '实验' },
  { task: '运行评估', status: 'pending', phase: '实验' },
  { task: '撰写实验报告', status: 'pending', phase: '报告' },
]

// 数据文件
const dataFiles = [
  { name: 'alfworld_sft.json', size: '18.5 MB', count: '3,119 条', type: '家务任务' },
  { name: 'sciworld_sft.json', size: '13.4 MB', count: '-', type: '科学实验' },
  { name: 'webshop_sft.json', size: '10.7 MB', count: '-', type: '电商购物' },
]

// 评估指标
const metrics = [
  { name: '任务成功率', desc: '完成的任务占总任务的比例', expected: '实验组 > 对照组' },
  { name: '平均执行步数', desc: '完成任务所需的动作数', expected: '实验组更少' },
  { name: '学习曲线', desc: '多轮后性能提升幅度', expected: '实验组持续上升' },
  { name: '技能复用率', desc: '调用已学技能的比例', expected: '随轮次增加' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'experiment'>('overview')

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Skill Memory Benchmark
            </h1>
            <p className="text-xl text-purple-100 mb-6">
              Acontext 技能记忆系统评估基准
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>方案已选定: ETO 专家轨迹</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            {[
              { id: 'overview', label: '项目概览' },
              { id: 'data', label: '数据资源' },
              { id: 'experiment', label: '实验设计' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-violet-600 text-violet-600 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Stats Grid */}
            <section>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold gradient-text">{stat.value}</span>
                      <span className="text-gray-500">{stat.unit}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Problem Statement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">核心问题</h2>
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 rounded-r-xl p-6">
                <p className="text-lg text-gray-700">
                  如何证明 <span className="font-semibold text-violet-600">Acontext 技能记忆系统</span> 能够有效提升 AI Agent 的任务执行能力？
                </p>
              </div>
            </section>

            {/* Comparison */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">对比实验设计</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Baseline */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700">对照组 (Baseline)</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      使用传统 ReAct 方法
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      无技能记忆系统
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      每次任务从零开始
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-gray-500 italic">预期：表现稳定，不随时间提升</span>
                    </li>
                  </ul>
                </div>

                {/* Experimental */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-violet-700">实验组 (Acontext)</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      集成 Acontext 技能记忆
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      从历史轨迹学习技能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      执行时检索相关技能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      <span className="text-violet-600 font-medium">预期：表现随轮次显著提升</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Progress */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">项目进度</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">阶段</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">任务</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">状态</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {progress.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-500">{item.phase}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{item.task}</td>
                        <td className="px-6 py-4">
                          {item.status === 'done' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              已完成
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              待执行
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Data Tab */}
        {activeTab === 'data' && (
          <div className="space-y-12">
            {/* Data Source */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">数据来源</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">ETO 专家轨迹</h3>
                    <p className="text-gray-600 mt-1">
                      来自 ACL 2024 论文 <em>Exploration-based Trajectory Optimization</em>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">格式统一</span>
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">可直接使用</span>
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">多 Benchmark 覆盖</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Files */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">已获取数据</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">文件名</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">大小</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">轨迹数量</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">任务类型</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {dataFiles.map((file) => (
                      <tr key={file.name} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <code className="text-sm bg-gray-100 px-2 py-1 rounded">{file.name}</code>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{file.size}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{file.count}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">{file.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Data Format */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">轨迹数据格式</h2>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`{
  "id": "alfworld_0",
  "game_file": "train/pick_and_place_simple-...",
  "conversations": [
    {"from": "human", "value": "任务描述..."},
    {"from": "gpt", "value": "OK"},
    {"from": "human", "value": "环境观察..."},
    {"from": "gpt", "value": "Thought: 思考...\\nAction: 动作..."}
  ]
}`}
                </pre>
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-medium text-blue-900">human</p>
                  <p className="text-blue-700 text-sm mt-1">环境观察 / 任务描述</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-medium text-purple-900">gpt</p>
                  <p className="text-purple-700 text-sm mt-1">Agent 的思考和行动 (Thought + Action)</p>
                </div>
              </div>
            </section>

            {/* Data Flow */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">数据处理流程</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {[
                    { icon: '📥', label: 'ETO 专家轨迹', sub: 'JSON 格式' },
                    { icon: '🔄', label: '格式转换', sub: 'human/gpt → user/assistant' },
                    { icon: '☁️', label: 'Acontext SDK', sub: '上传到技能记忆系统' },
                    { icon: '🧠', label: '技能学习', sub: '自动提取可复用技能' },
                    { icon: '📝', label: 'SKILL.md', sub: '结构化技能文件' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center text-2xl mx-auto">
                          {step.icon}
                        </div>
                        <p className="mt-2 font-medium text-gray-900">{step.label}</p>
                        <p className="text-xs text-gray-500">{step.sub}</p>
                      </div>
                      {idx < 4 && (
                        <svg className="hidden md:block w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Experiment Tab */}
        {activeTab === 'experiment' && (
          <div className="space-y-12">
            {/* Metrics */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">评估指标</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover">
                    <h3 className="font-semibold text-gray-900">{metric.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{metric.desc}</p>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-500">预期结果：</span>
                      <span className="text-sm font-medium text-violet-600">{metric.expected}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Acontext Integration */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Acontext 集成</h2>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50 w-1/3">API Endpoint</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <code className="bg-gray-100 px-2 py-1 rounded">https://api.acontext.app/api/v1</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">SDK</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        <code className="bg-gray-100 px-2 py-1 rounded">acontext (Python)</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">认证方式</td>
                      <td className="px-6 py-4 text-sm text-gray-900">API Key</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Next Steps */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">下一步行动</h2>
              <div className="space-y-4">
                {[
                  { num: 1, title: '上传数据', desc: '使用 upload_to_acontext.py 脚本将轨迹上传到 Acontext' },
                  { num: 2, title: '触发学习', desc: 'Acontext 自动从轨迹中提取技能' },
                  { num: 3, title: '运行对比', desc: '在相同任务上对比有无 Acontext 的 Agent 表现' },
                  { num: 4, title: '分析结果', desc: '收集指标，验证技能记忆系统的有效性' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="w-8 h-8 bg-violet-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">参考链接</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'ETO GitHub', url: 'https://github.com/Yifan-Song793/ETO' },
                  { name: 'ETO 论文', url: 'https://arxiv.org/abs/2403.02502' },
                  { name: 'ReAct GitHub', url: 'https://github.com/ysymyth/ReAct' },
                  { name: 'ALFWorld', url: 'https://github.com/alfworld/alfworld' },
                ].map((ref) => (
                  <a
                    key={ref.name}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-violet-300 transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-gray-700">{ref.name}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500 text-sm">
          <p>Skill Memory Benchmark 技术方案 | Acontext 技能记忆系统</p>
          <p className="mt-1">文档版本: v1.0 | 日期: 2026-03-12</p>
        </div>
      </footer>
    </main>
  )
}
