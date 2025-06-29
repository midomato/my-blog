"use client";

import { useState } from "react";
import { PostMeta } from "@/lib/posts";
import Link from "next/link";

export default function SearchBar({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="検索..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded mb-4"
      />
      {query && (
        <div className="flex flex-col sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
            <div className="p-4 border rounded transition transform hover:scale-102">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
            </Link>
          ))}
        </div>
)}

    </div>
  );
}
