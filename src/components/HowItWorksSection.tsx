"use client";

import React from 'react';
import { Search, GitMerge, Puzzle, Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HowItWorksSection() {
  const t = useTranslations('HowItWorks');

  const steps = [
    {
      icon: Search,
      title: t('step_1_title'),
      description: t('step_1_desc'),
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: GitMerge,
      title: t('step_2_title'),
      description: t('step_2_desc'),
      color: 'text-brand-teal',
      bg: 'bg-teal-50',
    },
    {
      icon: Puzzle,
      title: t('step_3_title'),
      description: t('step_3_desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: Rocket,
      title: t('step_4_title'),
      description: t('step_4_desc'),
      color: 'text-brand-green',
      bg: 'bg-green-50',
    }
  ];

  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
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

        {/* Mobile: Vertical Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start text-left shadow-sm">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${step.bg} ${step.color}`}>
                <step.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
