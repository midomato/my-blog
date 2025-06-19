import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { generateMetadataFromSlug } from "./seo";

export const generateMetadata = generateMetadataFromSlug;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "src/posts");
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const htmlContent = await markdownToHtml(content);

  return (
    <div className="p-4 text-white">
        <div className="text-sm text-gray-400 mb-4">{data.date}</div>
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>  
        {data.thumbnail && (
            <img
            src={data.thumbnail}
            alt={data.title}
            className="mb-4 w-200 aspect-[16/9] object-cover rounded-xl"
            />
        )}
        <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
}