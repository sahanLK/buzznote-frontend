import Link from "next/link";

type PropTypes = {
    url: string,
    text: string,
}

export default function DropdownMenuItem({url, text}: PropTypes) {
    return (
        <Link href={url} className="block text-stone-600 py-2 px-5 hover:bg-stone-50 text-sm">{text}</Link>
    )
}