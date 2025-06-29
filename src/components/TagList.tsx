// src/components/TagList.tsx
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function TagList() {
  const posts = getAllPosts();

  const tags = Array.from(
    new Set(posts.flatMap((post) => post.tag || []))
  );

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">タグ🏷️</h2>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link
            href={`/posts`}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded no-underline"
          >
            All
          </Link>
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/posts/tags/${encodeURIComponent(tag)}`}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded no-underline"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
