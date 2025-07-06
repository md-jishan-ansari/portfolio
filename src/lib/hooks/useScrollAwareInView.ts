import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface UseScrollAwareInViewOptions {
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAwareInView = (options: UseScrollAwareInViewOptions = {}) => {
  const {
    triggerOnce = true,
    threshold = 0.1,
    rootMargin = '0px'
  } = options;

  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
    rootMargin,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;

    const checkScrollPosition = () => {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');

      if (savedScrollPosition) {
        const scrollY = parseInt(savedScrollPosition, 10);

        // If we're scrolled down significantly, trigger animation
        if (scrollY > 200) {
          setShouldAnimate(true);
        }
      }
    };

    // Check immediately
    checkScrollPosition();

    // Also check after a short delay to handle any timing issues
    const timer = setTimeout(checkScrollPosition, 100);

    return () => clearTimeout(timer);
  }, []);

  // Use the intersection observer result OR our scroll-aware result
  const finalInView = inView || shouldAnimate;

  return [ref, finalInView] as const;
};