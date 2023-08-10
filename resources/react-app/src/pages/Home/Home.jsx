import React from "react";
import Header from "../../components/header/Header";
import HomeSlider from "../../components/home/home-slider/HomeSlider";
import HomeAbout from "../../components/home/homeAbout/HomeAbout";
import Activity from "../../components/home/activity/ActivityHome";
import HomeAnimation from "../../components/home/homeAnimation/HomeAnimation";
function Home() {
    return (
        <>
            <Header />
            <HomeSlider />
            <HomeAbout />
            <Activity />
            <HomeAnimation />
        </>
    );
}

export default Home;
