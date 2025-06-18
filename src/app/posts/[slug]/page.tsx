import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const postsDir = path.join(process.cwd(), "src/posts");
  const filePath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return (
    <div className="p-4 text-white">
      {data.thumbnail && (
        <img
          src={data.thumbnail}
          alt={data.title}
          className="mb-4 w-full max-h-[400px] object-cover rounded-xl"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <div className="text-sm text-gray-400 mb-4">{data.date}</div>
      <div className="prose prose-invert">{content}</div>
    </div>
  );
}