'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>ログインしていません</h1>
        <button onClick={() => signIn("google")}>Googleでログイン</button>
      </div>
    )
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>こんにちは、{session.user?.name} さん！</h1>
      <p>あなたのメールアドレスは {session.user?.email}</p>
      <button onClick={() => signOut()}>ログアウト</button>
    </div>
  )
}