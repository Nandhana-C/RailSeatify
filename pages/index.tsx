import Head from "next/head";


export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Head>
        <title>RailSeatify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-6xl font-bold">
            Welcome to <a href="https://nextjs.org">RailSeatify!</a>
          </h1>
        </div>      
      </main>
    </div>
  )
}
