
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehyperHighlight from 'rehype-highlight'
import rehyperStringify from 'rehype-stringify'
//import html from 'remark-html'
import rehypeRaw from 'rehype-raw'
import { getAllPosts } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage({ params }: any) {
  const {slug} = await params
  const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehyperHighlight)
    .use(rehyperStringify)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <main className="prose prose-2xl mx-auto p-4">
      <h1 className="text-5xl font-bold mt-12 mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{data.date}</p>
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}