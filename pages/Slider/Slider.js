import { useState } from "react";
import Image from "next/image";
import React from 'react';

const images = [
  { src: "/Blog-web-pics/slider.png", alt: "Slider Image" },
  { src: "/Blog-web-pics/cherryblossom.png", alt: "Cherry Blossom" },
  { src: "/Blog-web-pics/praguecastle.png", alt: "Prague Castle" },
  { src: "/Blog-web-pics/sunset.png", alt: "Sunset" }
];

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel w-full flex flex-col hidden md:block">
      <div className="relative mx-auto">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1216}
          height={600}
          layout="responsive"
          objectFit="cover"
          className="web:w-[1216px] web:h-[600px]"
        />

        <div className="absolute top-[55.83%] left-[1.06%] border border-[#e8e8ea] bg-white rounded-xl p-4 lg:p-8 w-[49.17%] h-[42%]">
          <p className="text-max-sm bg-[#4b6bfb] rounded-md flex items-center justify-center w-[97px] h-[28px]">
            Technology
          </p>
          <p className="text-[#181a2a] text-4xl md:text-2xl lg:text-3xl font-semibold">
            Grid system for better <br />Design User Interface
          </p>
          <p className="text-[#97989f] text-base lg:text-sm md:text-xs">
            August 20, 2022
          </p>
        </div>
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