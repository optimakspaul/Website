import React from 'react';
import { Zap, ChevronRight, CheckCircle2, MessageCircle, FileText, Database, BarChart3, Settings, Users, PieChart, LineChart } from 'lucide-react';

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
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 lg:gap-8 w-full">
                  
                  {/* Step 1: Messy Inputs */}
                  <div className="bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full md:w-auto relative group hover:-translate-y-1 transition-transform">
                    <div className="text-xs font-bold text-slate-400 mb-4 text-center">既有分散工具</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-500"><MessageCircle className="w-5 h-5" /></div>
                        <span className="text-[10px] font-bold text-slate-500">WhatsApp</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500"><Mail className="w-5 h-5" /></div>
                        <span className="text-[10px] font-bold text-slate-500">Gmail</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500"><FileText className="w-5 h-5" /></div>
                        <span className="text-[10px] font-bold text-slate-500">表單</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600"><Calendar className="w-5 h-5" /></div>
                        <span className="text-[10px] font-bold text-slate-500">Calendar</span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-slate-300 md:-rotate-90 lg:rotate-0 flex justify-center md:block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 2: Automation Engine */}
                  <div className="relative w-full md:w-auto">
                    <div className="absolute -inset-4 bg-orange-500/20 rounded-[2.5rem] blur-xl animate-pulse"></div>
                    <div className="bg-white border-2 border-orange-200 p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-orange-500/20 relative z-10 flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-default w-full">
                      <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2 tracking-tighter">n8n</div>
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-current" /> 自動化大腦
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-slate-300 md:-rotate-90 lg:rotate-0 flex justify-center md:block">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 3: Streamlined Output */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <div className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-500/10 border border-blue-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                        <Database className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">Step 1</div>
                        <div className="font-bold text-slate-800 text-sm">集中資料庫</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-xl shadow-teal-500/10 border border-teal-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-400">Step 2</div>
                        <div className="font-bold text-slate-800 text-sm">分析儀表板</div>
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
