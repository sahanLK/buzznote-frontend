import React from "react";

const SignedOutLayout: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <div className="bg-[#f8fafb] min-h-screen py-20 w-full mx-auto">
        {children}
    </div>
);

export default SignedOutLayout;