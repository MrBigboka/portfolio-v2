import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 70,
  className = '',
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-blink ml-0.5"></span>
      )}
    </span>
  );
};

export default TypewriterEffect;
