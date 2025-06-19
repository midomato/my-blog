// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-700 py-6 text-center text-sm text-gray-400">
      <div className="space-x-4">
        <Link href="https://note.com/midomato" target="_blank">note</Link>
        <Link href="https://qiita.com/midomato" target="_blank">Qiita</Link>
        <Link href="https://zenn.dev/midomato" target="_blank">Zenn</Link>
        <Link href="https://x.com/botjanaiyoda" target="_blank">X</Link>
        <Link href="https://atcoder.jp/users/midomato" target="_blank">Atcoder</Link>
      </div>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-500">
        &copy; 2025 Midomato. All rights reserved.
      </p>
    </footer>
  );
}
