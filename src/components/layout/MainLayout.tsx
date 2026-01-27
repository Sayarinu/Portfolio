import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Scanlines } from '../effects/Scanlines';
import { CRTEffect } from '../effects/CRTEffect';
import { useEffects } from '../../contexts/EffectsContext';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { scanlines, crtEffect } = useEffects();
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {scanlines && <Scanlines />}
      {crtEffect && <CRTEffect />}
      
      <Header />
      
      <main className="flex-1 relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}