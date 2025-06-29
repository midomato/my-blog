import Calendar from "@/components/Calendar";
import { getAllPosts, getArchiveTree } from "@/lib/posts";
import ArchiveTree from "@/components/ArchiveTree";
import TagList from "@/components/TagList";
import SearchBar from "@/components/SearchBar";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const posts = getAllPosts();
  const archiveTree = getArchiveTree();
  return (
    <div className="min-h-screen flex flex-col lg:flex-row px-4 lg:px-2 py-6 gap-6">
      <main className="flex-1">{children}</main>

      <aside className="w-70 bg-[#fdfdfd] dark:bg-gray-800 p-4 rounded-lg sticky top-8 h-fit">
        {/* 検索 */}
        <SearchBar posts={posts} />

        {/* アーカイブ */}
        <ArchiveTree archive={archiveTree} />

        {/* カレンダー */}
        <Calendar posts={posts.map(p => ({ date: p.date, slug: p.slug }))}/>

        {/* タグカテゴリ */} 
        <TagList />

      </aside>
    </div>
  );
}
