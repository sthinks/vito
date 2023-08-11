import React from "react";
import Banner from "../../../assets/banner/Star 2.jpg";
import Banner2 from "../../../assets/banner/ccc.jpg";
import Banner3 from "../../../assets/banner/bbb.jpg";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next right-4 max-lg:right-2 h-72 w-72 z-50 max-xl:w-56 max-xl:h-56 max-lg:w-44 max-lg:h-44 max-md:w-20  max-md:h-20"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-next left-4 max-lg:left-2 h-72 w-72 z-50 max-xl:w-56 max-xl:h-56 max-lg:w-44 max-lg:h-44 max-md:w-20  max-md:h-20"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}
function HomeSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="relative ">
                    <div className="absolute w-full h-full left-0 top-0 bg-blue-800 opacity-30" />
                    <h2 className="text-white font-bold text-4xl absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        All In One Solutions
                    </h2>
                    <img
                        src={Banner3}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={Banner}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={Banner2}
                        className="w-full object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default HomeSlider;
