"use client";

import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingCTA() {
  const t = useTranslations('FinalCTA');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    // 1. Handle scroll distance for initial show
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Handle overlap with specific sections using IntersectionObserver
    // We observe workflow-check, final-cta, and footer to hide the floating CTA when they are on screen.
    const observer = new IntersectionObserver((entries) => {
      // If any of the observed elements are intersecting the viewport
      const anyVisible = entries.some(entry => entry.isIntersecting);
      setIsOverlapping(anyVisible);
    }, { 
      root: null, 
      threshold: 0, // Trigger as soon as 1 pixel is visible
      rootMargin: "50px 0px 50px 0px" // Slight margin to hide it slightly before it overlaps
    });

    // We can observe by id. FinalCTA and Footer don't have ids, so let's observe industries and the bottom
    const elementsToObserve = [
      document.getElementById('workflow-check'),
      document.getElementById('pain-points') // Optional: if we want to show it here
    ];

    // Alternatively, we can select by element type if we know what we want to avoid.
    // Let's just reliably observe 'workflow-check'
    const workflowEl = document.getElementById('workflow-check');
    if (workflowEl) observer.observe(workflowEl);

    // Let's also observe the footer to hide it at the bottom
    const footerEl = document.querySelector('footer');
    if (footerEl) observer.observe(footerEl);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const isVisible = isScrolled && !isOverlapping;

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
