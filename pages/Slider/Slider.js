import Image from "next/image";

export function Slider() {
  return (
    <div className="mx-auto relative invisible md:visible w-0 md:w-full md:h-full">
      <Image src="/Blog-web-pics/slider.png" width={1216} height={600} />
      <div className="p-10 flex flex-col web:gap-6 md:gap-2 lg:gap-4 md:p-4 lg:p-8 absolute top-[55.83%] left-[1.06%] border border-[#e8e8ea] bg-white rounded-xl w-[49.17%] h-[42%]">
        <p className="text-max-sm bg-[#4b6bfb] rounded-md flex items-center justify-center w-[97px] h-[28px]">
          Technology
        </p>
        <p className="text-[#181a2a] text-4xl md:text-2xl lg:text-3xl font-semibold">
          Grid system for better <br></br>Design User Interface
        </p>
        <p className="text-[#97989f] web:text-base lg:text-sm md:text-xs">
          August 20, 2022
        </p>
      </div>
    </div>
  );
}
