"use client";

import React, { useState } from 'react';
import { Search, GitMerge, Puzzle, Rocket, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. 了解現況',
    description: '先了解你現在的工作流程、使用工具、團隊分工與最常卡住的地方。',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: GitMerge,
    title: '2. 梳理流程',
    description: '把混亂的作業步驟整理成清楚流程，找出可以簡化、標準化或自動化的地方。',
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
  },
  {
    icon: Puzzle,
    title: '3. 整合工具',
    description: '依需求整合 AI、n8n、表單、CRM、Email、Calendar、Dashboard 或既有工具。',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Rocket,
    title: '4. 導入落地',
    description: '協助團隊真的用起來，讓流程可以被追蹤、交接與持續優化。',
    color: 'text-brand-green',
    bg: 'bg-green-50',
  }
];

export default function HowItWorksSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            我們怎麼做
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            我們不只是賣軟體，我們是你的流程優化夥伴，陪伴你從梳理痛點到系統落地。
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:flex items-start justify-between relative">
          <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 z-0"></div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center w-1/4 px-4 group">
              <div className={`w-24 h-24 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-sm border border-white group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${step.bg} ${step.color}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800">{step.title}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 border-t border-slate-100' : 'max-h-0'}`}>
                <div className="p-5 pt-4 text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
