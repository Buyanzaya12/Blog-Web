import Image from "next/image";
import React from 'react';
export function Footer() {
  return (
    <div className="flex justify-between border-t border-t-[#dcdddf]">
      <div className="flex py-6">
        <Image src="Blog-web-pics/Union.svg" width={48} height={48} />
        <div className=" text-black">
          <p className="text-xl">
            Meta<span className="font-extrabold">Blog</span>
          </p>
          <p className="text-base"> &copy; All Rights Reserved.</p>
        </div>
      </div>
      <div className="text-base text-[#3b3c4a] flex gap-4">
        <button>Terms of Use</button>
        <button>Privacy Policy</button>
        <button>Cookie Policy</button>
      </div>
    </div>
  );
}
export default Footer;