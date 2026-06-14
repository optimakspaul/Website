import React from 'react';
import { Snowflake, Sparkles, Wrench, Truck, Calculator, Briefcase, Building2, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function IndustriesSection() {
  const t = useTranslations('Industries');

  const industries = [
    { name: t('ind_1'), icon: Snowflake },
    { name: t('ind_2'), icon: Sparkles },
    { name: t('ind_3'), icon: Wrench },
    { name: t('ind_4'), icon: Truck },
    { name: t('ind_5'), icon: Calculator },
    { name: t('ind_6'), icon: Briefcase },
    { name: t('ind_7'), icon: Building2 },
  ];

  const conditions = [
    t('condition_1'),
    t('condition_2'),
    t('condition_3')
  ];

  return (
    <section className="py-24 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-[1.75rem] md:text-4xl font-black text-brand-dark mb-4 md:mb-6 leading-tight">
              {t('section_title')}
            </h2>
            <p className="text-[15px] md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              {t('section_subtitle')}
            </p>
            
            <div className="space-y-4 mb-8">
              {conditions.map((condition, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-green shrink-0 mt-0.5" />
                  <p className="text-[15px] md:text-base text-slate-700 font-medium leading-snug">{condition}</p>
                </div>
              ))}
            </div>
            
            <div className="hidden lg:block">
              <a href="#workflow-check" className="text-brand-blue font-bold hover:text-brand-dark transition-colors inline-flex items-center gap-2">
                {t('link')} <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border-2 border-slate-100 hover:border-brand-blue hover:shadow-md px-5 py-3 rounded-full transition-all cursor-default">
                  <industry.icon className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-slate-700">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
