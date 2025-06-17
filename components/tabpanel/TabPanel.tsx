import { useEffect, useState } from "react"
import TabControlItem from "./TabControlItem"
import TabControls from "./TabControls"
import TabContentItem from "./TabContentItem"
import React from "react"
import TabContent from "./TabContent"

type PropTypes = {
    children: React.ReactNode,
}

export default function Tabpanel({ children }: PropTypes) {
    const [activeTab, setActiveTab] = useState(1);

    const enhanced = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type == TabControls && React.isValidElement<{ tab: number, children: React.ReactNode }>(child)) {
                const tabChildren = React.Children.map(child.props.children, (controlChild) => {
                    if (React.isValidElement<{ onClick: () => void, tab: number }>(controlChild) && controlChild.type == TabControlItem) {
                        return React.cloneElement(controlChild, {
                            onClick: () => {
                                setActiveTab(controlChild.props.tab);
                            },
                        });
                    }
                    return controlChild;
                });

                return React.cloneElement(child, {
                    children: tabChildren
                });
            }

            if (child.type == TabContent && React.isValidElement<{ children: React.ReactNode }>(child)) {
                const tabChildren = React.Children.map(child.props.children, (contentChild) => {
                    if (React.isValidElement<{ tabId: number, style: Object }>(contentChild) && contentChild.type == TabContentItem) {
                        if (contentChild.props.tabId != activeTab) {
                            return React.cloneElement(contentChild, {
                                style: { ...(contentChild.props.style || {}), display: "none" }
                            });
                        }
                    }
                    return contentChild;
                });

                return React.cloneElement(child, {
                    children: tabChildren
                });
            }

        }
        return child;

    });

    return (
        <div className="border-stone-200 sticky top-0 w-full bg-white z-10 overflow-hidden">
            {enhanced}
        </div>
    )
}
