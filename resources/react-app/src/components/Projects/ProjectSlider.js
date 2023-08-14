import React, { useRef, useState } from "react";
import Slider from "react-slick";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <MdKeyboardArrowRight
            className="slick-arrow slick-next right-4 max-md:-right-2 max-lg:right-2 h-20 w-20 z-50"
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
            className="slick-arrow slick-next left-4 max-md:-left-2 max-lg:left-2 h-20 w-20 z-50"
            style={{
                ...style,
                display: "block",
                color: "white",
            }}
            onClick={onClick}
        />
    );
}
function ProjectSlider({ sliderImage, bg }) {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 2,
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
            <Slider className="my-10" {...settings}>
                {sliderImage.map((item, i) => (
                    <div
                        key={i}
                        className="w-1/2 h-1/2 flex justify-center items-center gap-5"
                    >
                        <img
                            src={item.url}
                            alt="asdas"
                            className="rounded-[100%] w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default ProjectSlider;
