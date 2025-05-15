'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

export default function Toast({ 
  message, 
  isVisible, 
  onClose, 
  duration = 3000,
  type = 'success'
}: ToastProps) {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isVisible) {
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, onClose, duration]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Check size={18} className="text-green-400" />;
      case 'error':
        return <X size={18} className="text-red-400" />;
      case 'info':
      default:
        return null;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-[#0A1220] to-[#0F1729] border-l-4 border-[#D9A441]';
      case 'error':
        return 'bg-gradient-to-r from-[#0A1220] to-[#0F1729] border-l-4 border-red-500';
      case 'info':
      default:
        return 'bg-gradient-to-r from-[#0A1220] to-[#0F1729] border-l-4 border-blue-500';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-6 left-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-md shadow-lg ${getBgColor()} backdrop-blur-md max-w-md`}
        >
          {getIcon()}
          <p className="text-white text-sm font-medium">{message}</p>
          <button 
            onClick={onClose}
            className="ml-2 p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={16} className="text-white/70" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Hook pour utiliser le toast facilement dans n'importe quel composant
export function useToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('success');
  
  const showToast = (newMessage: string, newType: 'success' | 'error' | 'info' = 'success') => {
    setMessage(newMessage);
    setType(newType);
    setIsVisible(true);
  };
  
  const hideToast = () => {
    setIsVisible(false);
  };
  
  const toastComponent = (
    <Toast 
      message={message} 
      isVisible={isVisible} 
      onClose={hideToast} 
      type={type}
    />
  );
  
  return { showToast, hideToast, toastComponent };
}
