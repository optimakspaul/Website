import React from 'react';
import { Zap, ChevronRight, CheckCircle2, MessageCircle, FileText, Database, BarChart3, Settings, Users, PieChart, LineChart, Mail, Calendar } from 'lucide-react';
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

          {/* Right Column: Concept Illustration (Horizontal Pipeline) - Hidden on mobile to reduce scroll fatigue */}
          <div className="hidden lg:block w-full lg:w-7/12 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-green/5 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white/40 backdrop-blur-3xl border border-white/60 p-4 md:p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              
              {/* Grid pattern background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

              <div className="relative z-10">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-slate-200/50 shadow-sm mb-8 md:mb-10">
                  <Settings className="w-4 h-4 text-brand-blue" />
                  <span className="text-sm font-bold text-slate-600">流程自動化概念</span>
                </div>

                {/* Pipeline Container - Horizontal Flow Restored */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-3 lg:gap-4 w-full">
                  
                  {/* Step 1: Messy Inputs (9 Pain Points) */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full xl:w-48 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-xs font-bold text-slate-700 mb-3 text-center border-b border-slate-100 pb-2 whitespace-nowrap">{t('diagram_pain_title')}</div>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {[
                        { text: t('pain_1'), color: 'text-blue-600 bg-blue-50 border-blue-100' },
                        { text: t('pain_2'), color: 'text-orange-600 bg-orange-50 border-orange-100' },
                        { text: t('pain_3'), color: 'text-red-600 bg-red-50 border-red-100' },
                        { text: t('pain_4'), color: 'text-purple-600 bg-purple-50 border-purple-100' },
                        { text: t('pain_5'), color: 'text-teal-600 bg-teal-50 border-teal-100' },
                        { text: t('pain_6'), color: 'text-green-600 bg-green-50 border-green-100' },
                        { text: t('pain_7'), color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                        { text: t('pain_8'), color: 'text-amber-600 bg-amber-50 border-amber-100' },
                        { text: t('pain_9'), color: 'text-rose-600 bg-rose-50 border-rose-100' },
                      ].map((item, i) => (
                        <span key={i} className={`text-[10px] font-bold px-1.5 py-1 rounded-md border ${item.color} whitespace-nowrap grow text-center`}>
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="text-slate-300 xl:-rotate-90 xl:hidden flex justify-center py-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden xl:block text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 2: Optimization Engine */}
                  <div className="relative w-full xl:w-56">
                    <div className="absolute -inset-4 bg-brand-blue/10 rounded-[2.5rem] blur-xl animate-pulse"></div>
                    <div className="bg-white border-2 border-brand-blue/20 p-5 md:p-6 rounded-[2rem] shadow-2xl shadow-brand-blue/10 relative z-10 flex flex-col items-center justify-center group hover:scale-105 transition-transform cursor-default w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mb-3 shadow-lg text-white">
                        <Settings className="w-6 h-6 animate-[spin_4s_linear_infinite]" />
                      </div>
                      <div className="text-lg font-black text-slate-800 mb-4 tracking-tight whitespace-nowrap text-center">{t('diagram_engine_title')}</div>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-3 h-3 text-brand-blue shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{t('engine_1')}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Database className="w-3 h-3 text-orange-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{t('engine_2')}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                          <Zap className="w-3 h-3 text-teal-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">{t('engine_3')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="text-slate-300 xl:-rotate-90 xl:hidden flex justify-center py-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                  <div className="hidden xl:block text-slate-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse delay-75">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>

                  {/* Step 3: Streamlined Output */}
                  <div className="bg-white p-4 md:p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 w-full xl:w-48 relative group hover:-translate-y-1 transition-transform">
                    <div className="text-xs font-bold text-brand-blue mb-3 text-center border-b border-slate-100 pb-2 whitespace-nowrap">{t('diagram_outcome_title')}</div>
                    <div className="flex flex-col gap-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">{t('outcome_1')}</div>
                      </div>
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-2.5 rounded-xl shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">{t('outcome_2')}</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2">
                        <BarChart3 className="w-4 h-4 text-white shrink-0" />
                        <div className="font-bold text-xs whitespace-nowrap">{t('outcome_3')}</div>
                      </div>
                    </div>
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
