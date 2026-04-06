'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type FontSizeKey = 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl';

interface FontSizeOption {
  key: FontSizeKey;
  label: string;
  scale: number;
  description: string;
}

export const FONT_SIZE_OPTIONS: FontSizeOption[] = [
  { key: 'xs', label: 'Extra Small', scale: 0.85, description: 'Compact view with smaller text' },
  { key: 'sm', label: 'Small', scale: 0.925, description: 'Slightly smaller than default' },
  { key: 'default', label: 'Default', scale: 1, description: 'Standard font size' },
  { key: 'md', label: 'Medium', scale: 1.03, description: 'A touch larger than default' },
  { key: 'lg', label: 'Large', scale: 1.075, description: 'Slightly larger than default' },
  { key: 'xl', label: 'Extra Large', scale: 1.15, description: 'Maximum readability' },
];

const FONT_SIZE_STORAGE_KEY = 'oreko-font-size';

interface FontSizeContextValue {
  fontSize: FontSizeKey;
  setFontSize: (size: FontSizeKey) => void;
}

const FontSizeContext = createContext<FontSizeContextValue>({
  fontSize: 'default',
  setFontSize: () => {},
});

export function useFontSize() {
  return useContext(FontSizeContext);
}

function applyFontSize(key: FontSizeKey) {
  const option = FONT_SIZE_OPTIONS.find((o) => o.key === key) ?? FONT_SIZE_OPTIONS[2]!;
  document.documentElement.style.setProperty('--font-size-scale', String(option.scale));
}

function isValidFontSize(v: unknown): v is FontSizeKey {
  return typeof v === 'string' && FONT_SIZE_OPTIONS.some((o) => o.key === v);
}

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSizeKey>('default');

  useEffect(() => {
    const stored = localStorage.getItem(FONT_SIZE_STORAGE_KEY);
    if (isValidFontSize(stored)) {
      setFontSizeState(stored);
      applyFontSize(stored);
    }
  }, []);

  const setFontSize = useCallback((size: FontSizeKey) => {
    setFontSizeState(size);
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, size);
    applyFontSize(size);
  }, []);

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}
