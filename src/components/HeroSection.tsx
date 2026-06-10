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
                  
                  {/* Step 1: Messy Inputs */}
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-56 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-sm font-bold text-slate-700 mb-4 text-center border-b border-slate-100 pb-3">散落的人工作業</div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0"><MessageCircle className="w-4 h-4 text-green-600" /></div>
                        <span className="text-xs font-bold text-slate-600">WhatsApp 詢問</span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0"><FileText className="w-4 h-4 text-purple-600" /></div>
                        <span className="text-xs font-bold text-slate-600">紙本 / 散落表單</span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center shrink-0"><Users className="w-4 h-4 text-orange-600" /></div>
                        <span className="text-xs font-bold text-slate-600">跨部門反覆溝通</span>
                      </div>
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
                      <div className="text-xl md:text-2xl font-black text-slate-800 mb-3 tracking-tight">Optimaks 流程梳理</div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2.5 py-1 rounded-md text-[10px] font-bold">釐清痛點</span>
                        <span className="bg-orange-50 text-orange-600 border border-orange-100 px-2.5 py-1 rounded-md text-[10px] font-bold">n8n 自動化</span>
                        <span className="bg-teal-50 text-teal-600 border border-teal-100 px-2.5 py-1 rounded-md text-[10px] font-bold">AI 整合</span>
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
                  <div className="bg-white p-5 md:p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-56 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-sm font-bold text-brand-blue mb-4 text-center border-b border-slate-100 pb-3">高效自動化運作</div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 bg-blue-50/50 p-2.5 rounded-xl border border-blue-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0"><Database className="w-4 h-4 text-blue-600" /></div>
                        <span className="text-xs font-bold text-blue-900">單一事實資料庫</span>
                      </div>
                      <div className="flex items-center gap-3 bg-teal-50/50 p-2.5 rounded-xl border border-teal-100">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center shrink-0"><BarChart3 className="w-4 h-4 text-teal-600" /></div>
                        <span className="text-xs font-bold text-teal-900">即時決策儀表板</span>
                      </div>
                      <div className="flex items-center gap-3 bg-green-50/50 p-2.5 rounded-xl border border-green-100">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0"><Zap className="w-4 h-4 text-green-600" /></div>
                        <span className="text-xs font-bold text-green-900">無縫自動化排程</span>
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
