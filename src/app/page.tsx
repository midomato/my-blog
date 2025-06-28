import LoadingOverlay from "@/components/LoadingOverlay";
import CustomCursor from "@/components/CustomCursor";
import RippleEffect from "@/components/Ripple";
import Link from "next/link";

export default async function Home() {
  return (
    <>
    <LoadingOverlay />
    <CustomCursor />
    <RippleEffect />
    <header className="cursor-none">
      <Link href="/posts" className="cursor-none">開発者ブログ</Link>
    </header>
    <main className="cursor-none flex min-h-screen bg-gray-300 flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
        Midot.
      </h1>
      <img src={"midot.png"}/>
    </main>
    </>
  );
}
