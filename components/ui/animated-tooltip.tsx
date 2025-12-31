"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-start gap-2 flex-wrap">
      {items.map((item) => (
        <div
          className="group relative"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 shadow-xl whitespace-nowrap"
              >
                <div className="text-white text-xs font-medium">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="w-12 h-12 rounded-full border-2 border-zinc-700 bg-zinc-800 flex items-center justify-center overflow-hidden transition-transform hover:scale-110 hover:z-10 cursor-pointer">
            <Image
              src={item.image}
              alt={item.name}
              width={28}
              height={28}
              className="w-7 h-7 object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
