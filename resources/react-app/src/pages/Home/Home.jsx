import React from "react";

import HomeSlider from "../../components/home/home-slider/HomeSlider";
import HomeAbout from "../../components/home/homeAbout/HomeAbout";
import Activity from "../../components/home/activity/ActivityHome";
import HomeAnimation from "../../components/home/homeAnimation/HomeAnimation";
function Home() {
    return (
        <>
            <HomeSlider />
            <HomeAbout />
            <Activity />
            <HomeAnimation />
        </>
    );
}

export default Home;
