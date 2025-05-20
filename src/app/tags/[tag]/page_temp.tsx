export const dynamic = 'force-static'

import { getAllPosts } from '@/lib/posts'
import { slugify } from '@/lib/slugify'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const tags = posts.flatMap(post => post.tag || [])
  const uniqueTags = [...new Set(tags.map(tag => slugify(tag)))]
  return uniqueTags.map(tag => ({ tag }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function TagFilteredPage({ params }: any) {
  const decodedTag = await Promise.resolve(decodeURIComponent(params.tag ?? ""))
  const allPosts = getAllPosts()

  const filteredPosts = allPosts.filter(post =>
    post.tag?.some(tag => slugify(tag) === slugify(decodedTag))
  )

  const originalTagName =
    allPosts.flatMap(post => post.tag || []).find(tag => slugify(tag) === slugify(decodedTag))
    || decodedTag

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-red-500 text-6xl font-bold bg-black">タグ: {originalTagName}</h1>
      <ul className="space-y-4">
        {filteredPosts.map(post => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}