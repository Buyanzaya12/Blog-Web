import Upperfooter from "@/pages/Upperfooter/Upperfooter";
import Header from "@/pages/Header/Header";
import Footer from "@/pages/Footer/Footer";

export function MainLayout({ children }) {
    return <div className="mx-auto flex flex-col web:px-[352px] md:px-[40px] lg:px-[40px] md:w-[768px] lg:w-[1024px] web:w-[1920px] bg-gradient-to-r from-[#ae8b9c] to-[#8baaaa]">
        <div><Header/></div>
        {children}
    <div><Upperfooter/></div>
    {/* <div className="divide-y divide-[#dcdddf] divide-solid outline-1"></div> */}
    <div><Footer/></div>
    </div>
}