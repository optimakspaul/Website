import React from 'react';
import { MessageCircle, FileText, Calendar, Receipt, Clipboard, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PainPointsSection() {
  const t = useTranslations('PainPoints');

  const painPoints = [
    {
      icon: MessageCircle,
      title: t('point_1_title'),
      description: t('point_1_desc'),
      color: 'text-orange-500',
      bg: 'bg-orange-50',
    },
    {
      icon: FileText,
      title: t('point_2_title'),
      description: t('point_2_desc'),
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      icon: Calendar,
      title: t('point_3_title'),
      description: t('point_3_desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: Receipt,
      title: t('point_4_title'),
      description: t('point_4_desc'),
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: Clipboard,
      title: t('point_5_title'),
      description: t('point_5_desc'),
      color: 'text-brand-blue',
      bg: 'bg-blue-50',
    },
    {
      icon: BarChart3,
      title: t('point_6_title'),
      description: t('point_6_desc'),
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-20 bg-white" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center md:items-start md:text-left">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 ${point.bg} ${point.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <point.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 leading-tight">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
