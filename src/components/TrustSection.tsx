import React from 'react';
import { Share2, Target, HeartHandshake } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TrustSection() {
  const t = useTranslations('Trust');

  const cards = [
    {
      icon: Share2,
      title: t('point_1_title'),
      desc: t('point_1_desc'),
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: Target,
      title: t('point_2_title'),
      desc: t('point_2_desc'),
      color: 'text-amber-500 bg-amber-50'
    },
    {
      icon: HeartHandshake,
      title: t('point_3_title'),
      desc: t('point_3_desc'),
      color: 'text-emerald-500 bg-emerald-50'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="why-trust-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${card.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
