import React, { useState } from "react";
import Slider from "react-slick";
import bir from "../../assets/deneme/1.png";
import iki from "../../assets/deneme/11.png";
import üç from "../../assets/deneme/3.png";
import dört from "../../assets/deneme/4.png";
import beş from "../../assets/deneme/55.png";
import altı from "../../assets/deneme/6.png";
import resm from "../../assets/deneme/Layer 635.png";

import "./denemee.css";

function DenemeSlider() {
    const [deee, setDeee] = useState(50);
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const arrayLeft = [
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
        {
            img: iki,
        },
        {
            img: bir,
        },
    ];
    const marginLeft = -50;
    return (
        <div>
            <h2> Multiple items </h2>
            <Slider {...settings} className="pt-40 bg-transparent">
                <div className="h-[25rem] relative -right-[50px]">
                    <div className="absolute w-full h-2/4 bg-orange-600 z-40" />
                    <img
                        src={bir}
                        alt="sss"
                        className="w-full h-2/4 relative z-50"
                    />
                    <div className="w-full h-2/4  bg-transparent " />
                </div>

                {arrayLeft.map((item, i) => (
                    <div className={` h-[25rem] relative `}>
                        {i % 2 !== 0 ? (
                            <>
                                <div
                                    className="absolute w-full h-2/4 bg-orange-600 z-40"
                                    style={{
                                        left: marginLeft * i,
                                    }}
                                />
                                <div
                                    className="w-full h-full absolute flex justify-center items-center"
                                    style={{
                                        left: marginLeft * i,
                                    }}
                                >
                                    <div className="absolute text-center -top-28">
                                        <p>
                                            2011 İlk Ofisimiz Elmadağ'da Gebze
                                            Santralinin alınması şerefine
                                            Ansaldo Proje Müdürü Aldo Canepe ile
                                            kutlama
                                        </p>
                                    </div>
                                    <img
                                        className="absolute z-50 w-4/6 max-md:5/6"
                                        src={resm}
                                        alt="ssss"
                                    />
                                </div>

                                <img
                                    style={{
                                        left: marginLeft * i,
                                        position: "relative",
                                    }}
                                    src={item.img}
                                    alt="sss"
                                    className="w-full h-2/4 z-40"
                                />
                                <div className="w-full h-2/4 bg-transparent" />
                            </>
                        ) : (
                            <>
                                <div
                                    className="absolute w-full bottom-0 h-2/4 bg-lime-600 z-40"
                                    style={{
                                        left: marginLeft * i,
                                    }}
                                />
                                <div
                                    className="w-full h-full absolute flex justify-center items-center"
                                    style={{
                                        left: marginLeft * i,
                                    }}
                                >
                                    <div className="absolute text-center -bottom-28">
                                        <p>
                                            2011 İlk Ofisimiz Elmadağ'da Gebze
                                            Santralinin alınması şerefine
                                            Ansaldo Proje Müdürü Aldo Canepe ile
                                            kutlama
                                        </p>
                                    </div>
                                    <img
                                        className="absolute z-50 w-4/6 max-md:5/6"
                                        src={resm}
                                        alt="ssss"
                                    />
                                </div>
                                <div className="w-full h-2/4 bg-transparent" />
                                <img
                                    style={{
                                        left: marginLeft * i,
                                        position: "relative",
                                    }}
                                    src={item.img}
                                    alt="sss"
                                    className="w-full h-2/4 z-40"
                                />
                            </>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default DenemeSlider;
