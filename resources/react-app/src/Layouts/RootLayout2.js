import React from "react";

import { Outlet } from "react-router-dom";
import Footer2 from "../components/Footer/Footer2";

function RootLayout2() {
    return (
        <>
            <Outlet />
            <Footer2 />
        </>
    );
}

export default RootLayout2;
