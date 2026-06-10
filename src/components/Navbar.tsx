import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: '關於我們', href: '#' },
    { label: '我們怎麼做', href: '#how-it-works' },
    { label: '服務內容', href: '#services' },
    { label: '適合的企業', href: '#industries' },
    { label: '成功案例', href: '#' },
    { label: '資源', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center text-white font-bold text-xl">O</div>
            <span className="text-2xl font-black text-brand-dark tracking-tight">Optimaks</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a href="#workflow-check" className="bg-brand-green hover:bg-brand-green-hover text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-brand-green/30 hover:shadow-brand-green/50 hover:-translate-y-0.5">
              開始 1 分鐘流程檢查
            </a>
          </div>

          <div className="lg:hidden flex items-center">
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
              開始 1 分鐘流程檢查
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
