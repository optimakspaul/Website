import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold text-xl">O</div>
              <span className="text-2xl font-black text-brand-dark tracking-tight">Optimaks</span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs">
              把流程理順，讓科技幫你成長。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">網站導覽</h4>
            <ul className="space-y-3 text-slate-500">
              <li><a href="#" className="hover:text-brand-blue transition-colors">關於我們</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-blue transition-colors">我們怎麼做</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">服務內容</a></li>
              <li><a href="#industries" className="hover:text-brand-blue transition-colors">適合的企業</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">資源</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4">聯絡我們</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@optimaks.com" className="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-colors">
                  <Mail className="w-4 h-4" /> hello@optimaks.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-green-500 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp 聯絡我們
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
            <a href="#" className="hover:text-slate-600">隱私權政策</a>
            <a href="#" className="hover:text-slate-600">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
