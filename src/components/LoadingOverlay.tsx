'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // pathname が変わるたびにローディング状態を再表示
    setVisible(true);
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 400); // フェードアウト時間

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img
        src="/midot.png"
        alt="loading"
        className="w-40 h-40 object-contain"
      />
    </div>
  );
}

