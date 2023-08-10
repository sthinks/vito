import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import RootLayout2 from "../layouts/RootLayout2";
import ShortFooterLayout from "../layouts/ShortFooterLayout";
import Contact from "../pages/Contact/Contact";
import Deneme from "../components/Deneme/MenuFirst";
import Sector from "../pages/Sector/Sector";
import Global from "../pages/Global/Global";
import AboutUs from "../pages/AboutUs/AboutUs";
import News from "../pages/News/News";
import Institutional from "../pages/institutional/Institutional";
import Projects from "../pages/projects/Projects";

function AppRoute() {
    return (
        <>
            <Routes>
                <Route>
                    <Route element={<ShortFooterLayout />}>
                        <Route path="/vito-global" element={<Global />} />
                        <Route path="/news" element={<News />} />
                        <Route
                            path="/instituonal"
                            element={<Institutional />}
                        />
                        <Route path="/projects" element={<Projects />} />
                    </Route>
                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sector" element={<Sector />} />
                        <Route path="/about-us" element={<AboutUs />} />
                    </Route>
                    <Route element={<RootLayout2 />}>
                        <Route path="/contact" element={<Contact />} />
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
