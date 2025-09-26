import Link from "next/link";


type PropTypes = {
    text: string,
    url: string
}

export default function SidebarSubItem({text, url}: PropTypes) {
    return (
        <div>
            <Link href={url}>{text}</Link>
        </div>
    )
}