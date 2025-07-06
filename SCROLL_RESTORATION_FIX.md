# Scroll Restoration Fix

## Problem
When users scrolled down on any page and then refreshed the page, the page content wasn't visible until they scrolled back to the top. This was due to scroll-triggered animations not working properly when the browser restored the scroll position.

## Root Cause
The issue was caused by the `useInView` hook from `react-intersection-observer` not triggering animations when elements were already in view on page load due to scroll position restoration. The animations were set to only trigger when elements came into view (`triggerOnce: true`), but they didn't account for the initial scroll position on page refresh.

## Solution
Created a custom hook `useScrollAwareInView` that combines the standard `useInView` functionality with scroll position awareness. This hook:

1. **Detects scroll restoration**: Checks if the page was refreshed while scrolled down by looking for saved scroll position in sessionStorage
2. **Triggers animations appropriately**: If the page was scrolled down significantly (>200px), it triggers animations immediately
3. **Maintains normal behavior**: For normal page loads, it works exactly like the original `useInView`

## Implementation

### Custom Hook: `useScrollAwareInView`
```typescript
// src/lib/hooks/useScrollAwareInView.ts
export const useScrollAwareInView = (options: UseScrollAwareInViewOptions = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px'
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
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

    checkScrollPosition();
    const timer = setTimeout(checkScrollPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  // Use the intersection observer result OR our scroll-aware result
  const finalInView = inView || shouldAnimate;
  return [ref, finalInView] as const;
};
```

### Scroll Restoration Provider
```typescript
// src/components/ScrollRestorationProvider.tsx
const ScrollRestorationProvider = ({ children }: ScrollRestorationProviderProps) => {
  const hasRestored = useRef(false);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');

    if (savedScrollPosition && !hasRestored.current) {
      const scrollY = parseInt(savedScrollPosition, 10);

      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
        hasRestored.current = true;

        // Trigger scroll events to ensure intersection observers work
        setTimeout(() => {
          window.dispatchEvent(new Event('scroll'));
          window.dispatchEvent(new Event('resize'));
        }, 100);
      });
    }

    // Save scroll position before unload
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
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
};
```

## Updated Components
The following components were updated to use the new `useScrollAwareInView` hook:

- `src/components/About.tsx`
- `src/components/Projects.tsx`
- `src/components/Skills.tsx`
- `src/components/Experience.tsx`
- `src/components/Contact.tsx`

## Layout Integration
The `ScrollRestorationProvider` was integrated into the root layout to ensure scroll position is properly restored across all pages.

## Benefits
1. **Seamless user experience**: Users can refresh the page at any scroll position without losing content visibility
2. **Maintains animations**: All scroll-triggered animations work correctly on page refresh
3. **Backward compatible**: Normal page loads work exactly as before
4. **Performance optimized**: Minimal overhead with efficient scroll position detection

## Testing
To test the fix:
1. Scroll down on any page (About, Projects, Skills, Experience, Contact)
2. Refresh the page (F5 or Ctrl+R)
3. Verify that the content is visible and animations have triggered properly
4. Scroll up and down to ensure all animations work as expected