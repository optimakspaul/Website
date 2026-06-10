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

          {/* Right Visual Dashboard Mockup */}
          <div className="relative w-full h-[500px] lg:h-[600px] hidden md:block">
            
            {/* Background Dashboard */}
            <div className="absolute top-0 right-0 w-[95%] h-[400px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-5 flex flex-col">
              {/* Dashboard Top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>
                <div className="text-sm font-bold text-slate-800">動態總覽</div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                  <div className="w-6 h-6 rounded-full bg-slate-100"></div>
                </div>
              </div>
              
              {/* Dashboard Content Grid */}
              <div className="flex gap-6 h-full">
                {/* Sidebar */}
                <div className="w-32 flex flex-col gap-3">
                  <div className="bg-[#2563eb] text-white text-xs font-bold py-2 px-3 rounded-md flex items-center gap-2"><BarChart3 className="w-3 h-3" /> 總覽</div>
                  <div className="text-slate-500 text-xs font-bold py-2 px-3 rounded-md flex items-center gap-2"><Settings className="w-3 h-3" /> 流程</div>
                  <div className="text-slate-500 text-xs font-bold py-2 px-3 rounded-md flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> 執行紀錄</div>
                  <div className="text-slate-500 text-xs font-bold py-2 px-3 rounded-md flex items-center gap-2"><Users className="w-3 h-3" /> 整合</div>
                  <div className="text-slate-500 text-xs font-bold py-2 px-3 rounded-md flex items-center gap-2"><Database className="w-3 h-3" /> 資料</div>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4">
                    {['流程數', '自動化執行', '節省工時', '成功率'].map((label, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-lg">
                        <div className="text-[10px] text-slate-400 font-bold mb-1">{label}</div>
                        <div className="text-xl font-black text-slate-800">{['28', '1,268', '126h', '98%'][idx]}</div>
                      </div>
                    ))}
                  </div>
                  {/* Charts Row */}
                  <div className="flex gap-4 flex-1">
                    <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-3 relative overflow-hidden flex flex-col">
                      <div className="text-[10px] text-slate-400 font-bold mb-2">趨勢與跳轉</div>
                      <div className="flex-1 w-full flex items-end gap-1 opacity-60">
                        {/* Fake line chart using borders/svg could go here, replacing with simple lines */}
                        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path d="M0,30 L20,25 L40,35 L60,15 L80,20 L100,5" fill="none" stroke="#2563eb" strokeWidth="2" />
                          <path d="M0,35 L20,30 L40,38 L60,25 L80,28 L100,15" fill="none" stroke="#10b981" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="w-40 bg-slate-50 border border-slate-100 rounded-lg p-3 flex flex-col items-center justify-center relative">
                       <div className="text-[10px] text-slate-400 font-bold absolute top-3 left-3">作業分布</div>
                       <div className="w-16 h-16 rounded-full border-4 border-[#2563eb] border-r-[#10b981] border-b-[#7c3aed]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Workflow Cards */}
            <div className="absolute top-[280px] left-0 w-full z-10 flex items-center justify-between px-2">
              {/* WhatsApp */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col items-center justify-center w-28 h-28 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2"><MessageCircle className="w-6 h-6 text-white" /></div>
                <div className="text-xs font-bold text-slate-800">客戶詢問</div>
                <div className="text-[10px] text-slate-400">(WhatsApp)</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />
              
              {/* Form */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col items-center justify-center w-28 h-28 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2"><FileText className="w-6 h-6 text-purple-600" /></div>
                <div className="text-xs font-bold text-slate-800">表單收集</div>
                <div className="text-[10px] text-slate-400">(Form)</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />

              {/* n8n */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-orange-100 p-4 flex flex-col items-center justify-center w-32 h-32 hover:-translate-y-1 transition-transform relative z-20">
                <div className="absolute -inset-2 bg-orange-500/10 rounded-3xl blur-md z-[-1]"></div>
                <div className="text-orange-500 font-black text-2xl mb-1">n8n</div>
                <div className="text-xs font-bold text-slate-800">自動化流程</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />

              {/* Database */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col items-center justify-center w-28 h-28 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2"><Database className="w-6 h-6 text-[#2563eb]" /></div>
                <div className="text-xs font-bold text-slate-800">資料儲存</div>
                <div className="text-[10px] text-slate-400">(Database)</div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300" />

              {/* Dashboard */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col items-center justify-center w-28 h-28 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center mb-2"><BarChart3 className="w-6 h-6 text-white" /></div>
                <div className="text-xs font-bold text-slate-800">報表儀表板</div>
                <div className="text-[10px] text-slate-400">(Dashboard)</div>
              </div>
            </div>

            {/* Bottom Integration Icons */}
            <div className="absolute top-[440px] left-[15%] right-[15%] bg-white/60 backdrop-blur-md border border-slate-100 rounded-2xl p-4 flex items-center justify-center gap-8 shadow-sm">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-200 border-l border-dashed border-slate-300"></div>
               <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500 font-bold">M</div><span className="text-[10px] font-bold text-slate-500">Gmail</span></div>
               <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold">田</div><span className="text-[10px] font-bold text-slate-500">Sheets</span></div>
               <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 font-bold">31</div><span className="text-[10px] font-bold text-slate-500">Calendar</span></div>
               <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 font-bold">▲</div><span className="text-[10px] font-bold text-slate-500">Drive</span></div>
               <div className="ml-4 bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-full">更多工具整合中...</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
