import React from 'react';

export const SectionLabel: React.FC<{ text: string, className?: string }> = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
      <span className="text-sm font-semibold tracking-widest uppercase text-muted">
        {text}
      </span>
    </div>
  );
};
