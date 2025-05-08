
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}


export default async function PostPage(props: { params: { slug: string } }) {
  const { slug } = await Promise.resolve(props.params)
  // ↑ 型レベルでPromiseとして扱われる問題を吸収

  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return (
    <main className="prose mx-auto p-4">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}