import React from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { buildWhatsAppUrl, hasWhatsAppNumber } from '@/lib/whatsapp';
import CheckoutButton from '@/components/CheckoutButton';
import TrackedLink from '@/components/TrackedLink';

export default function PricingSection() {
  const t = useTranslations('Pricing');
  const waNumber = process.env.NEXT_PUBLIC_OPTIMAKS_WHATSAPP_NUMBER;
  const hasWA = hasWhatsAppNumber(waNumber);
  const ctaHref = hasWA ? buildWhatsAppUrl(waNumber, t('wa_message')) : '#workflow-check';

  const steps = [
    {
      step: t('step_1'),
      title: t('step1_title'),
      orig: t('step1_orig'),
      price: t('step1_price'),
      unit: t('step1_unit'),
      points: [t('step1_p1'), t('step1_p2'), t('step1_p3')],
      highlight: false,
      plan: 'audit' as const
    },
    {
      step: t('step_2'),
      title: t('step2_title'),
      orig: t('step2_orig'),
      price: t('step2_price'),
      unit: t('step2_unit'),
      badge: t('step2_badge'),
      points: [t('step2_p1'), t('step2_p2'), t('step2_p3'), t('step2_p4')],
      highlight: true,
      plan: 'setup' as const
    },
    {
      step: t('step_3'),
      title: t('step3_title'),
      orig: null,
      price: t('step3_price'),
      unit: t('step3_unit'),
      points: [t('step3_p1'), t('step3_p2'), t('step3_p3'), t('step3_p4')],
      highlight: false,
      plan: null
    }
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {steps.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-brand-dark text-white border-brand-dark shadow-2xl md:scale-105'
                  : 'bg-slate-50 border-slate-200/60 hover:shadow-lg'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-green text-white text-xs font-bold shadow-md whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <span className={`text-xs font-black tracking-widest mb-2 ${plan.highlight ? 'text-emerald-300' : 'text-brand-blue'}`}>
                {plan.step}
              </span>
              <h3 className={`text-xl font-bold mb-5 ${plan.highlight ? 'text-white' : 'text-slate-800'}`}>
                {plan.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-1">
                {plan.orig && (
                  <span className={`text-lg line-through ${plan.highlight ? 'text-slate-400' : 'text-slate-400'}`}>
                    {plan.orig}
                  </span>
                )}
                <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
              </div>
              <span className={`text-sm mb-6 ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                {plan.unit}
              </span>

              <ul className="space-y-3 mb-8">
                {plan.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-emerald-300' : 'text-brand-green'}`} />
                    <span className={plan.highlight ? 'text-slate-200' : 'text-slate-600'}>{point}</span>
                  </li>
                ))}
              </ul>

              {plan.plan && (
                <div className="mt-auto">
                  <CheckoutButton plan={plan.plan} label={t('pay_now')} highlight={plan.highlight} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <TrackedLink
            event="whatsapp_click"
            eventData={{ location: 'pricing' }}
            href={ctaHref}
            target={ctaHref.startsWith('#') ? undefined : '_blank'}
            rel={ctaHref.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-green hover:bg-brand-green-hover text-white text-lg font-bold shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            {t('cta')}
          </TrackedLink>
          <p className="text-xs text-slate-400 mt-6 max-w-xl mx-auto leading-relaxed">
            {t('fine_print')}
          </p>
        </div>
      </div>
    </section>
  );
}
