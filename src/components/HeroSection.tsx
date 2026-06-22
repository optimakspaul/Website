import React from 'react';
import { Zap, ChevronRight, CheckCircle2, MessageCircle, FileText, Database, BarChart3, Settings, Users, PieChart, LineChart, Mail, Calendar, Receipt } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 min-h-[90vh] flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-8 hover:shadow-md transition-shadow cursor-default">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-sm font-semibold text-slate-600">{t('subtitle')}</span>
            </div>
            
            <h1 
              className="text-[1.75rem] sm:text-5xl lg:text-[3.5rem] font-black text-slate-800 leading-[1.25] mb-5 tracking-tight"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
            
            <p className="text-[15px] sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#workflow-check" className="w-full sm:w-auto bg-[#0070f3] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t('cta_primary')}
              </a>
              <a href="#how-it-works" className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-slate-300 flex items-center justify-center gap-2 group">
                {t('cta_secondary')}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-slate-400" /> {t('feature_sme')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-slate-400" /> {t('feature_fast')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-slate-400" /> {t('feature_custom')}
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mockup Dashboard - Hidden on mobile to reduce scroll fatigue */}
          <div className="hidden lg:block w-full lg:w-7/12 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-green/10 rounded-[3rem] transform rotate-3 scale-105 -z-10 animate-pulse"></div>
            <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              {/* Grid pattern background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-xs font-semibold text-slate-500 ml-2 uppercase tracking-wider">{t('mockup_title')}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: WhatsApp Lead Auto-Capture */}
                  <div className="bg-slate-950/60 backdrop-blur border border-slate-800/80 p-4 rounded-2xl hover:border-slate-700/80 hover:-translate-y-0.5 transition-all group duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-300">{t('mockup_card1_title')}</span>
                      </div>
                      <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        {t('mockup_card1_status')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">{t('mockup_card1_text')}</p>
                  </div>

                  {/* Card 2: 1-Click PDF Quote */}
                  <div className="bg-slate-950/60 backdrop-blur border border-slate-800/80 p-4 rounded-2xl hover:border-slate-700/80 hover:-translate-y-0.5 transition-all group duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-300">{t('mockup_card2_title')}</span>
                      </div>
                      <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                        {t('mockup_card2_status')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">{t('mockup_card2_text')}</p>
                  </div>

                  {/* Card 3: Smart Scheduling */}
                  <div className="bg-slate-950/60 backdrop-blur border border-slate-800/80 p-4 rounded-2xl hover:border-slate-700/80 hover:-translate-y-0.5 transition-all group duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-300">{t('mockup_card3_title')}</span>
                      </div>
                      <span className="text-[10px] font-medium text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                        {t('mockup_card3_status')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">{t('mockup_card3_text')}</p>
                  </div>

                  {/* Card 4: Auto-Payment Follow-up */}
                  <div className="bg-slate-950/60 backdrop-blur border border-slate-800/80 p-4 rounded-2xl hover:border-slate-700/80 hover:-translate-y-0.5 transition-all group duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-300">{t('mockup_card4_title')}</span>
                      </div>
                      <span className="text-[10px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        {t('mockup_card4_status')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono italic">{t('mockup_card4_text')}</p>
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
