import React from "react";
import Header from "../header/Header";
import HeaderSignedOut from "../header/HeaderSignedOut";

const SignedOutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-[#f8fafb] h-auto min-h-screen">
        <HeaderSignedOut />

        <div className="pt-50">
            {children}
        </div>
    </div>
);

export default SignedOutLayout;