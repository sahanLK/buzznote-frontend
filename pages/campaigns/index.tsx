import TabContent from "@/components/tabpanel/TabContent";
import TabControlItem from "@/components/tabpanel/TabControlItem";
import TabControls from "@/components/tabpanel/TabControls";
import Tabpanel from "@/components/tabpanel/TabPanel";
import TabContentItem from "@/components/tabpanel/TabContentItem";
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
            <Tabpanel>
                <TabControls>
                    <TabControlItem tab={1} Icon={IoList} text="List" />
                    <TabControlItem tab={2} Icon={LuCalendar} text="Calendar" />
                </TabControls>

                <TabContent>
                    <TabContentItem tabId={1}>Campaign List</TabContentItem>
                    <TabContentItem tabId={2}>Calendar</TabContentItem>
                </TabContent>
            </Tabpanel>
        </>
    )
}