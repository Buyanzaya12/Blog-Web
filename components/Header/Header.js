import Image from "next/image";
export function Header() {
    return (
        <div className="flex items-center p-5 justify-between">
            <div className="flex flex-wrap items-center">
            <Image src="blog-web-pics/Union.svg" width={36} height={36} />
            <p className="text-black text-base ">Meta<span class="font-bold">Blog</span></p>
            </div>
            <Image src="blog-web-pics/menu-outline.svg" width={32} height={32} className="flex justify-end"/>
            {/* <div className="grid grid-cols-3 text-base text-gray-900 w-0 opacity-0">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
            </div> */}
            {/* <input className="opacity-0 w-0">
                
            </input> */}
        </div>
    )
}

