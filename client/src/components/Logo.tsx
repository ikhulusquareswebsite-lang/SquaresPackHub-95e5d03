import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 transform rotate-45">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5">
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-[#E91E8C]"></div>
          <div className="bg-black"></div>
          <div className="bg-[#E91E8C]"></div>
          <div className="bg-[#E91E8C]"></div>
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <div className="text-2xl font-bold text-black flex items-start">
          <span className="relative">
            <span className="text-black">i</span>
            <span className="absolute -top-1 left-0 w-1.5 h-1.5 bg-[#E41E3F] rounded-full"></span>
          </span>
          <span>KHULU</span>
        </div>
        <div className="text-2xl font-bold text-black">SQUARES</div>
      </div>
    </div>
  );
};