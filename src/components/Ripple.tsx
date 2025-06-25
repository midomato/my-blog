'use client'

import { useEffect, useState } from 'react'

type Ripple = {
  x: number
  y: number
  id: number
}

export default function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = (e: MouseEvent) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    }
    setRipples((prev) => [...prev, newRipple])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600) // 波紋の消える時間
  }

  useEffect(() => {
    document.addEventListener('click', addRipple)
    return () => document.removeEventListener('click', addRipple)
  }, [])

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
    </>
  )
}
