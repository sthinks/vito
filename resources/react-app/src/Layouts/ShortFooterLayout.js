import React from "react";
import { Outlet } from "react-router-dom";
import ShortFooter from "../components/Footer/ShortFooter";

function ShortFooterLayout() {
    return (
        <>
            <Outlet />
            <ShortFooter />
        </>
    );
}

export default ShortFooterLayout;
