"use client";

import React, { useState } from 'react';
import { ChevronRight, Check, ArrowRight, ChevronDown } from 'lucide-react';

const steps = [
  {
    title: '你是哪種類型的企業？',
    options: ['冷氣 / Aircon', '清潔 / Cleaning', '維修 / Repair', '物流 / Logistics', '會計 / Accounting', '其他服務業']
  },
  {
    title: '你最常卡在哪裡？',
    options: ['太多 paperwork', '詢價容易漏', '報價太慢', '排程混亂', '工單狀態不清楚', '付款難追', '資料太分散']
  },
  {
    title: '你現在主要使用哪些工具？',
    options: ['WhatsApp / Line', 'Excel / Google Sheet', 'Email', 'Calendar', '紙本文件', '現有系統 (CRM / ERP)']
  },
  {
    title: '你最想改善什麼？',
    options: ['減少重複人工', '減少漏單', '加快報價速度', '讓排程更清楚', '讓老闆看得到進度', '讓員工更好交接', '導入 AI / 自動化']
  }
];

export default function WorkflowCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selections, setSelections] = useState<Record<number, string[]>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleSelection = (stepIndex: number, option: string) => {
    setSelections(prev => {
      const currentSelections = prev[stepIndex] || [];
      const isSelected = currentSelections.includes(option);
      
      let newSelections;
      if (isSelected) {
        newSelections = currentSelections.filter(i => i !== option);
      } else {
        // Limit to max 3 selections per step to keep it quick
        if (currentSelections.length >= 3) {
            newSelections = [...currentSelections.slice(1), option];
        } else {
            newSelections = [...currentSelections, option];
        }
      }
      return { ...prev, [stepIndex]: newSelections };
    });
  };

  const handleNext = () => {
    setDropdownOpen(false);
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    setDropdownOpen(false);
    setCurrentStep(c => Math.max(0, c - 1));
  };

  return (
    <section className="pt-24 pb-36 md:py-24 bg-slate-50 relative overflow-hidden" id="workflow-check">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-light to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
            1 分鐘流程檢查
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-2">
            點選幾個選項，快速了解你的流程卡在哪裡，以及哪些工作最值得先優化。
          </p>
          <span className="inline-block bg-brand-teal/10 text-brand-teal font-semibold px-4 py-1.5 rounded-full text-sm">
            只要 4 個步驟，約 1 分鐘完成。
          </span>
        </div>

        <div className="glass-card bg-white p-5 md:p-10 shadow-2xl shadow-slate-200/50">
          {!isCompleted ? (
            <>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-6 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full z-0"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-brand-blue rounded-full z-0 transition-all duration-300" 
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                ></div>
                {steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300
                      ${idx <= currentStep ? 'bg-brand-blue text-white shadow-md' : 'bg-slate-200 text-slate-500'}`}
                  >
                    {idx < currentStep ? <Check className="w-4 h-4" /> : idx + 1}
                  </div>
                ))}
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-5 flex items-center justify-between">
                  <div>
                    <span className="text-brand-blue mr-2">Q{currentStep + 1}.</span> 
                    {steps[currentStep].title}
                  </div>
                  <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-1 rounded-full whitespace-nowrap ml-2 shrink-0">
                    {currentStep === 0 ? '單選' : '可複選'}
                  </span>
                </h3>
                
                <div className="max-h-[35vh] md:max-h-none overflow-y-auto pr-1 -mr-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 pb-1">
                  {steps[currentStep].options.map(option => {
                    const isSelected = (selections[currentStep] || []).includes(option);
                    return (
                      <button
                        key={option}
                        onClick={() => {
                          toggleSelection(currentStep, option);
                          // Auto advance for step 1 (single choice)
                          if (currentStep === 0) {
                            setTimeout(() => {
                              handleNext();
                            }, 300); // Small delay so they see the checkmark
                          }
                        }}
                        className={`text-left px-3 py-3 md:px-4 md:py-3.5 rounded-xl border-2 transition-all duration-200 font-medium text-sm md:text-base flex flex-col justify-center min-h-[4rem]
                          ${isSelected 
                            ? 'border-brand-blue bg-blue-50 text-brand-blue shadow-sm ring-1 ring-brand-blue/30' 
                            : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50 text-slate-600'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between w-full gap-2">
                          <span className="leading-snug">{option}</span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors
                            ${isSelected ? 'bg-brand-blue border-brand-blue' : 'border-slate-300'}
                          `}>
                            {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button 
                  onClick={handlePrev}
                  className={`text-slate-500 font-medium px-4 py-2 hover:text-slate-700 transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
                >
                  返回上一步
                </button>
                <button
                  onClick={handleNext}
                  disabled={(selections[currentStep] || []).length === 0}
                  className="bg-brand-dark hover:bg-black text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {currentStep === steps.length - 1 ? '查看結果' : '下一步'} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* Result Card */
            <div className="text-center py-6 animation-fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">分析完成</h3>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 my-8 text-left max-w-2xl mx-auto">
                <p className="text-slate-500 font-medium mb-2">你的流程目前最可能卡在：</p>
                <p className="text-xl font-bold text-brand-dark mb-6 border-b border-slate-200 pb-4">
                  詢價追蹤 + 報價整理 + 排程管理
                </p>
                
                <p className="text-slate-500 font-medium mb-3">建議先優化：</p>
                <ul className="space-y-3">
                  {[
                    'Lead 集中管理 (不漏接)',
                    '報價模板 (一鍵生成)',
                    '排程提醒 (自動通知)',
                    'WhatsApp → 表單 / CRM 串接'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 font-semibold">
                      <div className="w-6 h-6 rounded-full bg-brand-light text-brand-blue flex items-center justify-center text-xs shrink-0 mt-0.5">{idx + 1}</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-w-md mx-auto">
                <p className="font-bold text-slate-800 mb-4">想收到初步建議？留下聯絡方式。</p>
                <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
                  <input type="text" placeholder="稱呼 (Name)" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" required />
                  <input type="text" placeholder="公司 (Company)" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" required />
                  <input type="tel" placeholder="聯絡電話 (Phone)" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" required />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20" required />
                  <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-green/20">
                    免費獲取專屬建議報告 <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-xs text-slate-400 mt-4">我們不會發送垃圾郵件，僅用於發送建議報告。</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
