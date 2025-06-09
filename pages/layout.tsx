import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
import { ReactNode } from "react";

type PropType = {
    children: ReactNode;
}

export default function RootLayout({ children }: PropType) {
    return <>
        <div className="w-full">
            <Header />

            <div className="flex h-screen pt-20 z-10">
                <div className="w-[240px] px-3 py-6 border-r-1 border-stone-200 overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    </>
}