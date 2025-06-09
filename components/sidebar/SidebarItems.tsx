import { ReactNode } from "react"

type PropType = {
    Icon: React.ElementType,
    text: string
}

export default function SidebarItem({Icon, text}: PropType) {
    return (
        <li className="flex items-center py-1">
            <Icon />
            <span className="pl-4 text-stone-500">{text}</span>
        </li>
    )
}