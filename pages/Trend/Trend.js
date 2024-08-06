import Image from "next/image";
import React from 'react';
export function Trend() {
  return (
    <div className="mx-auto md:m-0">
      <p className="text-2xl font-semibold text-gray-900 p-8 md:p-0 md:mt-5">Trending</p>
      <Image
        src="/Blog-web-pics/Pic-1.png"
        width={325}
        height={320}
        className="md:invisible md:w-0"
      />

      <Image
        src="/Blog-web-pics/Pic-1.png"
        width={289}
        height={320}
        className="rounded-xl mx-auto mt-8 md:invisible md:w-0"
      />
    </div>
  );
}
export default Trend;