import Image from "next/image";
export function Trend() {
    return (
        <div className="">
            <p className="text-2xl font-semibold text-gray-900 p-8">Trending</p>
            <Image src="/blog-web-pics/Pic-1.png" width={325} height={320} className="md:invisible md:w-0"/>
            <div>
                <Image src="/blog-web-pics/Pic-1.png" width={289} height={320} className="rounded-xl mx-auto mt-8 md:invisible md:w-0"/>

            </div>
            </div>
    );
}