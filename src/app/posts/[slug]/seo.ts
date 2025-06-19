import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadataFromSlug({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.description,
  };
}