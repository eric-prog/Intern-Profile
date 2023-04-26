import React, { PropsWithChildren } from "react";
import { Navbar } from "./Navbar";


export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen w-full h-full">
            <Navbar />
            <div className="w-full h-full">{children}</div>
        </div>
    );
};

