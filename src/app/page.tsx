export default async function Home() {
  return (
    <main className="flex min-h-screen bg-gray-300 flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
        Midot.は全てが適当ですが諦めません。多分
      </h1>
      <img src={"/main/PCplay.gif"} />
    </main>
  );
}
