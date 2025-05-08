
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function PostListPage() {
  const posts = getAllPosts()

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">技術ブログ一覧</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}