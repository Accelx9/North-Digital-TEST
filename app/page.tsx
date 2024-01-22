import { Navbar } from "@/components/Navbar";
import { FirstSection, Landing, SecondSection } from "@/sections/public";
import Head from "next/head";

export default function Home() {
  return (
    <main className="h-full w-full overflow-hidden ">
      <Navbar />
      <Head>
        <title>Home</title>
      </Head>
      <Landing />
      <FirstSection />
      <SecondSection />
      {/* <div className="h-20 bg-primary w-full"></div> */}
    </main>
  );
}
