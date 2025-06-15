import Image from "next/image";
import logo from "@/public/favicon.png";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header() {
    return <>
        <header className="py-3 flex items-center w-full border-b-1 border-stone-200 fixed z-50 h-20 bg-white">
            <div className="w-1/10 md:w-2/10 px-4">
                <Link href="/"><Image src={logo} alt="logo" width={30} height={25} /></Link>
            </div>

            <div className="w-7/10 md:w-6/10">
                <SearchBar placeholder="Search Buzznote" onFocusPlaceHolder="What can we help you find today?" className="w-full" />
            </div>

            <div className="w-2/10 md:w-2/10 px-4">
                <div className="w-12 h-12 ml-auto bg-green-100 text-stone-700 rounded-full flex items-center justify-center text-2xl border-1 border-green-200">
                    A
                </div>
            </div>
        </header>
    </>
}