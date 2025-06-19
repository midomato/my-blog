'use client'

type TocItem = {
  id: string
  text: string
  depth: number
}

export default function TableOfContents({ toc }: { toc: TocItem[] }) {
  return (
    <nav className="relative pl-6 border-l-2 border-purple-500 text-sm">
      {toc.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block relative mb-3 ml-${item.depth === 2 ? '4' : '0'}`}
        >
          <span
            className={`
              absolute -left-3 top-1.5 w-3 h-3
              rounded-full border-2
              ${item.depth === 1 ? 'bg-black border-pink-500' : 'bg-black border-lime-400'}
            `}
          />
          {item.text}
        </a>
      ))}
    </nav>
  )
}
