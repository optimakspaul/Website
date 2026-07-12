"use client";

import React, { useState } from 'react';
import { Bot, Phone, MoreVertical, Receipt, Truck, MessageSquareText, BarChart3, Table2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Bubble =
  | { kind: 'assistant' | 'customer'; text: string; time: string }
  | { kind: 'attachment'; text: string }
  | { kind: 'event'; text: string };

interface DashRow {
  status: 'red' | 'green' | 'amber';
  label: string;
  value: string;
  note: string;
}

type Scenario = {
  label: string;
  icon: typeof Receipt;
  header: string;
  note: string;
} & (
  | { kind: 'chat'; bubbles: Bubble[] }
  | { kind: 'dashboard'; title: string; caption: string; rows: DashRow[] }
  | { kind: 'sheet'; columns: string[]; rows: string[][]; caption: string }
);

const dashDot: Record<DashRow['status'], string> = {
  red: 'bg-rose-500',
  green: 'bg-emerald-500',
  amber: 'bg-amber-400'
};

export default function AssistantShowcase() {
  const t = useTranslations('AssistantDemo');
  const [tab, setTab] = useState(0);

  const scenarios: Scenario[] = [
    {
      kind: 'chat',
      label: t('tab_a'),
      icon: Receipt,
      header: t('a_header'),
      bubbles: [
        { kind: 'assistant', text: t('a_m1'), time: '09:00' },
        { kind: 'attachment', text: t('a_att') },
        { kind: 'customer', text: t('a_m2'), time: '11:32' },
        { kind: 'assistant', text: t('a_m3'), time: '11:33' }
      ],
      note: t('a_note')
    },
    {
      kind: 'chat',
      label: t('tab_b'),
      icon: Truck,
      header: t('b_header'),
      bubbles: [
        { kind: 'event', text: t('b_event') },
        { kind: 'assistant', text: t('b_m1'), time: '17:00' },
        { kind: 'customer', text: t('b_m2'), time: '17:04' },
        { kind: 'event', text: t('b_m3') }
      ],
      note: t('b_note')
    },
    {
      kind: 'chat',
      label: t('tab_c'),
      icon: MessageSquareText,
      header: t('c_header'),
      bubbles: [
        { kind: 'customer', text: t('c_m1'), time: '21:47' },
        { kind: 'assistant', text: t('c_m2'), time: '21:47' },
        { kind: 'event', text: t('c_event') },
        { kind: 'assistant', text: t('c_m3'), time: '09:05' }
      ],
      note: t('c_note')
    },
    {
      kind: 'dashboard',
      label: t('tab_d'),
      icon: BarChart3,
      header: t('d_header'),
      title: t('dash_title'),
      caption: t('d_event'),
      rows: [
        { status: 'red', label: t('dash_r1_label'), value: t('dash_r1_value'), note: t('dash_r1_note') },
        { status: 'green', label: t('dash_r2_label'), value: t('dash_r2_value'), note: t('dash_r2_note') },
        { status: 'amber', label: t('dash_r3_label'), value: t('dash_r3_value'), note: t('dash_r3_note') }
      ],
      note: t('d_note')
    },
    {
      kind: 'sheet',
      label: t('tab_e'),
      icon: Table2,
      header: t('e_header'),
      columns: [t('sheet_c1'), t('sheet_c2'), t('sheet_c3'), t('sheet_c4')],
      rows: [t('sheet_r1').split('|'), t('sheet_r2').split('|'), t('sheet_r3').split('|')],
      caption: t('sheet_event'),
      note: t('e_note')
    }
  ];

  const active = scenarios[tab];

  return (
    <section className="py-24 bg-white" id="assistant-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {scenarios.map((s, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                tab === i
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Interface card: same frame, different screens */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {/* Shared header */}
            <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center border border-white/10 shrink-0">
                  <Bot className="w-5 h-5 text-white/90" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm leading-none mb-1 text-white">{active.header}</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[10px] text-emerald-300 font-medium leading-none">online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <Phone className="w-4 h-4" />
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>

            {/* Screen: chat */}
            {active.kind === 'chat' && (
              <div className="bg-[#efeae2] p-4 md:p-5 space-y-3 min-h-[340px] relative">
                <div className="absolute inset-0 bg-[radial-gradient(#cfd4d6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
                <div className="relative z-10 space-y-3">
                  {active.bubbles.map((b, i) => {
                    if (b.kind === 'event') {
                      return (
                        <div key={i} className="flex justify-center">
                          <span className="bg-[#fdf3c9] text-slate-600 text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-sm text-center max-w-[90%]">
                            {b.text}
                          </span>
                        </div>
                      );
                    }
                    if (b.kind === 'attachment') {
                      return (
                        <div key={i} className="flex justify-end">
                          <span className="bg-[#d9fdd3] border border-[#c1e8b7] text-slate-700 text-xs font-bold px-3 py-2 rounded-xl shadow-sm">
                            {b.text}
                          </span>
                        </div>
                      );
                    }
                    const isAssistant = b.kind === 'assistant';
                    return (
                      <div key={i} className={`flex ${isAssistant ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`relative max-w-[85%] text-xs md:text-sm px-4 py-3 shadow-sm rounded-2xl ${
                            isAssistant
                              ? 'bg-[#d9fdd3] border border-[#c1e8b7] text-slate-800 rounded-tr-none'
                              : 'bg-white text-slate-800 rounded-tl-none'
                          }`}
                        >
                          <p className="leading-relaxed">{b.text}</p>
                          <span className="block text-right text-[10px] text-slate-400 mt-1">{b.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Screen: traffic-light dashboard */}
            {active.kind === 'dashboard' && (
              <div className="bg-slate-900 p-5 min-h-[340px] flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{active.title}</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    {active.caption}
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  {active.rows.map((row, i) => (
                    <div key={i} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${dashDot[row.status]} shrink-0`}></span>
                        <span className="text-xs font-bold text-slate-300">{row.label}</span>
                        <span className="ml-auto text-base font-black text-white">{row.value}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed pl-5">{row.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screen: mini spreadsheet */}
            {active.kind === 'sheet' && (
              <div className="bg-slate-50 p-5 min-h-[340px] flex flex-col">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-500">
                        {active.columns.map((c, i) => (
                          <th key={i} className={`px-3 py-2.5 font-bold ${i === 0 ? 'text-left' : 'text-right'}`}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {active.rows.map((row, i) => {
                        const isNew = i === active.rows.length - 1;
                        return (
                          <tr key={i} className={`border-t border-slate-100 ${isNew ? 'bg-emerald-50' : ''}`}>
                            {row.map((cell, j) => (
                              <td key={j} className={`px-3 py-2.5 ${j === 0 ? 'text-left font-bold text-slate-700' : 'text-right text-slate-600 font-mono'}`}>
                                {cell}
                                {isNew && j === row.length - 1 && (
                                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse align-middle"></span>
                                )}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-center">
                  <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-semibold px-3 py-1.5 rounded-full text-center">
                    {active.caption}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Punchline */}
          <p className="text-center text-slate-700 font-bold mt-6 text-base md:text-lg">
            {active.note}
          </p>
        </div>
      </div>
    </section>
  );
}
