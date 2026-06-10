import React from 'react';
import { Stethoscope, Webhook, AppWindow, RefreshCcw } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: '流程健檢',
    description: '盤點目前作業流程，找出最花時間、最容易漏掉、最值得優先優化的工作環節。',
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
    border: 'border-teal-100'
  },
  {
    icon: Webhook,
    title: '自動化整合',
    description: '透過 n8n、AI、Email、Google Sheet、表單、Calendar、CRM 等工具，串接重複性工作。',
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    icon: AppWindow,
    title: '輕量系統導入',
    description: '建立 CRM、報價流程、工單追蹤、付款提醒、Dashboard 或內部管理系統。',
    color: 'text-brand-purple',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  },
  {
    icon: RefreshCcw,
    title: '持續優化',
    description: '導入後持續觀察使用狀況，協助調整流程、改善效率，讓系統隨著企業成長。',
    color: 'text-brand-green',
    bg: 'bg-green-50',
    border: 'border-green-100'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            我們提供的服務
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            針對中小企業的特性，提供輕量、彈性且高投資報酬率的解決方案。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 border ${service.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
