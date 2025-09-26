import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type PropTypes = {
    Icon: React.ElementType,
    text: string,
    url: string,
    children?: React.ReactNode,
}

export default function SidebarItem({ Icon, text, url, children }: PropTypes) {
    const [expanded, setExpanded] = useState(false);
    const path = usePathname();

    useEffect(() => {
        if (path.startsWith(url)) {
            setExpanded(true);
            return;
        }
    }, []);


    return (
        <>
            <li className="flex items-center py-1" onClick={() => setExpanded(!expanded)}>
                <Icon />
                <Link href={url} className="pl-4 text-stone-500">{text}</Link>
            </li>
            <div>{expanded && children}</div>
        </>
    )
}