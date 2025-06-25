'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = dotRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 200,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 mix-blend-difference"
    />
  );
}
