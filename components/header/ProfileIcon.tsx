import { RefObject } from "react";

type PropTypes = {
    onClick: () => void;
}

export default function ProfileIcon({ onClick }: PropTypes) {
    return (

        <div
            className="w-11 h-11 ml-auto bg-amber-100 text-stone-700 rounded-full flex items-center justify-center text-2xl border-1 border-green-200 cursor-pointer"
            onClick={onClick}>
            <h2 className="font-sans text-stone-600">A</h2>
        </div>
    )
}