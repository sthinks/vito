import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import ShortFooterLayout from "../layouts/ShortFooterLayout";

import Contact from "../pages/Contact/Contact";
import Deneme from "../components/Deneme/MenuFirst";
import Sector from "../pages/Sector/Sector";
import Global from "../pages/Global/Global";

function AppRoute() {
    return (
        <>
            <Routes>
                <Route>
                    <Route element={<ShortFooterLayout />}>
                        <Route path="/vito-global" element={<Global />} />
                    </Route>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sector" element={<Sector />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/deneme" element={<Deneme />} />
                </Route>
                <Route path="/register" element={<div>register</div>} />
            </Routes>
        </>
    );
}

export default AppRoute;
