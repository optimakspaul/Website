import React from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

interface WhatsAppWorkflowCardProps {
  incomingTitle: string;
  customerMessage: string;
  flowTitle: string;
  steps: string[];
  compact?: boolean;
  className?: string;
}

export default function WhatsAppWorkflowCard({
  incomingTitle,
  customerMessage,
  flowTitle,
  steps,
  compact = false,
  className = ''
}: WhatsAppWorkflowCardProps) {
  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl ${className} ${compact ? 'p-4' : 'p-6'}`}>
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            {incomingTitle}
          </span>
        </div>
        <MessageSquare className="w-3.5 h-3.5 text-slate-600" />
      </div>

      <div className="space-y-4">
        {/* WhatsApp Message Bubble */}
        <div className="flex justify-start">
          <div className="relative max-w-[85%] bg-slate-850 border border-slate-800 text-slate-300 text-xs md:text-sm px-4 py-3 rounded-2xl rounded-tl-none font-sans shadow-md">
            {/* Tiny bubble tail representation */}
            <div className="absolute top-0 left-0 -translate-x-[4px] w-2 h-2 bg-slate-850 border-l border-t border-slate-800 transform rotate-[45deg] rounded-tl-sm hidden md:block"></div>
            <p className="leading-relaxed font-medium italic text-emerald-400">
              "{customerMessage}"
            </p>
          </div>
        </div>

        {/* Optimaks Flow Response */}
        <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 shadow-inner">
          <div className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>{flowTitle}</span>
          </div>
          
          <div className={`grid ${compact ? 'grid-cols-2 gap-2' : 'grid-cols-1 md:grid-cols-2 gap-3'}`}>
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-900/60 border border-slate-850 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-bold text-[11px] md:text-xs leading-none">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
