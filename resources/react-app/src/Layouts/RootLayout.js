import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
