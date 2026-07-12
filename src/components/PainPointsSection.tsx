import React from 'react';
import { MessageCircle, FileText, Calendar, Receipt, Clipboard, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PainPointsSection() {
  const t = useTranslations('PainPoints');

  const painPoints = [
    { icon: MessageCircle, title: t('point_1_title'), description: t('point_1_desc') },
    { icon: FileText, title: t('point_2_title'), description: t('point_2_desc') },
    { icon: Calendar, title: t('point_3_title'), description: t('point_3_desc') },
    { icon: Receipt, title: t('point_4_title'), description: t('point_4_desc') },
    { icon: Clipboard, title: t('point_5_title'), description: t('point_5_desc') },
    { icon: BarChart3, title: t('point_6_title'), description: t('point_6_desc') },
  ];

  return (
    <section className="py-20 bg-white" id="pain-points">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        {/* Diagnostic checklist: rows, not cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 py-6 border-b border-slate-100"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                <point.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1 leading-snug">{point.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
