import Link from "next/link";
import { IoList } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";

export default function CampaignsPage() {
    return (
        <>
            <div className="title py-6 border-b-1 border-stone-200">
                <div className="container mx-auto flex items-center">
                    <h1 className="font-semibold text-2xl">All Campaigns</h1>
                    <div className="ml-auto">
                        <Link href="/analytics" className="px-3 py-2 border-1 border-stone-300 rounded text-stone-700 text-sm mr-5">View analytics</Link>
                        <Link href="/campaigns/create" className="bg-[#017e89] text-white px-3 py-2 text-sm rounded">Create</Link>
                    </div>
                </div>
            </div>

            <div className="title py-3 border-b-1 border-stone-200">
                <div className="container mx-auto flex items-center">
                    <ul className="flex gap-8 text-stone-600">
                        <li className="flex items-center"><IoList className="pr-2" size={25} />List</li>
                        <li className="flex items-center"><LuCalendar className="pr-2" size={25} />Calendar</li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#f8fafb] mx-auto">
                <div className="max-w-[1200px] mx-auto h-screen py-10">
                    Somthing
                </div>
            </div>
        </>
    )
}