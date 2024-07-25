import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider/Slider";
import { Trend } from "@/components/Trend/Trend";
import { Content } from "@/components/Content/Content";
import { Upperfooter } from "@/components/Upperfooter/Upperfooter";
import { Footer } from "@/components/Footer/Footer";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman")
         .then((response) => {
            return response.json();
            })
      .then((data) => {
        setArticles(data);
      });
}, []);
  return (
      /* All blog post */
    <div className="container">
    <div className="grid web:grid-cols-3 md:grid-cols-2 gap-2">
      
     
      {articles.map((item) => (
        <div key={item.id} className="shadow-lg card bg-base-100">
          
          <div className="card-body">
          <Image src={item.social_image} width={360} height={240} />
          <Link href={item.url} target="_blank"> 
           {item.title}
           </Link>
           </div>
          </div>
      ))}
      </div>
      <main className="mx-auto w-[390px] max-w-[1920px] bg-white">
    <Header />
    <div className="w-[325px] mx-auto">
    <Slider />
    <Trend />
    <Content />
    <Upperfooter />
    <Footer />
    </div>
  </main>
    // </div>
  )
};