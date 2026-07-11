"use client";

import React, { useState } from 'react';
import { CreditCard, Loader2 } from 'lucide-react';
import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';

interface CheckoutButtonProps {
  plan: 'audit' | 'setup';
  label: string;
  highlight?: boolean;
}

export default function CheckoutButton({ plan, label, highlight = false }: CheckoutButtonProps) {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    track('checkout_click', { plan });
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, locale })
      });
      const data = await res.json();
      if (data.url) {
        window.location.assign(data.url);
        return;
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer disabled:opacity-60 ${
        highlight
          ? 'bg-brand-green hover:bg-brand-green-hover text-white'
          : 'bg-white border-2 border-slate-200 hover:border-slate-400 text-slate-700'
      }`}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
      {label}
    </button>
  );
}
