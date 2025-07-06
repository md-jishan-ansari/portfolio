"use client";

import { useEffect, useRef } from 'react';

interface ScrollRestorationProviderProps {
  children: React.ReactNode;
}

const ScrollRestorationProvider = ({ children }: ScrollRestorationProviderProps) => {
  const hasRestored = useRef(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;

    // Get the saved scroll position
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition && !hasRestored.current) {
      const scrollY = parseInt(savedScrollPosition, 10);

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        hasRestored.current = true;

        // Trigger scroll events to ensure intersection observers work
        setTimeout(() => {
          window.dispatchEvent(new Event('scroll'));
          // Force a resize event as well to trigger any resize-based calculations
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
    }

    // Save scroll position before unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    // Save scroll position on page visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollRestorationProvider;