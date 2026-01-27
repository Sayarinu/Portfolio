import { createContext, useContext, useState, ReactNode } from 'react';

interface EffectsContextType {
  scanlines: boolean;
  crtEffect: boolean;
  toggleScanlines: () => void;
  toggleCRT: () => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

interface EffectsProviderProps {
  children: ReactNode;
}

export function EffectsProvider({ children }: EffectsProviderProps) {
  const [scanlines, setScanlines] = useState(true);
  const [crtEffect, setCrtEffect] = useState(true);

  const toggleScanlines = () => setScanlines(prev => !prev);
  const toggleCRT = () => setCrtEffect(prev => !prev);

  return (
    <EffectsContext.Provider value={{ scanlines, crtEffect, toggleScanlines, toggleCRT }}>
      {children}
    </EffectsContext.Provider>
  );
}

export function useEffects(): EffectsContextType {
  const context = useContext(EffectsContext);
  if (context === undefined) {
    throw new Error('useEffects must be used within an EffectsProvider');
  }
  return context;
}
