"use client";

import { useState } from "react";
import { PostMeta } from "@/lib/posts";

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
      <div key={post.slug} className="p-4 border rounded">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    ))}
  </div>
)}

    </div>
  );
}
