'use client'

type TocItem = {
  id: string
  text: string
  depth: number
}

export default function TableOfContents({ toc }: { toc: TocItem[] }) {
  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <nav className="relative pl-6 border-l-2 border-purple-500 text-sm space-y-2">
      {toc.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={handleClick(item.id)}
          className={`flex items-center gap-2 ml-${item.depth === 2 ? '4' : '0'}`}
        >
          <span
            className={`
              w-3 h-3 rounded-full border-2 flex-shrink-0
              ${item.depth === 1 ? 'border-pink-500' : 'border-lime-400'}
            `}
          />
          {item.text}
        </a>
      ))}
    </nav>
  )
}
