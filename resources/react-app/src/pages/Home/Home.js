import React, { useEffect, useRef, useState } from "react";
import News from "../../components/Home/News";
import Header from "../../components/header/Header";
import HomeSlider from "../../components/home/home-slider/HomeSlider";
import HomeAbout from "../../components/home/homeAbout/HomeAbout";
import Activity from "../../components/home/activity/ActivityHome";
import HomeAnimation from "../../components/home/homeAnimation/HomeAnimation";

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <div className="">
            <HomeSlider />
            <HomeAbout />
            <Activity />
            <HomeAnimation />
            <News />
        </div>
    );
}

export default Home;
