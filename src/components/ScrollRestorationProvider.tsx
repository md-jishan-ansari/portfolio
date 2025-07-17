"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollRestorationProviderProps {
  children: React.ReactNode;
}

const ScrollRestorationProvider = ({ children }: ScrollRestorationProviderProps) => {
  const hasRestored = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // On route change, scroll to top
    window.scrollTo(0, 0);
    hasRestored.current = false; // Reset restoration flag for new page
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Restore scroll position only on popstate (back/forward)
    const handlePopState = () => {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition && !hasRestored.current) {
        const scrollY = parseInt(savedScrollPosition, 10);
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
          hasRestored.current = true;
        });
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Save scroll position before unload or visibility change
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollRestorationProvider;