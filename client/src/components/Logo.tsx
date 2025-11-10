import React from 'react';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = '', onClick }) => {
  // Create a 10x10 grid pattern
  // Black squares on the left, magenta/pink on the right
  const createSquares = () => {
    const squares = [];
    const gridSize = 10;
    
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Determine if this square should be black or magenta
        // Diagonal split: if col > row, it's magenta, otherwise black
        const isMagenta = col > row;
        const color = isMagenta ? 'bg-[#E91E8C]' : 'bg-black';
        
        squares.push(
          <div key={`${row}-${col}`} className={color}></div>
        );
      }
    }
    
    return squares;
  };

  return (
    <div className={`flex items-center gap-3 ${className}`} onClick={onClick}>
      {/* Diamond logo with 10x10 grid */}
      <div className="relative w-16 h-16 transform rotate-45">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-[2px] bg-white p-[2px]">
          {createSquares()}
        </div>
      </div>
      
      {/* Company name */}
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