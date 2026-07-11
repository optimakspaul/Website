import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { buildWhatsAppUrl, hasWhatsAppNumber } from '@/lib/whatsapp';

export default function PaymentSuccess() {
  const t = useTranslations('PaymentSuccess');
  const waNumber = process.env.NEXT_PUBLIC_OPTIMAKS_WHATSAPP_NUMBER;
  const hasWA = hasWhatsAppNumber(waNumber);
  const waHref = hasWA ? buildWhatsAppUrl(waNumber, t('wa_message')) : undefined;

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 max-w-lg w-full p-8 md:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h1 className="text-2xl md:text-3xl font-black text-brand-dark mb-4">{t('title')}</h1>
        <p className="text-slate-600 leading-relaxed mb-8">{t('subtitle')}</p>

        {waHref && (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-green hover:bg-brand-green-hover text-white font-bold transition-colors mb-6"
          >
            <MessageCircle className="w-5 h-5" />
            {t('wa_btn')}
          </a>
        )}

        <div>
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 underline">
            {t('back_home')}
          </Link>
        </div>
      </div>
    </main>
  );
}
