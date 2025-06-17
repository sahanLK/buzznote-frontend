import DropdownMenuItem from "../menu/DropdownMenuItem";
import ProfileIcon from "./ProfileIcon";
import { useEffect, useRef, useState } from "react";


export default function DropdownMenu() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                e.target instanceof Node &&
                !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <ProfileIcon onClick={() => setOpen(!open)} />

            {open && (
                <div className="right-5 top-14 absolute rounded shadow-lg py-6 bg-white w-[240px]">
                    <div className="flex items-center">
                        <div>
                            <div className="w-2/10 md:w-2/10 px-4 my-4">
                                <div className="w-11 h-11 ml-auto bg-amber-100 text-stone-700 rounded-full flex items-center justify-center text-2xl border-1 border-green-200 cursor-pointer">
                                    <h2 className="font-sans text-stone-600">A</h2>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm">
                            <h2 className="font-semibold text-stone-700">Sahan</h2>
                            <h3 className="text-stone-600">Personal</h3>
                        </div>
                    </div>

                    <ul className="mt-3">
                        <DropdownMenuItem url="" text="Notifications" />
                        <DropdownMenuItem url="" text="Profile" />
                        <DropdownMenuItem url="" text="Account & Billing" />
                        <DropdownMenuItem url="" text="Pricing plans" />
                        <DropdownMenuItem url="/auth/logout" text="Logout" />
                    </ul>
                </div>
            )}

        </div>
    )
}