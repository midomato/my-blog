"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100) // ← 100px以上スクロールで固定
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isSticky ? "fixed top-0 bg-[#111] shadow border-b border-white/10" : "relative bg-transparent"
      }`}
    >
      <h1 className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-4xl font-extrabold tracking-tight no-underline">Midot.</Link><img src={`/images/PCplay.gif`} style={{height: "100px"}}/>
      </h1>
    </header>
  )
}
