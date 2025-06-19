'use client'

import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, isBefore } from 'date-fns'
import Link from 'next/link'

type Props = {
  posts: { date: string; slug: string }[]
}

export default function Calendar({ posts }: Props) {
  const today = new Date()
  const start = startOfMonth(today)
  const end = endOfMonth(today)
  const days = eachDayOfInterval({ start, end })

  const postMap = new Map<string, string>()
  posts.forEach(post => {
    const key = format(new Date(post.date), 'yyyy-MM-dd')
    postMap.set(key, post.slug)
  })

  const padding = Array(getDay(start)).fill(null)

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">カレンダー</h2>
      <div className="grid grid-cols-7 gap-1 text-sm text-center">
        {['日', '月', '火', '水', '木', '金', '土'].map((d) => (
          <div key={d} className="font-semibold">{d}</div>
        ))}
        {padding.map((_, i) => <div key={`pad-${i}`} />)}

        {days.map((day) => {
          const key = format(day, 'yyyy-MM-dd')
          const slug = postMap.get(key)
          const dayNum = format(day, 'd')

          const isToday = isSameDay(day, today)
          const isPast = isBefore(day, today)

          let className = "w-7 h-7 flex items-center justify-center rounded-full"
          if (isToday) {
            className += " bg-lime-500 text-black"
          } else if (slug) {
            className += " bg-yellow-400 text-black"
          } else if (isPast) {
            className += " bg-red-500 text-white"
          } else {
            className += " text-gray-400"
          }

          return (
            <div key={key}>
              {slug ? (
                <Link href={`/posts/${slug}`}>
                  <span className={className}>{dayNum}</span>
                </Link>
              ) : (
                <span className={className}>{dayNum}</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
