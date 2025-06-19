import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
};

export type ArchiveTree = {
  [year: number]: {
    [month: number]: {
      title: string;
      slug: string;
      date: string;
    }[];
  };
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir);

  return files
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || filename,
        date: data.date || "",
        thumbnail: data.thumbnail || "",
      };
    })
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getArchiveMap(): Map<string, number> {
  const posts = getAllPosts()
  const archiveMap = new Map<string, number>() // key: '2025年6月', value: 件数

  posts.forEach(post => {
    const date = new Date(post.date)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const key = `${year}年${month}月`

    archiveMap.set(key, (archiveMap.get(key) || 0) + 1)
  })

  return archiveMap
}

// 記事アーカイブ
export function getArchiveTree(): ArchiveTree {
  const posts = getAllPosts();
  const tree: ArchiveTree = {};

  posts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    if (!tree[year]) tree[year] = {};
    if (!tree[year][month]) tree[year][month] = [];

    tree[year][month].push({
      title: post.title,
      slug: post.slug,
      date: post.date,
    });
  });

  return tree;
}