"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  const navItems = [
    { label: t('about'), href: '#' },
    { label: t('how'), href: '#how-it-works' },
    { label: t('services'), href: '#services' },
    { label: t('who'), href: '#industries' },
    { label: t('cases'), href: '#' },
    { label: t('resources'), href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-start h-20 relative">
          
          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-[#0070f3] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                O
              </div>
              <span className="font-black text-2xl text-slate-800 tracking-tight">Optimaks</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center ml-8 gap-4">
            <div className="flex items-center gap-1.5 bg-slate-100/50 px-2.5 py-1.5 rounded-lg border border-slate-200/60">
              <Globe className="w-4 h-4 text-slate-500" />
              <select 
                value={locale} 
                onChange={handleLanguageChange}
                className="bg-transparent text-sm font-medium text-slate-600 outline-none cursor-pointer"
              >
                <option value="zh-TW">繁體中文</option>
                <option value="zh-CN">简体中文</option>
                <option value="en">English</option>
              </select>
            </div>
            <a href="#workflow-check" className="bg-brand-green hover:bg-brand-green-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-0.5">
              {t('cta')}
            </a>
          </div>

          <div className="lg:hidden flex items-center ml-auto gap-3 relative z-20">
            <div className="flex items-center gap-1 bg-slate-100/50 px-2 py-1.5 rounded-lg border border-slate-200/60">
              <Globe className="w-4 h-4 text-slate-500" />
              <select 
                value={locale} 
                onChange={handleLanguageChange}
                className="bg-transparent text-xs font-medium text-slate-600 outline-none cursor-pointer"
              >
                <option value="zh-TW">繁中</option>
                <option value="zh-CN">简中</option>
                <option value="en">EN</option>
              </select>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-100 shadow-xl px-4 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-700 hover:text-brand-blue">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 mt-4 border-t border-slate-100">
            <a href="#workflow-check" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md">
              {t('cta')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
