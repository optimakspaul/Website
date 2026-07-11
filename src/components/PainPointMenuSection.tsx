import React from 'react';
import { Receipt, Truck, MessageSquareText, Frown, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { buildWhatsAppUrl, hasWhatsAppNumber } from '@/lib/whatsapp';
import TrackedLink from '@/components/TrackedLink';

export default function PainPointMenuSection() {
  const t = useTranslations('PainMenu');
  const waNumber = process.env.NEXT_PUBLIC_OPTIMAKS_WHATSAPP_NUMBER;
  const hasWA = hasWhatsAppNumber(waNumber);

  const packs = [
    {
      icon: Receipt,
      title: t('card_a_title'),
      tag: t('card_a_tag'),
      pain: t('card_a_pain'),
      fix: t('card_a_fix'),
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_a_wa')) : '#workflow-check',
      color: 'text-brand-teal',
      bg: 'bg-teal-50',
      border: 'border-teal-100'
    },
    {
      icon: Truck,
      title: t('card_b_title'),
      tag: t('card_b_tag'),
      pain: t('card_b_pain'),
      fix: t('card_b_fix'),
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_b_wa')) : '#workflow-check',
      color: 'text-brand-blue',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      icon: MessageSquareText,
      title: t('card_c_title'),
      tag: t('card_c_tag'),
      pain: t('card_c_pain'),
      fix: t('card_c_fix'),
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_c_wa')) : '#workflow-check',
      color: 'text-brand-purple',
      bg: 'bg-purple-50',
      border: 'border-purple-100'
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-5">
            {t('section_subtitle')}
          </p>
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold">
            {t('tagline')}
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 md:p-8 border ${pack.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pack.bg} ${pack.color}`}>
                  <pack.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 leading-tight">{pack.title}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{pack.tag}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-500 uppercase tracking-wide mb-1.5">
                  <Frown className="w-3.5 h-3.5" />
                  {t('pain_label')}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{pack.pain}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('fix_label')}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">{pack.fix}</p>
              </div>

              <TrackedLink
                event="whatsapp_click"
                eventData={{ location: 'pain_menu', pack: pack.tag }}
                href={pack.href}
                target={pack.href.startsWith('#') ? undefined : '_blank'}
                rel={pack.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-dark text-white text-sm font-bold hover:bg-slate-700 transition-colors"
              >
                {t('card_cta')}
                <ArrowRight className="w-4 h-4" />
              </TrackedLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
