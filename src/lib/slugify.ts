// lib/slugify.ts
export function slugify(str: string): string {
  return str
    .normalize('NFKD') // Unicode正規化
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/[\u0300-\u036f]/g, '') // 記号を消す
    .replace(/[^\w\s-]/g, '') // 記号を除去
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
}