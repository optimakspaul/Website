import React from 'react';
import { Receipt, Truck, MessageSquareText, ArrowRight } from 'lucide-react';
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
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_a_wa')) : '#workflow-check'
    },
    {
      icon: Truck,
      title: t('card_b_title'),
      tag: t('card_b_tag'),
      pain: t('card_b_pain'),
      fix: t('card_b_fix'),
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_b_wa')) : '#workflow-check'
    },
    {
      icon: MessageSquareText,
      title: t('card_c_title'),
      tag: t('card_c_tag'),
      pain: t('card_c_pain'),
      fix: t('card_c_fix'),
      href: hasWA ? buildWhatsAppUrl(waNumber, t('card_c_wa')) : '#workflow-check'
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
              className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-white"
            >
              {/* WhatsApp-style contact header */}
              <div className="bg-[#075e54] text-white px-5 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/15 border border-white/10 flex items-center justify-center shrink-0">
                  <pack.icon className="w-5 h-5 text-white/90" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold leading-none mb-1 truncate">{pack.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] text-emerald-300 font-medium leading-none truncate">{pack.tag}</span>
                  </div>
                </div>
              </div>

              {/* Chat area: boss complains, assistant answers */}
              <div className="bg-[#efeae2] px-4 py-5 flex-1 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#cfd4d6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
                <div className="relative z-10 space-y-3">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 ml-1">
                      {t('pain_label')}
                    </span>
                    <div className="relative max-w-[92%] bg-white text-slate-800 text-sm px-4 py-3 rounded-2xl rounded-tl-none shadow-sm leading-relaxed">
                      {pack.pain}
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wide mb-1 mr-1">
                      {t('fix_label')}
                    </span>
                    <div className="relative max-w-[92%] bg-[#d9fdd3] border border-[#c1e8b7] text-slate-800 text-sm px-4 py-3 rounded-2xl rounded-tr-none shadow-sm leading-relaxed">
                      {pack.fix}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA styled as a reply bar */}
              <div className="p-3 bg-white border-t border-slate-100">
                <TrackedLink
                  event="whatsapp_click"
                  eventData={{ location: 'pain_menu', pack: pack.tag }}
                  href={pack.href}
                  target={pack.href.startsWith('#') ? undefined : '_blank'}
                  rel={pack.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold transition-colors"
                >
                  {t('card_cta')}
                  <ArrowRight className="w-4 h-4" />
                </TrackedLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
