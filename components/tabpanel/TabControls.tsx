import React from "react"
import { IoList } from "react-icons/io5"
import { LuCalendar } from "react-icons/lu"

type PropTypes = {
    children: React.ReactNode
}

export default function TabControls({ children }: PropTypes) {
    return (
        <div className="py-3 border-b-1 border-stone-200">
            <div className="container mx-auto flex items-center">
                <ul className="flex gap-8 text-stone-600">
                    {children}
                </ul>
            </div>
        </div>
    )
}