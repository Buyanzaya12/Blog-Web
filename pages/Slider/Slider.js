import { useState, useEffect } from "react";
import Image from "next/image";
import React from 'react';
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

const images = 6;

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${images}`);
        const newArticles = await response.json();
        setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      } catch (error) {
        console.error("Failed to fetch articles", error);
      }
    };

    fetchArticles();
  }, [page]);

  useEffect(() => {
    if (currentIndex === articles.length - 1) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [currentIndex, articles.length]);

  return (
    <div className="carousel w-full flex flex-col hidden md:block">
      <div className="relative mx-auto">
        {articles.length > 0 && (
          <>
            <Image
              src={articles[currentIndex]?.social_image || images[currentIndex].src}
              alt={articles[currentIndex]?.title || images[currentIndex].alt}
              width={1216}
              height={600}
              layout="responsive"
              objectFit="cover"
              className="web:w-[1216px] web:h-[600px] rounded-xl"
            />

            <div className="absolute top-[55.83%] left-[1.06%] border border-[#e8e8ea] bg-white rounded-xl web:gap-10 lg:p-8 w-[49.17%] h-[42%]">
              <p className="text-max-sm bg-[#4b6bfb] rounded-md flex items-center justify-center w-[97px] h-[28px]">
                Technology
              </p>
              
              <p className="text-[#181a2a] text-4xl md:text-2xl lg:text-3xl font-semibold">
                {articles[currentIndex]?.title || "Grid system for better Design User Interface"}
              </p>
              <p className="text-[#97989f] text-base lg:text-sm md:text-xs">
                {new Date(articles[currentIndex]?.published_at).toLocaleDateString() || "August 20, 2022"}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-end mt-2">
        <button onClick={handlePrev}>
          <Image src="/Blog-web-pics/back.svg" alt="Back" width={32} height={32} className="lg:max-w-10" />
        </button>
        <button onClick={handleNext}>
          <Image src="/Blog-web-pics/forward.svg" alt="Forward" width={32} height={32} className="lg:max-w-10" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
