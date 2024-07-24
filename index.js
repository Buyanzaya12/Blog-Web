import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider/Slider";
import { Trend } from "@/components/Trend/Trend";
import { Content } from "@/components/Content/Content";
import { Upperfooter } from "@/components/Upperfooter/Upperfooter";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
  <main className="mx-auto max-w-[1920px] bg-white">
    <Header />
    <Slider />
    <Trend />
    <Content />
    <Upperfooter />
    <Footer />
  </main>
  );
}