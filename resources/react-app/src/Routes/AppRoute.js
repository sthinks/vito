import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import RootLayout2 from "../layouts/RootLayout2";
import ShortFooterLayout from "../layouts/ShortFooterLayout";
import Contact from "../pages/contact/Contact";
import Sector from "../pages/Sector/Sector";
import Global from "../pages/Global/Global";
import AboutUs from "../pages/AboutUs/AboutUs";
import News from "../pages/News/News";
import Institutional from "../pages/institutional/Institutional";
import Projects from "../pages/projects/Projects";
import NewsDetail from "../pages/NewsDetail/NewsDetail";
import MainProjects from "../components/Projects/MainProjects";
import ProjectDetail from "../components/Projects/ProjectDetail";
import Kvkk from "../pages/KVKK/Kvkk";
import Services from "../pages/Services/Services";
import Page from "../pages/Page/Page";

function AppRoute() {
    return (
        <>
            <Routes>
                <Route>
                    <Route element={<ShortFooterLayout />}>
                        <Route path="/vito-global" element={<Global />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/news/:slug" element={<NewsDetail />} />
                        <Route path="/service" element={<Services />} />

                        <Route path="/service/:slug" element={<Services />} />
                        <Route path="/pages/:slug" element={<Page />} />
                        <Route path="/our-policies" element={<Kvkk />} />

                        {/* <Route
                            path="/projects-ongoing"
                            element={<MainProjects />}
                        /> */}
                        <Route path="/projects" element={<MainProjects />} />
                        <Route path="/corporate" element={<Institutional />} />
                        <Route path="/projects" element={<Projects />} />
                    </Route>

                    <Route element={<RootLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/sector" element={<Sector />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route
                            path="/projects/project-detail/:slug"
                            element={<ProjectDetail />}
                        />
                    </Route>
                    <Route element={<RootLayout2 />}>
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                </Route>
                <Route path="/register" element={<div>register</div>} />
            </Routes>
        </>
    );
}

export default AppRoute;
