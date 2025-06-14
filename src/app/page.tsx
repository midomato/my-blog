import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function PostListPage() {
  const posts = await getAllPosts()

  return (
    <main className="post-list-page max-w-6xl mx-auto px-4 py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 list-none" style={{padding:0}}>
        {posts.map((post) => (
          <li key={post.slug} className="bg-[#272B34] rounded-lg p-4 border border-white/10 transform transition-transform duration-200 hover:scale-[1.005]">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{post.date}</p>
            <div className="flex gap-10 text-sm text-gray-400 mt-0.5">
              {post.tag?.map((tag: string) => (
                <Link href={`/tags/${tag}`} key={tag}>
                <div className="relative group w-12 h-12">
                  <img src={`/tag-icons/${tag}.png`} style={{width: 'auto', height: '20px', marginLeft: '10px'}} />
                  <div className="absolute left-full top-1/2 translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
                    {tag}
                    </div>
                  </div>
                  </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}