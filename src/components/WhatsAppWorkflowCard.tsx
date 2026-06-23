import React from 'react';
import { CheckCircle2, User, Phone, MoreVertical } from 'lucide-react';

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
    <div className={`bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 ${className}`}>
      
      {/* WhatsApp Green Header */}
      <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          {/* Avatar representation */}
          <div className="w-9 h-9 rounded-full bg-slate-200/20 flex items-center justify-center text-white border border-white/10 shrink-0">
            <User className="w-5 h-5 text-white/90" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm md:text-base leading-none mb-1 text-white">
              {incomingTitle}
            </h4>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="text-[10px] md:text-xs text-emerald-300 font-medium leading-none">online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white/90">
          <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* WhatsApp Style Chat Area */}
      <div className="bg-[#efeae2] p-4 md:p-6 space-y-4 min-h-[180px] relative">
        {/* Subtle grid layout representation of WA background */}
        <div className="absolute inset-0 bg-[radial-gradient(#cfd4d6_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 space-y-4">
          {/* Customer Left Chat Bubble (Incoming) */}
          <div className="flex justify-start">
            <div className="relative max-w-[85%] bg-white text-slate-800 text-xs md:text-sm px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
              {/* Bubble Tail */}
              <div className="absolute top-0 left-0 -translate-x-[4px] w-2 h-2 bg-white transform rotate-[45deg] rounded-tl-sm"></div>
              <p className="leading-relaxed font-bold text-slate-800">
                "{customerMessage}"
              </p>
            </div>
          </div>

          {/* Optimaks Right Chat Bubble (Automated Flow Response) */}
          <div className="flex justify-end">
            <div className="relative max-w-[90%] bg-[#d9fdd3] text-slate-850 text-xs md:text-sm px-4 py-4 rounded-2xl rounded-tr-none shadow-sm border border-[#c1e8b7]">
              {/* Bubble Tail */}
              <div className="absolute top-0 right-0 translate-x-[4px] w-2 h-2 bg-[#d9fdd3] border-r border-t border-[#c1e8b7] transform rotate-[45deg] rounded-tr-sm"></div>
              
              <div className="text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
                {flowTitle}
              </div>
              
              <div className={`grid ${compact ? 'grid-cols-2 gap-2' : 'grid-cols-1 md:grid-cols-2 gap-2.5'}`}>
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white/70 border border-[#b2ddab]/40 px-2.5 py-1.5 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-slate-800 font-extrabold text-[10px] md:text-xs leading-none">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
