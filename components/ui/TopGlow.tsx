'use client';

import React from 'react';

export default function TopGlow() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[400px] pointer-events-none z-[1] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] will-change-opacity">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/15 via-purple-600/8 to-transparent blur-[80px] opacity-50 animate-pulse" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/8 via-purple-500/4 to-transparent blur-[100px] opacity-30" />
      </div>
    </div>
  );
}
