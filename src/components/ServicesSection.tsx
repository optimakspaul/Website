import React from 'react';
import { Stethoscope, Webhook, AppWindow, RefreshCcw } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    {
      icon: Stethoscope,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      color: 'text-brand-teal',
      bg: 'bg-teal-50',
      border: 'border-teal-100'
    },
    {
      icon: Webhook,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      color: 'text-brand-blue',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      icon: AppWindow,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      color: 'text-brand-purple',
      bg: 'bg-purple-50',
      border: 'border-purple-100'
    },
    {
      icon: RefreshCcw,
      title: t('service_4_title'),
      description: t('service_4_desc'),
      color: 'text-brand-green',
      bg: 'bg-green-50',
      border: 'border-green-100'
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            {t('section_title')}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t('section_subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`bg-white rounded-2xl p-6 md:p-8 border ${service.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 md:mb-6 ${service.bg} ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px] md:text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
