import React from 'react';

const ServerAnimation = () => {
  return (
    <svg viewBox="0 0 400 300" className="animated-servers w-full h-full">
      <defs>
        <linearGradient id="serverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3498DB' }} />
          <stop offset="100%" style={{ stopColor: '#2980B9' }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="50" y="80" width="80" height="140" rx="8" fill="url(#serverGradient)" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="150" y="60" width="80" height="160" rx="8" fill="url(#serverGradient)" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="250" y="90" width="80" height="130" rx="8" fill="url(#serverGradient)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;1;0.9" dur="3.5s" repeatCount="indefinite" />
      </rect>

      <g className="server-lights">
        <circle cx="70" cy="100" r="3" fill="#27AE60" filter="url(#glow)">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="100" r="3" fill="#E74C3C">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="100" r="3" fill="#F39C12">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="170" cy="80" r="3" fill="#27AE60" filter="url(#glow)">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="80" r="3" fill="#27AE60">
          <animate attributeName="opacity" values="1;0.2;1" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="110" r="3" fill="#27AE60" filter="url(#glow)">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="110" r="3" fill="#3498DB">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </g>

      <g className="data-flow" stroke="#FF6B35" strokeWidth="2" fill="none" opacity="0.8">
        <path d="M130 150 Q 200 120 270 150">
          <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M130 170 Q 200 200 270 170">
          <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </path>
      </g>

      <g className="floating-icons text-xs" style={{ fontFamily: 'FontAwesome' }}>
        <g transform="translate(100,40)">
          <circle cx="0" cy="0" r="15" fill="rgba(255,255,255,0.1)" stroke="#FF6B35" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0;10,-10;0,0" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="5" textAnchor="middle" fill="#FF6B35">⚡</text>
        </g>
        <g transform="translate(300,40)">
          <circle cx="0" cy="0" r="15" fill="rgba(255,255,255,0.1)" stroke="#27AE60" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0;-10,-5;0,0" dur="4s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="5" textAnchor="middle" fill="#27AE60">🔒</text>
        </g>
        <g transform="translate(200,250)">
          <circle cx="0" cy="0" r="15" fill="rgba(255,255,255,0.1)" stroke="#3498DB" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0;15,5;0,0" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <text x="0" y="5" textAnchor="middle" fill="#3498DB">☁</text>
        </g>
      </g>
    </svg>
  );
};

export default ServerAnimation;
