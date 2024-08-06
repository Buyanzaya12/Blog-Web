import { Header } from "@/pages/Header/Header";
import { Slider } from "@/pages/Slider/Slider";
import { Trend } from "@/pages/Trend/Trend";
import { Content } from "@/pages/Content/Content";
import { Upperfooter } from "@/pages/Upperfooter/Upperfooter";
import { Footer } from "@/pages/Footer/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    /* All blog post */

    <main className="m-auto flex flex-col md:w-[768px] lg:w-[1024px] web:w-[1920px] bg-white">
      <Header />

      <Slider />
      <Trend />
      <Content />
      <Upperfooter />
      <Footer />
    </main>
  );
}
