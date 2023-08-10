import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Contact from "../pages/Contact/Contact";

import AboutUs from "../pages/AboutUs/AboutUs";
import Institutional from "../pages/institutional/Institutional";
import Global from "../pages/global/Global";
import Projects from "../pages/projects/Projects";
import Sectors from "../pages/sectors/Sectors";
import News from "../pages/news/News";
function AppRoute() {
    return (
        <Routes>
            <Route>
                {/* Örnek tanımlama.*/}
                <Route path="" element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/hakkimizda" element={<AboutUs />} />
                <Route path="/kurumsal" element={<Institutional />} />
                <Route path="/global" element={<Global />} />
                <Route path="/projeler" element={<Projects />} />
                <Route path="/sektorler" element={<Sectors />} />
                <Route path="/haberler" element={<News />} />
                <Route path="/iletisim" element={<Contact />} />
            </Route>
            <Route path="/register" element={<div>register</div>} />
            {/* Örnek tanımlama.
      <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
}

export default AppRoute;
