import React from 'react';
import { Zap, ChevronRight, CheckCircle2, MessageCircle, FileText, Database, BarChart3, Settings, Users, PieChart, LineChart, Mail, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl xl:pr-12 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-1.5 h-5 bg-brand-green rounded-full"></div>
              <span className="text-sm font-bold text-slate-500 tracking-wide">先把流程理順，再讓科技幫你做得更有效率。</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.2] mb-6 tracking-tight">
              我們幫助中小企業<br />
              <span className="text-[#2563eb]">理順流程 × 整合科技 × 提升效率</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              結合 AI、n8n 與輕量系統整合，幫助你整理流程、串接工具、<br className="hidden sm:block" />
              減少重複人工作業，讓團隊專注在真正重要的事。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center lg:justify-start">
              <a href="#workflow-check" className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-600/30 w-full sm:w-auto">
                <Zap className="w-5 h-5 fill-current" /> 開始 1 分鐘流程檢查
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#2563eb] px-8 py-4 rounded-xl font-bold text-base transition-all border-2 border-blue-100 hover:border-blue-200 w-full sm:w-auto">
                了解我們怎麼做 <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {[
                { text: '專注中小企業', icon: CheckCircle2 },
                { text: '快速導入、見效快', icon: CheckCircle2 },
                { text: '量身打造、好維護', icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <div className="text-slate-400"><item.icon className="w-5 h-5" /></div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Clean Workflow Concept Diagram */}
          <div className="w-full mt-12 lg:mt-0">
            <div className="bg-slate-50/50 rounded-3xl p-6 md:p-8 lg:p-10 border border-slate-200/60 shadow-inner relative overflow-hidden">
              {/* Decorative background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-8">
                  <Settings className="w-4 h-4 text-brand-blue" />
                  <span className="text-sm font-bold text-slate-600">流程自動化概念</span>
                </div>

                {/* Pipeline Container - Horizontal Flow Restored */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-3 lg:gap-4 w-full">
                  
                  {/* Step 1: Messy Inputs (9 Pain Points) */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full xl:w-48 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-xs font-bold text-slate-700 mb-3 text-center border-b border-slate-100 pb-2 whitespace-nowrap">常見流程卡點</div>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {[
                        { text: '紙本滿天飛', color: 'text-blue-600 bg-blue-50 border-blue-100' },
                        { text: '容易漏單', color: 'text-orange-600 bg-orange-50 border-orange-100' },
                        { text: '報價太慢', color: 'text-red-600 bg-red-50 border-red-100' },
                        { text: '排程混亂', color: 'text-purple-600 bg-purple-50 border-purple-100' },
                        { text: '進度難追', color: 'text-teal-600 bg-teal-50 border-teal-100' },
                        { text: '請款延宕', color: 'text-green-600 bg-green-50 border-green-100' },
                        { text: '資料分散', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                        { text: '輸入錯誤', color: 'text-amber-600 bg-amber-50 border-amber-100' },
                        { text: '溝通斷層', color: 'text-rose-600 bg-rose-50 border-rose-100' },
                      ].map((item, i) => (
                        <span key={i} className={`text-[10px] font-bold px-1.5 py-1 rounded-md border ${item.color} whitespace-nowrap grow text-center`}>
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-slate-300 xl:-rotate-90 xl:hidden flex justify-center py-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden xl:block text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 2: Optimization Engine */}
                  <div className="relative w-full xl:w-56">
                    <div className="absolute -inset-4 bg-brand-blue/10 rounded-[2.5rem] blur-xl animate-pulse"></div>
                    <div className="bg-white border-2 border-brand-blue/20 p-5 md:p-6 rounded-[2rem] shadow-2xl shadow-brand-blue/10 relative z-10 flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-default w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mb-3 shadow-lg text-white">
                        <Settings className="w-6 h-6 animate-[spin_4s_linear_infinite]" />
                      </div>
                      <div className="text-lg font-black text-slate-800 mb-4 tracking-tight whitespace-nowrap text-center">Optimaks 流程梳理</div>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3 h-3 text-brand-blue shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">流程梳理</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Database className="w-3 h-3 text-orange-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">系統串接</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Zap className="w-3 h-3 text-teal-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">AI 協作</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-slate-300 xl:-rotate-90 xl:hidden flex justify-center py-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden xl:block text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 3: Streamlined Output */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full xl:w-48 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-xs font-bold text-brand-blue mb-3 text-center border-b border-slate-100 pb-2 whitespace-nowrap">導入成效</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">效率飆升</div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-2.5 rounded-xl shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">零重複做工</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2">
                        <BarChart3 className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">決策更清晰</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
