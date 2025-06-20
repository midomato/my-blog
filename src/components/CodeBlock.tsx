"use client"

import { useEffect } from "react"

export default function CodeBlock() {
  useEffect(() => {
    const blocks = document.querySelectorAll("pre > code")

    blocks.forEach((block) => {
      const pre = block.parentElement
      if (!pre) return

      // すでにボタンがある場合はスキップ
      if (pre.querySelector(".copy-button")) return

      const button = document.createElement("button")
      button.innerText = "📋"
      button.className =
        "copy-button absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"

      button.onclick = async () => {
        try {
          await navigator.clipboard.writeText(block.textContent || "")
          button.innerText = "✅"
          setTimeout(() => {
            button.innerText = "📋"
          }, 1500)
        } catch {
          button.innerText = "❌"
        }
      }

      pre.style.position = "relative"
      pre.appendChild(button)
    })
  }, [])

  return null
}
