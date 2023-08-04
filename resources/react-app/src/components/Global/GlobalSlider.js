import React, { useRef, useState } from "react";
import Slider from "react-slick";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import FullScreenImage from "../../components/Global/FullScreenImage";
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
function GlobalSlider({ sliderImage }) {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
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

    const [imgIndex, setImgIndex] = useState(0);
    const [modal, setModal] = useState(false);
    const [drag, setDrag] = useState();

    if (modal === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    const dontDragHandler = (pageX, item) => {
        if (drag !== pageX) {
            setModal(false);
        } else {
            setModal(true);
            setImgIndex(item.index - 1);
        }
    };
    return (
        <>
            <Slider {...settings}>
                {sliderImage.map((item, i) => (
                    <div className="w-56 h-56 outline-0">
                        <img
                            key={i}
                            onMouseDown={(e) => setDrag(e.pageX)}
                            onMouseUp={(e) => dontDragHandler(e.pageX, item)}
                            className="w-full h-full object-cover p-2 cursor-pointer"
                            src={item.url}
                            alt="images"
                        />
                    </div>
                ))}
            </Slider>
            {modal && (
                <FullScreenImage
                    modal={modal}
                    setModal={setModal}
                    sliderImage={sliderImage}
                    imgIndex={imgIndex}
                    setImgIndex={setImgIndex}
                />
            )}
        </>
    );
}

export default GlobalSlider;
