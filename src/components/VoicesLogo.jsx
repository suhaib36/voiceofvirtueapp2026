import React from 'react';

export const VoicesLogo = ({ size = "md", subtitle, className = "" }) => {
  const getLogoHeight = () => {
    switch (size) {
      case "sm":
        return "h-8";
      case "lg":
        return "h-12";
      case "xl":
        return "h-16";
      default:
        return "h-10";
    }
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Voices of Virtue H.O.P.E. Logo Image */}
      <img
        src="/logo.png"
        alt="Voices of Virtue H.O.P.E."
        className={`${getLogoHeight()} w-auto object-contain drop-shadow-xs transition-transform hover:scale-102`}
      />

      {/* Subtitle / Screen context */}
      {subtitle && (
        <div className="flex flex-col leading-tight border-l border-purple-200/80 pl-2.5 ml-0.5">
          <span className="font-bold text-slate-900 tracking-tight text-sm font-serif">
            Voices of Virtue
          </span>
          <span className="text-[11px] font-semibold text-brand-700 capitalize">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
};
