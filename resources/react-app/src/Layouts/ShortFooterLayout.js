import React from "react";
import { Outlet } from "react-router-dom";
import ShortFooter from "../components/Footer/ShortFooter";
import Header from "../components/header/Header";

function ShortFooterLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <ShortFooter />
        </>
    );
}

export default ShortFooterLayout;
