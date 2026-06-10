import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold text-xl">O</div>
              <span className="text-2xl font-black text-brand-dark tracking-tight">Optimaks</span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs">
              {t('slogan')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">{t('nav_title')}</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t('nav_about')}</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-blue transition-colors">{t('nav_how')}</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">{t('nav_services')}</a></li>
              <li><a href="#industries" className="hover:text-brand-blue transition-colors">{t('nav_who')}</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">{t('nav_resources')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">{t('contact_title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@optimaks.com" className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors">
                  <Mail className="w-4 h-4" /> hello@optimaks.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" /> {t('contact_wa')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Optimaks. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-slate-600">{t('privacy')}</a>
            <a href="#" className="hover:text-slate-600">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
