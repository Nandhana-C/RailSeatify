import Head from "next/head";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-90px)] bg-white w-full">
      <Head>
        <title>RailSeatify</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/3faf7fd3d7.js" crossorigin="anonymous" async ></script>
      </Head>
      <main className="w-full">
        {/* <div className="flex flex-col items-center justify-center w-full  h-full">
          <h1 className="text-6xl font-bold text-black">
            Welcome to <a href="https://nextjs.org">RailSeatify!</a>
          </h1>
        </div>       */}
        <Hero/>
      </main>
    </div>
  )
}
