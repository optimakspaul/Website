import React from 'react';
import { CheckCircle2, ChevronRight, MessageCircle, FileText, Database, BarChart3, LayoutDashboard, Mail, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light text-brand-blue font-medium text-sm mb-6 border border-brand-blue/10">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              Workflow Optimization for SMEs
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-dark leading-[1.15] mb-6">
              先把流程理順，<br />
              再讓科技幫你<span className="gradient-text">做得更有效率</span>。
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Optimaks 協助中小企業梳理既有作業流程，整合 AI、自動化工具與輕量系統，減少重複人工與流程遺漏，讓團隊工作更清楚，營運更順暢。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#workflow-check" className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-green/30 hover:-translate-y-1 w-full sm:w-auto">
                開始 1 分鐘流程檢查 <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all border border-slate-200 hover:border-slate-300 w-full sm:w-auto">
                了解我們怎麼做
              </a>
            </div>
            
            <p className="text-sm text-slate-500 mb-6 font-medium">不用開會，不用寫長文。點選幾個選項，快速找到你的流程卡點。</p>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                { text: '不用開會', icon: CheckCircle2 },
                { text: '不用寫長文', icon: CheckCircle2 },
                { text: '快速找到流程卡點', icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                  <item.icon className="w-4 h-4 text-brand-green" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Hidden on smaller screens, simplified on mobile but let's keep it clean */}
          <div className="relative mt-8 lg:mt-0">
            {/* Desktop Visual */}
            <div className="hidden lg:block">
              <div className="glass-card p-6 border border-white/60 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-teal/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl"></div>
                
                {/* Workflow Integration Diagram */}
                <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm"><MessageCircle className="w-6 h-6" /></div>
                      <span className="text-xs font-semibold text-slate-500">WhatsApp</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><FileText className="w-6 h-6" /></div>
                      <span className="text-xs font-semibold text-slate-500">表單</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shadow-sm font-black text-xs">n8n</div>
                      <span className="text-xs font-semibold text-slate-500">自動化</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-sm"><Database className="w-6 h-6" /></div>
                      <span className="text-xs font-semibold text-slate-500">資料庫</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white shadow-sm"><BarChart3 className="w-6 h-6" /></div>
                      <span className="text-xs font-semibold text-slate-500">Dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Card Mockup */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                    <h3 className="font-bold flex items-center gap-2 text-slate-800"><LayoutDashboard className="w-4 h-4 text-brand-blue" /> Workflow Dashboard</h3>
                    <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">即時同步</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <div className="text-sm text-slate-500 mb-1">詢問數量</div>
                      <div className="text-2xl font-black text-brand-dark">128</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <div className="text-sm text-slate-500 mb-1">報價數量</div>
                      <div className="text-2xl font-black text-brand-blue">45</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <div className="text-sm text-slate-500 mb-1">進行中工單</div>
                      <div className="text-2xl font-black text-brand-teal">32</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                      <div className="text-sm text-slate-500 mb-1">待追蹤</div>
                      <div className="text-2xl font-black text-orange-500">28</div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Tool Icons */}
                <div className="mt-6 flex justify-center gap-4 text-slate-400">
                  <Mail className="w-6 h-6" />
                  <Calendar className="w-6 h-6" />
                  <FileText className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Mobile Visual */}
            <div className="lg:hidden glass-card p-4">
               <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                 <div className="text-center"><MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-1" /><span className="text-[10px] font-bold text-slate-500">WhatsApp</span></div>
                 <ChevronRight className="w-5 h-5 text-slate-300" />
                 <div className="text-center font-black text-orange-500 text-lg mx-auto">n8n<div className="text-[10px] text-slate-500">自動化</div></div>
                 <ChevronRight className="w-5 h-5 text-slate-300" />
                 <div className="text-center"><LayoutDashboard className="w-8 h-8 text-brand-blue mx-auto mb-1" /><span className="text-[10px] font-bold text-slate-500">Dashboard</span></div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
