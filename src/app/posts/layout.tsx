import Calendar from "@/components/Calendar";
import { getAllPosts, getArchiveTree } from "@/lib/posts";
import ArchiveTree from "@/components/ArchiveTree";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  const posts = getAllPosts();
  const archiveTree = getArchiveTree();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row px-4 lg:px-2 py-6 gap-6">
      <main className="flex-1">{children}</main>

      <aside className="w-70 bg-gray-800 p-4 rounded-lg sticky top-8 h-fit">
        {/* 検索 */}
        <input
          type="text"
          placeholder="検索..."
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />

        {/* アーカイブ */}
        <ArchiveTree archive={archiveTree} />

        {/* カレンダー */}
        <Calendar posts={posts.map(p => ({ date: p.date, slug: p.slug }))}/>

        {/* タグカテゴリ（オプション） */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">タグ🏷️</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-2 py-1 rounded">unity</span>
            <span className="bg-gray-700 px-2 py-1 rounded">blender</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
