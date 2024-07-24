import Image from "next/image";
export function Header() {
    return (
        <div className="flex items-center">
            <Image src="blog-web-pics/Union.svg" width={36} height={36} />
            <p className="text-black text-base ">Meta<span class="font-bold">Blog</span></p>
            <div className="grid grid-cols-3 text-base text-gray-900">
                <p>Home</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <input>
                
            </input>
        </div>
    )
}

