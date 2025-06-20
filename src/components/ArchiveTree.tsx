'use client'

import { useState } from 'react'
import Link from 'next/link'

type ArchiveTreeProps = {
  archive: {
    [year: number]: {
      [month: number]: {
        title: string
        slug: string
        date: string
      }[]
    }
  }
}

export default function ArchiveTree({ archive }: ArchiveTreeProps) {
  const [openYears, setOpenYears] = useState<number[]>([])
  const [openMonths, setOpenMonths] = useState<string[]>([]) // key: `${year}-${month}`

  const toggleYear = (year: number) => {
    setOpenYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    )
  }

  const toggleMonth = (year: number, month: number) => {
    const key = `${year}-${month}`
    setOpenMonths(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    )
  }

  return (
    <div className="text-sm dark:text-wihte mt-4">
      <h2 className="text-lg font-bold mb-2">アーカイブ</h2>
      <ul>
        {Object.entries(archive)
          .sort((a, b) => Number(b[0]) - Number(a[0])) // 新しい年が上
          .map(([yearStr, months]) => {
            const year = Number(yearStr)
            const total = Object.values(months).reduce((sum, posts) => sum + posts.length, 0)

            return (
              <li key={year}>
                <button onClick={() => toggleYear(year)} className="font-semibold hover:underline">
                  {openYears.includes(year) ? '▼' : '▶'} {year} ({total})
                </button>
                {openYears.includes(year) && (
                  <ul className="ml-4 mt-1">
                    {Object.entries(months)
                      .sort((a, b) => Number(b[0]) - Number(a[0]))
                      .map(([monthStr, posts]) => {
                        const month = Number(monthStr)
                        const key = `${year}-${month}`
                        return (
                          <li key={key}>
                            <button onClick={() => toggleMonth(year, month)} className="hover:underline">
                              {openMonths.includes(key) ? '▼' : '▶'} {month}月 ({posts.length})
                            </button>
                            {openMonths.includes(key) && (
                              <ul className="ml-4 mt-1">
                                {posts.map(post => (
                                  <li key={post.slug}>
                                    <Link href={`/posts/${post.slug}`} className="hover:underline block">
                                      • {post.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )
                      })}
                  </ul>
                )}
              </li>
            )
          })}
      </ul>
    </div>
  )
}
