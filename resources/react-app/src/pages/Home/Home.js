import React, { useEffect, useRef, useState } from "react";
import News from "../../components/Home/News";

import HomeSlider from "../../components/Home/home-slider/HomeSlider";
import HomeAbout from "../../components/home/homeAbout/HomeAbout";
import Activity from "../../components/home/activity/ActivityHome";
import HomeAnimation from "../../components/home/homeAnimation/HomeAnimation";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    const { t, i18n } = useTranslation();

    return (
        <div className="">
            <Helmet>
                <title>{t("home_title_head")}</title>

                <meta name="description" content="Vito Contact" />
                <meta name="keywords" content="Vito İletisim" />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Energy Engineering " />
                <meta name="description" content="ViTO Enerji" />
            </Helmet>
            <HomeSlider />
            <HomeAbout />
            <Activity />
            <HomeAnimation />
            <News />
        </div>
    );
}

export default Home;
