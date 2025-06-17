import Image from "next/image";
import logo from "@/public/favicon.png";
import Link from "next/link";


export default function HeaderSignedOut() {
    return <>
        <header className="py-3 flex items-center w-full border-b-1 border-stone-200 fixed z-50 h-20 bg-white">
            <div className="w-1/10 md:w-2/10 px-4">
                <Link href="/"><Image src={logo} alt="logo" width={30} height={25} /></Link>
            </div>
        </header>
    </>
}