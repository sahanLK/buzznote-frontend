import TabContent from "@/components/tabpanel/TabContent";
import TabControlItem from "@/components/tabpanel/TabControlItem";
import TabControls from "@/components/tabpanel/TabControls";
import Tabpanel from "@/components/tabpanel/TabPanel";
import TabContentItem from "@/components/tabpanel/TabContentItem";
import Link from "next/link";
import { IoList } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";
import CampaignItem from "@/components/campaign/CampaignItem";
import { useEffect, useRef, useState } from "react";
import PaymentButton from "@/components/payments/PaymentButton";


type CampaignItem = {
    id: string,
    title: string
}

export default function CampaignsPage() {
    const [campaigns, setCampaigns] = useState([]);
    const [campaignPage, setCampaignPage] = useState(0);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrev, setHasPrev] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    const selectAllRef = useRef<HTMLInputElement>(null);
    const [selectedCampaigns, setSelectedCampaigns] = useState(new Set());

    if (selectAllRef.current) {
        campaigns.length !== selectedCampaigns.size ? selectAllRef.current!.checked = false : selectAllRef.current!.checked = true;
    }

    function setCampaignSelected(campaignId: string) {
        if (selectedCampaigns.has(campaignId)) {
            setSelectedCampaigns(prev => {
                const updated = new Set(prev);
                updated.delete(campaignId);
                return updated;
            });
        } else {
            setSelectedCampaigns(prev => {
                const updated = new Set(prev);
                updated.add(campaignId);
                return updated;
            });
        }
    }

    function setAllSelected() {
        if (selectAllRef.current?.checked) {
            const newSelectedCampaigns = new Set();

            campaigns.map((campaign: CampaignItem) => {
                newSelectedCampaigns.add(campaign.id);
            });
            setSelectedCampaigns(newSelectedCampaigns);
        } else {
            setSelectedCampaigns(new Set());
        }

    }

    useEffect(() => {
        fetch(`http://localhost:8083/api/campaigns?size=4&page=${campaignPage}`, {
            credentials: "include",
        })
            .then(res => res.json())
            .then(respDada => {
                console.log(respDada);
                setCampaigns(respDada.data);
                setHasNext(respDada.more);
                setHasPrev(respDada.previous);
                setTotalPages(respDada.totalPages);
            })
    }, [campaignPage]);

    return (
        <>

        <PaymentButton />

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
                    <div className="flex items-center p-5 text-left border-b-1 border-stone-300 text-stone-500">
                        <div className="w-[50px]">
                            <input type="checkbox" onChange={setAllSelected} ref={selectAllRef} className="cursor-pointer" />
                        </div>
                        <div className="w-3/12">Name</div>
                        <div className="w-1/12">Status</div>
                        <div className="w-2/12">Audience</div>
                        <div className="w-3/12">Analytics</div>
                        <div className="w-3/12 text-right">Actions</div>
                    </div>
                    
                    <TabContentItem tabId={1}>
                        {campaigns.map((campaign: CampaignItem) => (
                            <CampaignItem
                                title={campaign.title}
                                key={campaign.id}
                                status="Draft"
                                lastEdited="2025 June 30"
                                campaignId={campaign.id}
                                setSelected={setCampaignSelected}
                                checked={selectedCampaigns.has(campaign.id)}
                            />
                        ))}
                    </TabContentItem>
                    <TabContentItem tabId={2}>Calendar</TabContentItem>
                </TabContent>
            </Tabpanel>

            <div className="text-stone-700 mt-20 max-w-[400px] ml-auto text-right flex items-center">
                <p>Showing results 1 - 4 of {totalPages}</p>
                <div className="ml-10">
                    <button onClick={() => setCampaignPage(prev => prev -1)} disabled={!hasPrev} className="cursor-pointer">prev</button>
                    <input type="text" className="w-[40px] mx-4 border-1 rounded text-center border-stone-400" value={campaignPage + 1} />
                    <button onClick={() => setCampaignPage(prev => prev + 1)} disabled={!hasNext} className="cursor-pointer">Next</button>
                </div>
            </div>
        </>
    )
}