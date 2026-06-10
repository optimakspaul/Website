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

        <div className="grid grid-cols-2 min-[400px]:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-3 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-center text-center md:items-start md:text-left aspect-square md:aspect-auto justify-center md:justify-start">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-5 ${point.bg} ${point.color} group-hover:scale-110 transition-transform shadow-sm`}>
                <point.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[13px] sm:text-sm md:text-lg font-bold text-slate-800 md:mb-2 leading-tight">{point.title}</h3>
              <p className="hidden md:block text-slate-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
