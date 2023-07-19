import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Contact from "../pages/Contact/Contact";
import Deneme from "../components/Deneme/MenuFirst";
import Footer from "../components/Footer/Footer";

function AppRoute() {
    return (
        <>
            <Routes>
                <Route>
                    {/* Örnek tanımlama.*/}
                    <Route path="" element={<RootLayout />}>
                        <Route path="/" element={<Home />} />
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