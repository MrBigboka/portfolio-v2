'use client';

import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  bio?: string;
  className?: string;
}

export function ProfileCard({ name, role, imageSrc, bio, className = '' }: ProfileCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-transparent border border-white/10 p-8 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-105">
            <Image
              src={imageSrc}
              alt={name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl font-bold text-white mb-2">
            {name}
          </h3>

          {/* Role */}
          <p className="text-purple-400 text-sm font-medium mb-4">
            {role}
          </p>

          {/* Bio */}
          {bio && (
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
