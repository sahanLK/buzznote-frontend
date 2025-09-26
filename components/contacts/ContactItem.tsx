import { useState } from "react";

type PropTypes = {
    key: string,
    contact: string,
}

export default function ContactItem({contact}: PropTypes) {

    return (
        <div className="flex items-center max-w-[2000px] w-full mx-auto p-5 text-stone-600">
            <div className="w-[50px]">
                {/* <input type="checkbox" onChange={handleChecked} checked={props.checked} className="cursor-pointer" /> */}
            </div>
            <div className="w-3/12">{contact}</div>
            <div className="w-1/12"></div>
            <div className="w-2/12">Audience</div>
            <div className="w-3/12">Analytics</div>
            <div className="w-3/12 text-right">Actions</div>
        </div>
    )
}