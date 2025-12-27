
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <div className={`flex items-center space-x-3 ${className}`}>
    <div className="relative w-12 h-12 flex-shrink-0">
      {/* The Red Pocket Base */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <path d="M10 30 Q10 20 20 20 L80 20 Q90 20 90 30 L90 70 Q90 90 50 95 Q10 90 10 70 Z" fill="#D23430" />
        <rect x="30" y="5" width="40" height="40" rx="4" fill="#F7B92C" />
        <text x="50" y="32" textAnchor="middle" fill="#4A0E0C" fontSize="24" fontWeight="bold" fontFamily="Arial">₹</text>
        <rect x="40" y="38" width="20" height="2" fill="#4A0E0C" />
        <text x="50" y="70" textAnchor="middle" fill="white" fontSize="40" fontWeight="800" fontFamily="Inter">P</text>
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-2xl font-extrabold tracking-tight text-brand-red">Pocket Khata</span>
    </div>
  </div>
);

export default Logo;
