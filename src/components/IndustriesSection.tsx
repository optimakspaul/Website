"use client";

import React, { useState } from 'react';
import { Snowflake, Sparkles, Wrench, Calculator, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function IndustriesSection() {
  const t = useTranslations('Industries');
  const [activeTab, setActiveTab] = useState(0);

  const workflows = [
    {
      id: 0,
      name: t('ind_1'),
      icon: Snowflake,
      color: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      activeColor: 'bg-blue-500 text-white',
      steps: [
        { title: t('w_1_s1_t'), desc: t('w_1_s1_d') },
        { title: t('w_1_s2_t'), desc: t('w_1_s2_d') },
        { title: t('w_1_s3_t'), desc: t('w_1_s3_d') },
        { title: t('w_1_s4_t'), desc: t('w_1_s4_d') },
      ]
    },
    {
      id: 1,
      name: t('ind_2'),
      icon: Sparkles,
      color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      activeColor: 'bg-emerald-500 text-white',
      steps: [
        { title: t('w_2_s1_t'), desc: t('w_2_s1_d') },
        { title: t('w_2_s2_t'), desc: t('w_2_s2_d') },
        { title: t('w_2_s3_t'), desc: t('w_2_s3_d') },
        { title: t('w_2_s4_t'), desc: t('w_2_s4_d') },
      ]
    },
    {
      id: 2,
      name: t('ind_3'),
      icon: Wrench,
      color: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      activeColor: 'bg-purple-500 text-white',
      steps: [
        { title: t('w_3_s1_t'), desc: t('w_3_s1_d') },
        { title: t('w_3_s2_t'), desc: t('w_3_s2_d') },
        { title: t('w_3_s3_t'), desc: t('w_3_s3_d') },
        { title: t('w_3_s4_t'), desc: t('w_3_s4_d') },
      ]
    },
    {
      id: 3,
      name: t('ind_4'),
      icon: Calculator,
      color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
      activeColor: 'bg-indigo-500 text-white',
      steps: [
        { title: t('w_4_s1_t'), desc: t('w_4_s1_d') },
        { title: t('w_4_s2_t'), desc: t('w_4_s2_d') },
        { title: t('w_4_s3_t'), desc: t('w_4_s3_d') },
        { title: t('w_4_s4_t'), desc: t('w_4_s4_d') },
      ]
    }
  ];

  const activeWorkflow = workflows[activeTab];

  return (
    <section className="py-20 bg-white" id="example-workflows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12">
          {workflows.map((wf) => {
            const Icon = wf.icon;
            const isActive = activeTab === wf.id;
            return (
              <button
                key={wf.id}
                onClick={() => setActiveTab(wf.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border font-bold text-sm md:text-base transition-all duration-200 cursor-pointer ${
                  isActive ? wf.activeColor + ' shadow-md shadow-slate-200 scale-105' : wf.color + ' hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{wf.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Workflow Path Diagram */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden xl:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 relative z-10">
            {activeWorkflow.steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white border border-slate-200/60 hover:border-slate-300 p-5 md:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg relative group flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-[#0070f3] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Connector for Desktop (Chevron Right) */}
                {idx < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 hidden xl:flex w-8 h-8 rounded-full bg-white border border-slate-200 items-center justify-center text-slate-400 group-hover:scale-110 group-hover:text-[#0070f3] transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
