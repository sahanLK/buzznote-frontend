import Header from "@/components/header";
import { ReactNode } from "react";

type PropType = {
    children: ReactNode;
}

export default function RootLayout({children}: PropType) {
    return <>
    <Header />

    <main>
        {children}
    </main>
    </>
}