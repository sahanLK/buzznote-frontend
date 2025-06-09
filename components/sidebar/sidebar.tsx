import { MdOutlineCampaign } from "react-icons/md";
import SidebarItem from "./SidebarItems";
import { ImHome } from "react-icons/im";
import { FaWpforms } from "react-icons/fa";
import { BiSolidGroup } from "react-icons/bi";
import { IoAnalytics } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";


export default function Sidebar() {
    return (
        <>
            <button className="flex items-center text-stone-600 text-sm border-1 rounded-md px-5 py-1 border-stone-300 w-full mb-6">
                <CiEdit size={20} /> <span className="pl-3 text-sm">Create</span>
            </button>

            <div className="pl-2">
                <SidebarItem Icon={ImHome} text="Home" />
                <SidebarItem Icon={MdOutlineCampaign} text="Campaigns" />
                <SidebarItem Icon={BiSolidGroup} text="Audience" />
                <SidebarItem Icon={FaWpforms} text="Forms" />
                <SidebarItem Icon={IoAnalytics} text="Analytics" />
            </div>

            <div className="mt-auto fixed bottom-0 mb-20 w-full">
                <Link href="/plans" className="bottom-0 px-7 text-lg font-light py-3 bg-green-700 text-white rounded-md">Upgrade Plan</Link>
            </div>
        </>
    )
}