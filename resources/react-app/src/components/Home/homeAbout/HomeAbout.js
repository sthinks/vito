import React from "react";
import AboutImg from "../../../assets/homeAbout/1y.jpg";
import AboutImg2 from "../../../assets/homeAbout/2y.jpg";
import AboutImg3 from "../../../assets/homeAbout/3y.png";
import AboutImg4 from "../../../assets/homeAbout/4y.jpg";
import AboutImg5 from "../../../assets/homeAbout/Aoste.jpg";
import AboutImg6 from "../../../assets/homeAbout/whoare.png";
import ReactPlayer from "react-player";
import HomeAboutSlider from "./HomeAboutSlider";
import { useTranslation } from "react-i18next";

function HomeAbout() {
    const arrayImage = [
        {
            id: 0,
            url: AboutImg6,
        },
        {
            id: 1,
            url: AboutImg5,
        },
        {
            id: 2,
            url: AboutImg4,
        },
        {
            id: 3,
            url: AboutImg3,
        },
        {
            id: 4,
            url: AboutImg2,
        },
        {
            id: 4,
            url: AboutImg,
        },
    ];
    const { t, i18n } = useTranslation();

    return (
        <div>
            <h1 className="text-[#093977] text-center text-4xl my-10 font-bold max-md:text-3xl ">
                {t("home_who")}
            </h1>
            <HomeAboutSlider sliderImage={arrayImage} />
            <div className="m-20 max-md:px-5 max-md:m-0 max-md:py-4">
                <div className="flex justify-between items-center mt-5 max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="w-[49%] h-auto flex flex-col justify-arround max-md:w-full max-lg:h-auto py-5">
                        <h2 className="text-center font-bold text-3xl ">
                            {t("home_who_title")}
                        </h2>
                        <p className="text-center mt-6 text-black opacity-70 font-medium leading-9 italic">
                            {t("home_who_content")}

                            <br />
                            <a
                                className="text-blue-600 hover:underline px-2"
                                href="/about-us"
                            >
                                {t("home_who_go")}
                            </a>
                        </p>
                    </div>
                    <div class="w-[49%] h-[300px] max-md:h-auto flex justify-center items-center max-md:mt-10 max-md:w-full py-5">
                        <ReactPlayer
                            url="https://www.youtube.com/embed/Qd1yzIDtQiU"
                            controls={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
