import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { generateMetadataFromSlug } from "./seo";
import { extractTocFromMarkdown } from '@/lib/parseToc'
import TableOfContents from '@/components/TableOfContents'
import CodeBlock from "@/components/CodeBlock";

export const generateMetadata = generateMetadataFromSlug;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "src/posts");
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const toc = extractTocFromMarkdown(content);

  const htmlContent = await markdownToHtml(content);

 return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
      {/* 左側：目次（ToC） */}
      <aside className="hidden lg:block w-64 bg-[#FDFDFD] dark:bg-[#1E2939] rounded-xl sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <h2 className="font-bold px-4">目次</h2>
        <TableOfContents toc={toc} />
      </aside>

      {/* 右側：記事本文 */}
      <article className="flex-1 max-w-3xl mx-auto">
        <div className="text-sm text-gray-400 mb-4">{data.date}</div>
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        {data.thumbnail && (
          <img
            src={data.thumbnail}
            alt={data.title}
            className="mb-4 w-full max-w-3xl aspect-[16/9] object-cover rounded-xl mx-auto"
          />
        )}
        <div
          className="prose prose-invert max-w-none [&_h1]:scroll-mt-24 [&_h2]:scroll-mt-24"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <CodeBlock />
      </article>
    </div>
  );
}