import { MainLayout } from "@/components/MainLayout";
import Image from "next/image";
export default function Error() {
    return <MainLayout>
        <div className="mx-auto flex gap-10 py-[100px]">
            <p className="text-black text-7xl">404</p>
            <div className="bg-[#e8e8ea] w-[1px]"></div>
            <div className="flex flex-col gap-5">
                <p className="text-black text-2xl">Page Not Found</p>
                <p className="text-[#696a75] text-lg">We're sorry, This page is unknown or does<br></br> not exist the page you are looking for.</p>
            </div>
        </div>
    </MainLayout>

}