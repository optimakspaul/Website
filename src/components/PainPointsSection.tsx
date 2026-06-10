import React from 'react';
import { FileStack, BellOff, Clock, CalendarX2, SearchX, Receipt, DatabaseZap, AlertTriangle, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PainPointsSection() {
  const t = useTranslations('PainPoints');

  const painPoints = [
    {
      icon: FileStack,
      title: t('point_1_title'),
      description: t('point_1_desc'),
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      icon: BellOff,
      title: t('point_2_title'),
      description: t('point_2_desc'),
      color: 'text-orange-500',
      bg: 'bg-orange-50',
    },
    {
      icon: Clock,
      title: t('point_3_title'),
      description: t('point_3_desc'),
      color: 'text-red-500',
      bg: 'bg-red-50',
    },
    {
      icon: CalendarX2,
      title: t('point_4_title'),
      description: t('point_4_desc'),
      color: 'text-purple-500',
      bg: 'bg-purple-50',
    },
    {
      icon: SearchX,
      title: t('point_5_title'),
      description: t('point_5_desc'),
      color: 'text-brand-teal',
      bg: 'bg-teal-50',
    },
    {
      icon: Receipt,
      title: t('point_6_title'),
      description: t('point_6_desc'),
      color: 'text-green-500',
      bg: 'bg-green-50',
    },
    {
      icon: DatabaseZap,
      title: t('point_7_title'),
      description: t('point_7_desc'),
      color: 'text-indigo-500',
      bg: 'bg-indigo-50',
    },
    {
      icon: AlertTriangle,
      title: t('point_8_title'),
      description: t('point_8_desc'),
      color: 'text-amber-500',
      bg: 'bg-amber-50',
    },
    {
      icon: Users,
      title: t('point_9_title'),
      description: t('point_9_desc'),
      color: 'text-rose-500',
      bg: 'bg-rose-50',
    },
  ];

  return (
    <section className="py-20 bg-white" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-3 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center md:items-start md:text-left aspect-square md:aspect-auto justify-center md:justify-start">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-5 ${point.bg} ${point.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <point.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[15px] sm:text-base md:text-lg font-bold text-slate-800 md:mb-2 leading-tight">{point.title}</h3>
              <p className="hidden md:block text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
