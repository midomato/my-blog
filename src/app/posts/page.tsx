
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function PostListPage() {
  const posts = await getAllPosts()

  return (
    <main className="post-list-page max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6"><span style={{color: 'green'}}>Midot.</span>技術ブログ一覧</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
            <div className="flex gap-10 text-sm text-gray-400 mt-0.5">
              {post.tag?.map((tag: string) => (
                <Link href={`/tags/${tag}`} key={tag}>
                <span
                  style={{
                  marginRight: '8px',
                  padding: '4px 8px',
                  backgroundColor: '#2f4f4f',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  color: '#eee',
                  }}
                  >
                    {tag}
                  </span>
                  </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}