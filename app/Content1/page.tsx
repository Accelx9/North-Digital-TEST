import { Navbar } from "@/components";
import Head from "next/head";
import Image from "next/image";
import BackGround from "@/assets/images/Background-landing.webp";
import React from "react";

const Page = () => {
  return (
    <main className="bg-white flex flex-1 w-full h-full">
      <Navbar />
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full h-full relative"></div>
    </main>
  );
};

export default Page;
