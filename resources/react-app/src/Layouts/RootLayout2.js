import React from "react";

import { Outlet } from "react-router-dom";
import Footer2 from "../components/Footer/Footer2";
import Header from "../components/header/Header";

function RootLayout2() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer2 />
        </>
    );
}

export default RootLayout2;
