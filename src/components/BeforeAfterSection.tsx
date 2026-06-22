import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function BeforeAfterSection() {
  const t = useTranslations('BeforeAfter');

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="before-after">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full filter blur-3xl opacity-60 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-4 relative">
          
          {/* Before: Manual Chaos */}
          <div className="w-full lg:w-5/12 bg-white rounded-3xl p-6 md:p-8 border border-red-100 shadow-xl shadow-red-500/5 hover:shadow-red-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-red-50 pb-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-red-600 tracking-tight">
                {t('before_title')}
              </h3>
            </div>

            <ul className="space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {t(`before_item_${num}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Connector Indicator for large screens */}
          <div className="hidden lg:flex items-center justify-center w-2/12 relative">
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400">
              <ArrowRight className="w-6 h-6 animate-pulse text-[#0070f3]" />
            </div>
          </div>

          {/* After: Automated Clarity */}
          <div className="w-full lg:w-5/12 bg-slate-900 rounded-3xl p-6 md:p-8 border border-emerald-500/20 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-emerald-400 tracking-tight">
                {t('after_title')}
              </h3>
            </div>

            <ul className="space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {t(`after_item_${num}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
