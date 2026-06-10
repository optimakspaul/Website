"use client";

import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingCTA() {
  const t = useTranslations('FinalCTA'); // Let's reuse FinalCTA dictionary for this button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isEnoughScrolled = scrollY > 300;
      
      // 判斷 workflow-check 是否在畫面上
      const workflowSection = document.getElementById('workflow-check');
      let isWorkflowVisible = false;
      if (workflowSection) {
        const rect = workflowSection.getBoundingClientRect();
        // 當區塊的頂部進入畫面，且底部還沒離開畫面時，代表該區塊正在畫面上
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isWorkflowVisible = true;
        }
      }

      // 判斷是否接近頁面底部 (隱藏以免擋住 FinalCTA 或 Footer)
      const isNearBottom = (window.innerHeight + scrollY) >= document.body.offsetHeight - 500;

      // 當滾動超過 300px，且不在 workflow 區塊，也不在頁尾時，才顯示按鈕
      if (isEnoughScrolled && !isWorkflowVisible && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化檢查
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use generic transition classes for smooth fade in/out
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pb-6 pt-10 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
    >
      <a 
        href="#workflow-check" 
        className="w-full bg-[#0070f3] hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-[17px] transition-all shadow-[0_8px_30px_rgb(0,112,243,0.3)] flex items-center justify-center gap-2"
      >
        <Rocket className="w-5 h-5" /> {t('btn')}
      </a>
    </div>
  );
}
