import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { legalContent, LEGAL_DOCS } from '@/lib/legalContent';

export function generateStaticParams() {
  return routing.locales.flatMap(locale => LEGAL_DOCS.map(doc => ({ locale, doc })));
}

export default async function LegalPage({
  params
}: {
  params: Promise<{ locale: string; doc: string }>;
}) {
  const { locale, doc } = await params;

  if (!(LEGAL_DOCS as readonly string[]).includes(doc)) {
    notFound();
  }
  const content = legalContent[doc as (typeof LEGAL_DOCS)[number]][locale as 'zh-TW' | 'zh-CN' | 'en'];
  if (!content) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-8">
          <ArrowLeft className="w-4 h-4" /> Optimaks
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-brand-dark mb-2">{content.title}</h1>
          <p className="text-sm text-slate-400 mb-8">Last updated: {content.updated}</p>
          <p className="text-slate-600 leading-relaxed mb-10">{content.intro}</p>

          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-lg font-bold text-slate-800 mb-3">{section.h}</h2>
                <ul className="space-y-2">
                  {section.p.map((para, j) => (
                    <li key={j} className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {para}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
