"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('FAQ');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#efeae2] relative" id="faq">
      <div className="absolute inset-0 bg-[radial-gradient(#cfd4d6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            {t('section_title')}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx}>
                {/* Question: customer bubble, left */}
                <div className="flex justify-start">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="relative max-w-[88%] bg-white text-left px-5 py-3.5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3 font-bold text-slate-800 text-sm md:text-base cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Answer: assistant bubble, right */}
                <div
                  className={`flex justify-end overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="relative max-w-[88%] bg-[#d9fdd3] border border-[#c1e8b7] px-5 py-3.5 rounded-2xl rounded-tr-none shadow-sm text-slate-800 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
