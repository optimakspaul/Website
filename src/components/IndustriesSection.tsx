import React from 'react';
import { Snowflake, Sparkles, Wrench, Truck, Calculator, Briefcase, Building2, CheckCircle2 } from 'lucide-react';

const industries = [
  { name: '冷氣 / Aircon', icon: Snowflake },
  { name: '清潔 / Cleaning', icon: Sparkles },
  { name: '維修 / Repair', icon: Wrench },
  { name: '物流 / Logistics', icon: Truck },
  { name: '會計 / Accounting', icon: Calculator },
  { name: '顧問服務', icon: Briefcase },
  { name: '其他服務型 SME', icon: Building2 },
];

const conditions = [
  '仍大量依賴 WhatsApp、Excel、Email 和人工追蹤',
  '想導入 AI 或自動化，但不知道從哪裡開始',
  '不想一次導入大型系統，只想先解決最痛流程'
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">
              適合的企業
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Optimaks 適合已經有穩定業務，但日常流程開始變得混亂的中小企業。如果你的團隊花太多時間在「管理工作」而不是「執行工作」，我們就能幫上忙。
            </p>
            
            <div className="space-y-4 mb-8">
              {conditions.map((condition, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium">{condition}</p>
                </div>
              ))}
            </div>
            
            <div className="hidden lg:block">
              <a href="#workflow-check" className="text-brand-blue font-bold hover:text-brand-dark transition-colors inline-flex items-center gap-2">
                看看我們能怎麼幫你 <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white border-2 border-slate-100 hover:border-brand-blue hover:shadow-md px-5 py-3 rounded-full transition-all cursor-default">
                  <industry.icon className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-slate-700">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
