import React, { useState } from "react";
import Banner from "../../../assets/banner/Star 2.jpg";
import Banner2 from "../../../assets/banner/ccc.jpg";
import Banner3 from "../../../assets/banner/bbb.jpg";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const slidesData = [
    {
        image: Banner3,
        title: "Safety First",
        description: "Description for the first slide.",
    },
    {
        image: Banner,
        title: "Second Slide",
        description: "Description for the second slide.",
    },
    {
        image: Banner2,
        title: "Third Slide",
        description: "Description for the third slide.",
    },
];

function SampleNextArrow(props) {
    const { style, onClick } = props;

    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-slider-home slick-next right-4 max-lg:right-2 h-56 w-56 z-50 max-xl:w-36 max-xl:h-36 max-lg:w-24 max-lg:h-24 max-md:w-12 max-md:h-12 hover:text-blue-500"
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
    const { style, onClick } = props;
    return (
        <MdKeyboardArrowLeft
            className="slick-arrow slick-slider-home slick-next left-4 max-lg:left-2 h-56 w-56 z-50 max-xl:w-36 max-xl:h-36 max-lg:w-24 max-lg:h-24 max-md:w-12  max-md:h-12"
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
    const [showInfoBox, setShowInfoBox] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (currentSlide) => {
        setActiveSlide(currentSlide);
        setShowInfoBox(false); // Her slayt değişiminde kutuyu gizle
        const timer = setTimeout(() => {
            setShowInfoBox(true);
        }, 2000); // 2 saniye sonra kutuyu göster
        return () => clearTimeout(timer);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
        cssEase: "linear",
        afterChange: (currentSlide) => handleSlideChange(currentSlide),
    };

    return (
        <div>
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="relative max-md:mt-20">
                        <div className="slide-content relative">
                            {index === 0 && (
                                <h1 className="text-white font-bold text-4xl absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                                    Safety First
                                </h1>
                            )}
                            {index === 0 && (
                                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 z-40"></div>
                            )}
                            <img
                                src={slide.image}
                                className={`w-full object-cover max-sm:h-[250px] z-10
                                }`}
                                alt={`imageSlider-${index}`}
                            />
                            <Link to="/projects">
                                {showInfoBox &&
                                    activeSlide === index &&
                                    index !== 0 && (
                                        <div
                                            className={`info-box w-1/5  max-md:hidden max-xl:text-lg max-lg:text-sm  ${
                                                showInfoBox &&
                                                activeSlide === index
                                                    ? "active"
                                                    : ""
                                            } z-10`}
                                        >
                                            <h3 className="font-bold">
                                                {slide.title}
                                            </h3>
                                            <p>{slide.description}</p>
                                        </div>
                                    )}
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeSlider;
