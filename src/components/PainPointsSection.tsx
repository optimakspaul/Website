import React from 'react';
import { FileStack, BellOff, Clock, CalendarX2, SearchX, Receipt, DatabaseZap } from 'lucide-react';

const painPoints = [
  {
    icon: FileStack,
    title: '太多 Paperwork',
    description: '文件、報價、表格都要人工整理，容易漏掉。',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: BellOff,
    title: '詢價容易漏',
    description: '詢價散落在 WhatsApp 裡，很難追蹤與管理。',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    title: '報價太慢',
    description: '人工整理資料、製作報價，耗時又容易出錯。',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: CalendarX2,
    title: '排程很亂',
    description: '改日期、換人手都靠人工處理，常常前後混亂。',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: SearchX,
    title: '工單追蹤困難',
    description: '狀態不透明，客戶一問，員工也難以交接。',
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
  },
  {
    icon: Receipt,
    title: '付款追蹤困難',
    description: '付款、發票、收款都要人工提醒與追蹤。',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    icon: DatabaseZap,
    title: '資料太分散',
    description: '資料散在不同工具，查詢與分析都很耗時。',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
];

export default function PainPointsSection() {
  return (
    <section className="py-20 bg-white" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            你的公司是不是也卡在這些地方？
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            日常營運中，看似微小的手動流程，往往累積成巨大的時間與成本浪費。
          </p>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${point.bg} ${point.color} group-hover:scale-110 transition-transform`}>
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{point.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-8 snap-x snap-mandatory flex gap-4 no-scrollbar">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm min-w-[280px] snap-center shrink-0">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${point.bg} ${point.color}`}>
                <point.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">{point.title}</h3>
              <p className="text-slate-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
