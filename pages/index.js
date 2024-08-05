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

const inter = Inter({ subsets: ["latin"] });
const tags = [
            {value: 'all', name: "All"},
            {value: 'beginners', name: "Beginners"},
            {value: 'frontend', name: "Front-end"},
            {value: 'javascript', name: "Javascript"},
            {value: 'webdev', name: "Web-dev"}
          ];

  
export default function Home() {

const [selectedCategory, setSelectedCategory] = useState("all")

console.log({ selectedCategory });

  return (
    /* All blog post */

    <main className="m-auto flex flex-col md:w-[768px] lg:w-[1024px] web:w-[1920px] bg-white">
      
      <Header classname="px-[28.95%]"/>
      <Slider />
      <Trend />
      <p className="text-2xl font-semibold text-gray-900 p-8 h-">
        All Blog Post
      </p>
      <div className="flex text-black gap-4">
        
        {tags.map((tag) => (
          <div key={tag.value} className={`cursor-pointer font-bold hover:text-[#d4a373] ${selectedCategory === tag.value ? "" : ""}`} onClick={() => setSelectedCategory(tag.value)}>
            {tag.name}
          </div>
        ))}
      </div>
      <Content />
      <Upperfooter />
      <Footer />
    </main>
  );
}
