import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export function Header() {
  let [open, setOpen] = useState(true);

  function openMenu() {
    setOpen(true);
  }
  function closeMenu() {
    setOpen(false);
  }
  return (
    <div className="flex items-center py-5 lg:gap-[118px] md:justify-between w-full max-w-screen px-[352px]">
      <div className="flex flex-wrap items-center">
        <Image src="blog-web-pics/Union.svg" width={36} height={36} />
        <p className="text-black text-base ">
          Meta<span class="font-bold">Blog</span>
        </p>
      </div>

      <div className="md:visible invisible text-black flex gap-[40px]">
        {navigations.map((nav) => (
          <Link key={nav.link} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="relative flex items-center invisible md:visible">
        <input
          placeholder="Search"
          className="bg-gray-100 rounded-[5px] py-2 px-4"
        />
        <button className="absolute ml-[180px]">
          <Image
            src="/blog-web-pics/search-outline.svg"
            width={16}
            height={16}
          />
        </button>
      </div>

      <button onClick={openMenu} className="md:invisible md:w-0">
        <Image
          src="blog-web-pics/menu-outline.svg"
          width={32}
          height={32}
          className=""
        />
      </button>

      <div>
        <div
          className={`fixed top-0 bottom-0 transition-all w-[320px] text-black bg-white shadow-lg ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <button onClick={closeMenu} className="">
            close
          </button>

          <div className="text-black flex flex-col text-base p-[16px] gap-[16px]">
            <div className="relative flex items-center">
              <input
                placeholder="Search"
                className="bg-gray-100 rounded-[5px] py-2 px-4"
              />
              <button className="absolute ml-[180px]">
                <Image
                  src="/blog-web-pics/search-outline.svg"
                  width={16}
                  height={16}
                />
              </button>
            </div>
            {navigations.map((nav) => (
              <Link key={nav.link} href={nav.link}>
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-3 text-base text-gray-900 w-0 opacity-0">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
            </div> */}
        {/* <input className="opacity-0 w-0">
                
            </input> */}
      </div>
    </div>

  );
}
