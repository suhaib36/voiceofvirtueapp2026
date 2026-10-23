import React from 'react';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Toast = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  const getIcon = () => {
    switch (toastMessage.type) {
      case 'info':
        return <Info size={18} className="text-blue-500" />;
      case 'warning':
        return <AlertCircle size={18} className="text-amber-500" />;
      default:
        return <CheckCircle2 size={18} className="text-emerald-500" />;
    }
  };

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-none transition-all animate-bounce-short">
      <div className="bg-slate-900/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-700/50 flex items-center gap-3">
        {getIcon()}
        <span className="text-xs sm:text-sm font-medium tracking-tight">
          {toastMessage.message}
        </span>
      </div>
    </div>
  );
};
