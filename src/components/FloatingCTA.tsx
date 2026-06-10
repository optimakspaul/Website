"use client";

import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingCTA() {
  const t = useTranslations('FinalCTA'); // Let's reuse FinalCTA dictionary for this button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-gradient-to-t from-white via-white/90 to-transparent pb-6 pt-10">
      <a 
        href="#workflow-check" 
        className="w-full bg-[#0070f3] hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-[17px] transition-all shadow-[0_8px_30px_rgb(0,112,243,0.3)] flex items-center justify-center gap-2"
      >
        <Rocket className="w-5 h-5" /> {t('btn')}
      </a>
    </div>
  );
}
