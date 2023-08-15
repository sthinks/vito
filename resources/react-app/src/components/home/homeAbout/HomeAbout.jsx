import React from "react";
import AboutImg from "../../../assets/homeAbout/AOSTE 3.jpg";
import AboutImg2 from "../../../assets/homeAbout/COFOT 1.jpg";
import AboutImg3 from "../../../assets/homeAbout/COFOT 5.jpg";
import AboutImg4 from "../../../assets/homeAbout/STAR Rafineri.jpg";
import AboutImg5 from "../../../assets/homeAbout/asote.jpg";
import HomeAboutSlider from "./HomeAboutSlider";
function HomeAbout() {
    const arrayImage = [
        {
            id: 0,
            url: AboutImg,
        },
        {
            id: 1,
            url: AboutImg2,
        },
        {
            id: 2,
            url: AboutImg3,
        },
        {
            id: 3,
            url: AboutImg4,
        },
        {
            id: 4,
            url: AboutImg5,
        },
    ];
    return (
        <div>
            <h1 className="text-[#093977] text-center text-5xl my-10 font-bold max-md:text-3xl ">
                WHO WE ARE ?
            </h1>
            <HomeAboutSlider sliderImage={arrayImage} />
            <div className="m-20">
                <h2 className="text-center font-bold text-3xl">ViTO Group</h2>
                <div className="flex justify-between items-center mt-5 max-md:flex-col max-md:justify-center max-md:items-center">
                    <div className="w-[60%] max-md:w-full">
                        <p className="text-center mt-6 ">
                            The entire life of assets in the oil & gas and
                            energy sectors. a specialized industrial service
                            focused on cycles is the provider. In addition to
                            project development and financing, We offer EPC and
                            maintenance and repair services to our customers.
                            From operators/owners to multinational EPC companies
                            and Serving a wide range of premium customers up to
                            OEMs we give. Currently has managerial
                            responsibilities A full-time team of over 50
                            professionals we employ and people up to 1,000 to
                            1,500 people We can carry out projects with our
                            strength.
                        </p>
                    </div>
                    <div class="w-[30%] h-full flex justify-center items-center max-md:mt-10 max-md:w-full">
                        <iframe
                            class="w-full h-full"
                            src="https://www.youtube.com/embed/Qd1yzIDtQiU"
                            frameborder="0"
                            allowfullscreen
                            title="tanıtım"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
