'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import '../../app/theme-toggle.css';

export function FancyThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // Éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true);
    // Utiliser resolvedTheme pour obtenir le thème réellement appliqué
    const isDark = resolvedTheme === 'dark';
    setIsChecked(isDark);
    
    // Forcer l'application du thème au niveau du document
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setIsChecked(newTheme === 'dark');
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input 
          id="theme" 
          className="theme__toggle" 
          type="checkbox" 
          role="switch" 
          name="theme" 
          value="dark"
          checked={isChecked}
          onChange={toggleTheme}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </label>
  );
}
