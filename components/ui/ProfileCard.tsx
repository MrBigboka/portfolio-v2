'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  title: string;
  handle?: string;
  status?: 'Online' | 'Offline' | 'Away';
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

export default function ProfileCard({
  name,
  title,
  handle,
  status = 'Online',
  contactText = 'Contact Me',
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  className = '',
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt) return;
    if (!enableMobileTilt && window.innerWidth < 768) return;
    
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const statusColors = {
    Online: 'bg-green-500',
    Offline: 'bg-gray-500',
    Away: 'bg-yellow-500',
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent border border-white/10 p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Profile Image with Status */}
          <div className="relative mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
              <Image
                src={avatarUrl}
                alt={name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Status Indicator */}
            {status && (
              <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full ${statusColors[status]} ring-4 ring-black`} />
              </div>
            )}
          </div>

          {/* User Info */}
          {showUserInfo && (
            <>
              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {name}
              </h3>

              {/* Handle */}
              {handle && (
                <p className="text-gray-400 text-sm mb-2">
                  @{handle}
                </p>
              )}

              {/* Title */}
              <p className="text-purple-400 text-sm font-medium mb-6">
                {title}
              </p>
            </>
          )}

          {/* Contact Button */}
          {onContactClick && (
            <motion.button
              onClick={onContactClick}
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {contactText}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
