import React from 'react';
import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FinalCTA() {
  const t = useTranslations('FinalCTA');

  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-teal/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <a href="#workflow-check" className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-hover text-white px-10 py-5 rounded-full font-black text-xl transition-all shadow-xl shadow-brand-green/20 hover:-translate-y-1 flex items-center justify-center gap-3">
            <Rocket className="w-6 h-6" /> {t('btn')}
          </a>
          <p className="text-sm text-slate-400 font-medium">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
