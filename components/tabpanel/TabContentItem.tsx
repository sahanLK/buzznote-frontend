import React from "react";

type PropTypes = {
    children: React.ReactNode;
    tabId: number,
} & React.HTMLAttributes<HTMLDivElement>;


export default function TabContentItem({ children, tabId, ...rest }: PropTypes) {
    return (
        <div {...rest}>
            {children}
        </div>
    )
}
