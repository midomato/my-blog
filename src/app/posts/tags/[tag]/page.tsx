import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";

// 記事フォルダのパス
const postsDir = path.join(process.cwd(), "src/posts");

type Post = {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  tag: string[];
};

function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir);

  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || filename,
        date: data.date || "",
        thumbnail: data.thumbnail || "",
        tag: data.tag || [],
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA; // 新しい順
    });
}


export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const posts = getAllPosts();
  const { tag } = await params;
  const filtered = posts.filter((post) => post.tag.includes(tag));

  return (
    <>
    <h1 className="text-3xl font-bold mb-4"><span className="bg-gray-300 dark:bg-gray-600 px-2 py-1 rounded">{tag}</span> に関連する記事</h1>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filtered.map((post) => (
    <Link
      key={post.slug}
      href={`/posts/${post.slug}`}
      className="dark:bg-[#1d1f24] bg-white rounded-lg overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform"
    >
      {post.thumbnail ? (
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover"
        />
      ) : (
      <div className="w-full aspect-[16/9] bg-gray-700 flex items-center justify-center text-gray-400 text-sm">
      No Image
      </div>
      )}
      <div className="p-4 flex flex-col justify-between h-[160px]">
        <h2 className="text-xl font-semibold break-words mb-4 line-clamp-3">{post.title}</h2>
        <p className="text-gray-400 text-sm mt-auto">{post.date}</p>
      </div>
    </Link>
  ))}
</div>
</>
  );
}

