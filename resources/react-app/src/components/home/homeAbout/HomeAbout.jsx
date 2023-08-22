import React from "react";
import AboutImg from "../../../assets/homeAbout/1y.jpg";
import AboutImg2 from "../../../assets/homeAbout/2y.jpg";
import AboutImg3 from "../../../assets/homeAbout/3y.png";
import AboutImg4 from "../../../assets/homeAbout/4y.jpg";
import AboutImg5 from "../../../assets/homeAbout/Aoste.jpg";
import AboutImg6 from "../../../assets/homeAbout/whoare.png";
import ReactPlayer from "react-player";
import HomeAboutSlider from "./HomeAboutSlider";
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
    return (
        <div>
            <h1 className="text-[#093977] text-center text-4xl my-10 font-bold max-md:text-3xl ">
                WHO WE ARE ?
            </h1>
            <HomeAboutSlider sliderImage={arrayImage} />
            <div className="m-20">
                <div className="flex justify-between items-center mt-5 max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="w-[49%] h-[300px] flex flex-col justify-arround max-md:w-full">
                        <h2 className="text-center font-bold text-3xl ">
                            ViTO Group
                        </h2>
                        <p className="text-center mt-6 text-black opacity-70 font-medium leading-9 italic">
                            We provide turnkey construction and erection
                            services under one roof for all projects in the
                            OIL&GAS and energy sectors by project management and
                            procurement with our engineering office in India and
                            specialized engineers in Turkey. We are a leading
                            organization in the sector that EPCs storage
                            facilities such as tank farms. In our factory in
                            Bergama, which has all international quality
                            certificates, we can produce pressure vessels,
                            piping prefabrication and various steel
                            constructions at world standards.
                            <br />
                            <a
                                className="text-blue-600 hover:underline px-2"
                                href="/about-us"
                            >
                                Read More
                            </a>
                        </p>
                    </div>
                    <div class="w-[49%] h-[300px] flex justify-center items-center max-md:mt-10 max-md:w-full">
                        <ReactPlayer
                            url="https://www.youtube.com/embed/Qd1yzIDtQiU"
                            playing={true} // Otomatik oynatmayı sağlar
                            controls={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
