import React, { useRef, useState } from "react";
import Slider from "react-slick";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next right-4 max-md:right-4 max-lg:right-2 h-20 w-20 z-50 max-md:w-12 max-md:h-12"
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
            className="slick-arrow slick-next left-4 max-md:left-4 max-lg:left-0 h-20 w-20 z-50 max-md:w-12 max-md:h-12"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}
function HomeAboutSlider({ sliderImage, bg }) {
    var settings = {
        dots: false,
        speed: 1000,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Slider className={bg ? `bg-white` : ""} {...settings}>
                {sliderImage.map((item, i) =>
                    item.style === true ? (
                        <div>
                            <div
                                className={
                                    item.style === true
                                        ? "w-full h-[40rem] outline-0 flex justify-center items-center "
                                        : `w-56 h-80 max-lg:h-56 outline-0`
                                }
                            >
                                <img
                                    key={i}
                                    className={
                                        item.style
                                            ? "w-3/4 h-3/4 object-cover p-2 cursor-pointer rounded-full"
                                            : "w-full h-full object-cover p-2 cursor-pointer "
                                    }
                                    src={item.url}
                                    alt="images"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="w-56 h-80 max-lg:h-56 outline-0">
                            <img
                                key={i}
                                className="w-full h-full object-cover p-2 cursor-pointer"
                                src={item.url}
                                alt="images"
                            />
                        </div>
                    )
                )}
            </Slider>
        </>
    );
}

export default HomeAboutSlider;
