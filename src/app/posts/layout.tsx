export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row px-4 lg:px-8 py-6 gap-6">
      <main className="flex-1">{children}</main>

      <aside className="w-70 bg-gray-800 p-4 rounded-lg sticky top-8 h-fit">
        {/* 検索 */}
        <input
          type="text"
          placeholder="検索..."
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />

        {/* 年月ごとの分類（仮） */}
        <div>
          <h2 className="text-lg font-bold mb-2">記事アーカイブ</h2>
          <ul className="text-sm text-gray-300">
            <li>2025年6月（3件）</li>
            <li>2025年5月（2件）</li>
            {/* 本当は自動で出したいけど最初はハードコーディングでOK */}
          </ul>
        </div>

        {/* タグカテゴリ（オプション） */}
        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">タグ</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-2 py-1 rounded">#tech</span>
            <span className="bg-gray-700 px-2 py-1 rounded">#game</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
