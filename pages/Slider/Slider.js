import Image from "next/image";

export function Slider() {
  return (
    <div className="mx-auto">
      <Image
        src="/Blog-web-pics/slider.png"
        width={1216}
        height={600}
        className="invisible md:visible "
      />
    </div>
  );
}
