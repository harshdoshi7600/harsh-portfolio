
import { useEffect, useRef } from "react";

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

/**
 * Hook to add scroll-triggered animations to elements
 */
export const useScrollAnimation = ({ 
  threshold = 0.1, 
  rootMargin = "0px", 
  once = true 
}: AnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("animated");
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return ref;
};
