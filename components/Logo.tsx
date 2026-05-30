
import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", textColor = "text-brand-brown" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="relative h-full aspect-square flex-shrink-0">
      <svg viewBox="0 0 48 48" className="w-full h-full" role="img" aria-label="Pocket Khata">
        <rect x="2" y="2" width="44" height="44" rx="12" fill="#C9302B" />
        {/* gold rupee mark */}
        <text x="24" y="33" textAnchor="middle" fill="#F7B92C" fontSize="26" fontWeight="600" fontFamily="Outfit, sans-serif">₹</text>
      </svg>
    </div>
    <span className={`text-[1.35rem] font-semibold tracking-[-0.02em] ${textColor}`}>Pocket Khata</span>
  </div>
);

export default Logo;
