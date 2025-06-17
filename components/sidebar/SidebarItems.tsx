import Link from "next/link"
import { ReactNode } from "react"

type PropTypes = {
    Icon: React.ElementType,
    text: string,
    url: string
}

export default function SidebarItem({Icon, text, url}: PropTypes) {
    return (
        <li className="flex items-center py-1">
            <Icon />
            <Link href={url} className="pl-4 text-stone-500">{text}</Link>
        </li>
    )
}