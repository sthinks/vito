import React, { useEffect, useLayoutEffect, useState } from "react";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";

import service from "../../../service/service";

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
    const [data, setData] = useState([]);
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
    useLayoutEffect(() => {
        getHomeSliderData();
    }, []);
    const getHomeSliderData = async () => {
        const result = await service.getHomeSlider();

        setData(result.data);
    };
    return (
        <div>
            <Slider {...settings}>
                {data.map((slide, index) => (
                    <div key={index} className="relative">
                        <div className="slide-content relative overflow-hidden animate-zoomIn">
                            <h1 className="text-white font-bold text-4xl max-lg:text-2xl max-md:text-lg absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                                {slide.title}
                            </h1>

                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-40"></div>
                            <img
                                src={slide.media}
                                className={`w-full object-cover max-sm:h-[250px] z-10 transform-gpu transition-transform`}
                                alt={`imageSlider-${index}`}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HomeSlider;
