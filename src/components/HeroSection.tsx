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

                {/* Pipeline Container */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 w-full">
                  
                  {/* Step 1: Messy Inputs (9 Pain Points) */}
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-64 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-sm font-bold text-slate-700 mb-4 text-center border-b border-slate-100 pb-3">企業常見的流程卡點</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        { text: '太多 Paperwork', color: 'text-blue-600 bg-blue-50 border-blue-100' },
                        { text: '詢價容易漏', color: 'text-orange-600 bg-orange-50 border-orange-100' },
                        { text: '報價太慢', color: 'text-red-600 bg-red-50 border-red-100' },
                        { text: '排程很亂', color: 'text-purple-600 bg-purple-50 border-purple-100' },
                        { text: '工單追蹤困難', color: 'text-teal-600 bg-teal-50 border-teal-100' },
                        { text: '付款追蹤困難', color: 'text-green-600 bg-green-50 border-green-100' },
                        { text: '資料太分散', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                        { text: '人為輸入錯誤', color: 'text-amber-600 bg-amber-50 border-amber-100' },
                        { text: '跨部門溝通斷層', color: 'text-rose-600 bg-rose-50 border-rose-100' },
                      ].map((item, i) => (
                        <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${item.color}`}>
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-slate-300 lg:-rotate-90 lg:hidden flex justify-center py-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden lg:block text-slate-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 2: Optimization Engine */}
                  <div className="relative w-full lg:w-auto">
                    <div className="absolute -inset-4 bg-brand-blue/10 rounded-[2.5rem] blur-xl animate-pulse"></div>
                    <div className="bg-white border-2 border-brand-blue/20 p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-brand-blue/10 relative z-10 flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-default w-full">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mb-5 shadow-lg text-white">
                        <Settings className="w-8 h-8 animate-[spin_4s_linear_infinite]" />
                      </div>
                      <div className="text-xl md:text-2xl font-black text-slate-800 mb-4 tracking-tight">Optimaks 流程梳理</div>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                          <span className="text-xs font-bold text-slate-600">診斷與梳理痛點</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Database className="w-4 h-4 text-orange-500" />
                          <span className="text-xs font-bold text-slate-600">跨系統 API 串接</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Zap className="w-4 h-4 text-teal-500" />
                          <span className="text-xs font-bold text-slate-600">AI 智能輔助決策</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Settings className="w-4 h-4 text-indigo-500" />
                          <span className="text-xs font-bold text-slate-600">零時差自動化執行</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-slate-300 lg:-rotate-90 lg:hidden flex justify-center py-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden lg:block text-slate-300">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 3: Streamlined Output */}
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-64 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-sm font-bold text-brand-blue mb-4 text-center border-b border-slate-100 pb-3">導入後的具體成效</div>
                    <div className="flex flex-col gap-3">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-xl shadow-lg shadow-blue-500/30 flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg shrink-0"><Zap className="w-5 h-5 text-white" /></div>
                        <div className="font-bold text-sm tracking-wide">效率激增，秒速完成</div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-3 rounded-xl shadow-lg shadow-teal-500/30 flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg shrink-0"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                        <div className="font-bold text-sm tracking-wide">告別重複的手工作業</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-3 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg shrink-0"><BarChart3 className="w-5 h-5 text-white" /></div>
                        <div className="font-bold text-sm tracking-wide">資料集中，決策清晰</div>
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
