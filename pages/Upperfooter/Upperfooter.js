import Image from "next/image";
import Link from "next/link";
import React from 'react';

const navigations = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export function Upperfooter() {
  return (
    <div className="flex flex mr-[240px] mx-auto">
      <div className="flex-1">
        <p className="text-lg font-semibold text-black">About</p>
        <p className="text-base text-[#696a75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <p className="text-[#3b3c4a] text-base">
          <span className="text-[#181a2a] text-base font-semibold">
            Email :{" "}
          </span>
          info@jstemplate.net
        </p>
        <p className="text-[#3b3c4a] text-base">
          <span className="text-[#181a2a] text-base font-semibold">
            Phone :{" "}
          </span>
          880 123 456 789
        </p>
      </div>
      <div className="text-[#3b3c4a] flex-1 flex flex-col">
        {navigations.map((nav) => (
          <Link key={nav.link} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-1 gap-[27px]">
        <Image
          src="/Blog-web-pics/fb.svg"
          className="w-[16px]"
          width={16}
          height={16}
        />
        <Image
          src="/Blog-web-pics/x.svg"
          className="w-[16px]"
          width={16}
          height={16}
        />
        <Image
          src="/Blog-web-pics/ig.svg"
          className="w-[16px]"
          width={16}
          height={16}
        />
        <Image
          src="/Blog-web-pics/ln.svg"
          className="w-[16px]"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
export default Upperfooter;