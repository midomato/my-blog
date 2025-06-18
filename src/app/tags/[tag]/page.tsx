import Link from "next/link";

const allPosts = [
  { slug: "first", title: "はじめての記事", tag: ["tech", "blender"] },
  { slug: "maya-tricks", title: "Mayaの裏技", tag: ["maya"] },
  { slug: "sound-log", title: "音楽制作ログ", tag: ["game"] },
];

export default async function TagPage({
  params,
}: {
  params: { tag: string };
}) {
  const { tag } = await params; // ← ここがv15で必須

  const posts = allPosts.filter((post) => post.tag.includes(tag));

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Tag: {tag}</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-400 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function generateStaticParams() {
  const tagSet = new Set(allPosts.flatMap((post) => post.tag));
  return Array.from(tagSet).map((tag) => ({ tag }));
}