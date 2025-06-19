import GithubSlugger from 'github-slugger'

export type TocItem = {
  id: string
  text: string
  depth: number
}

export function extractTocFromMarkdown(markdown: string): TocItem[] {
  const lines = markdown.split('\n')
  const toc: TocItem[] = []
  const slugger = new GithubSlugger()

  for (const line of lines) {
    const match = line.match(/^(#{1,2})\s+(.*)/) // h1 or h2
    if (match) {
      const depth = match[1].length
      const text = match[2].trim()
      const id = slugger.slug(text) // ← rehype-slug と一致する
      toc.push({ id, text, depth })
    }
  }

  return toc
}
