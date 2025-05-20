import fs from 'fs'
import Link from 'next/link'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehyperHighlight from 'rehype-highlight'
import rehyperStringify from 'rehype-stringify'
//import html from 'remark-html'
import rehypeRaw from 'rehype-raw'
import { getAllPosts } from '@/lib/posts'
import { CodeCopyButtons } from "@/components/CodeCopyButtons";

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostPage(props: any) {
  const params = await props.params;
  const {slug} = params
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

      {data.tag && (
        <div className="flex flex-wrap gap-2 mt-2 mb-8">
          {data.tag.map((tag: string) => (
            <Link href={`/tags/${tag}`} key={tag}>
            <span
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full shadow-sm"
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
      )}
      <CodeCopyButtons />
      <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  )
}