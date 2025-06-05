'use client';

import { useEffect, useState } from 'react';

export function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    }

    window.addEventListener('scroll', updateScrollCompletion);
    
    return () => {
      window.removeEventListener('scroll', updateScrollCompletion);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200 dark:bg-neutral-800">
      <div
        style={{ width: `${completion}%` }}
        className="h-full bg-neutral-800 dark:bg-neutral-200 transition-all duration-100"
      />
    </div>
  );
} 