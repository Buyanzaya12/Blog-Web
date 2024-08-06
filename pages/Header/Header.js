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
    <div className="flex items-center p-5 md:py-8 web:gap-x-[118px] justify-between w-full mx-auto">
      <div className="flex flex-wrap items-center md:flex-1">
        <Image src="blog-web-pics/Union.svg" width={30} height={30} className="mobile:w-9 mobile:h-9" />
        <p className="text-black text-lg mobile1:text-xl  ">
          Meta<span class="font-bold">Blog</span>
        </p>
      </div>

      <div className="md:visible invisible mobile:w-0 text-black flex gap-[40px] md:flex-1">
        {navigations.map((nav) => (
          <Link key={nav.link} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="relative flex items-center hidden md:flex-1 md:flex md:block">
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

      <button onClick={openMenu} className="md:invisible md:w-0 flex flex-1 justify-end">
        <Image
          src="blog-web-pics/menu-outline.svg"
          width={32}
          height={32}
          className="w-[32px] h-[32px]"
        />
      </button>

      <div>
        <div
          className={`fixed top-0 bottom-0 transition-all w-[320px] text-black bg-white shadow-lg ${open ? "right-0" : "-right-full"
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
