import Image from "next/image";
import logo from "@/public/favicon.png";
import SearchBar from "./SearchBar";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useEffect, useRef, useState } from "react";


export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    function handleClickOutside(e: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [open]);

    return <>
        <header className="py-3 flex items-center w-full border-b-1 border-stone-200 fixed z-50 h-20 bg-white">
            <div className="w-1/10 md:w-2/10 px-4">
                <Link href="/"><Image src={logo} alt="logo" width={30} height={25} /></Link>
            </div>

            <div className="w-7/10 md:w-6/10">
                <SearchBar placeholder="Search Buzznote" onFocusPlaceHolder="What can we help you find today?" className="w-full" />
            </div>

            <div className="w-2/10 md:w-2/10 px-4 my-4">
                <DropdownMenu />
            </div>
        </header>
    </>
}