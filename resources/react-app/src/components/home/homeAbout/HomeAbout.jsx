import React from "react";
import AboutImg from "../../../assets/homeAbout/aboutSlider.png";
import HomeAboutSlider from "./HomeAboutSlider";
function HomeAbout() {
    const arrayImage = [
        {
            id: 0,
            url: AboutImg,
        },
        {
            id: 1,
            url: AboutImg,
        },
        {
            id: 2,
            url: AboutImg,
        },
        {
            id: 3,
            url: AboutImg,
        },
        {
            id: 4,
            url: AboutImg,
        },
    ];
    return (
        <div>
            <h1 className="text-[#093977] text-center text-5xl my-10 font-bold ">
                WHO ARE WE ?
            </h1>
            <HomeAboutSlider sliderImage={arrayImage} />
            <div className="m-20">
                <h2 className="text-center font-bold text-2xl">VİTO Group</h2>
                <p className="text-center mt-6 ">
                    The entire life of assets in the oil & gas and energy
                    sectors. a specialized industrial service focused on cycles
                    is the provider. In addition to project development and
                    financing, We offer EPC and maintenance and repair services
                    to our customers. From operators/owners to multinational EPC
                    companies and Serving a wide range of premium customers up
                    to OEMs we give. Currently has managerial responsibilities A
                    full-time team of over 50 professionals we employ and people
                    up to 1,000 to 1,500 people We can carry out projects with
                    our strength.
                </p>
            </div>
        </div>
    );
}

export default HomeAbout;
