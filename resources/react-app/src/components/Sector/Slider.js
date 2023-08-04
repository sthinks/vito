import React from "react";
import SliderComp from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import image1 from "../../assets/sector/sliderImage/1.jpg";
import image2 from "../../assets/sector/sliderImage/2.jpg";
import image3 from "../../assets/sector/sliderImage/3.jpeg";
import image4 from "../../assets/sector/sliderImage/4.jpg";
import image5 from "../../assets/sector/sliderImage/5.png";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    console.log(className);
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
function Slider() {
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
            <SliderComp {...settings}>
                <div>
                    <img
                        src={image1}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={image2}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={image3}
                        className="w-full object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={image4}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
                <div>
                    <img
                        src={image5}
                        className="w-full  object-cover max-sm:h-[250px]"
                        alt="imageSlider"
                    />
                </div>
            </SliderComp>
        </div>
    );
}

export default Slider;
