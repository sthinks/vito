import React, { useState } from "react";
import ActiveFirst from "../../assets/home-activity/developp.png";
import ActiveSecond from "../../assets/home-activity/epc.jpg";
import ActiveThird from "../../assets/home-activity/bergamaa.png";
import ActiveFourth from "../../assets/home-activity/acd.png";
import ActivityCard from "./ActivityCard";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import serviceBg from "../../assets/aboutus/servicebg.png";
function Activity() {
    const [newsAnim, setNewsAnim] = useState(false);

    const active_cards = [
        {
            id: 0,
            src: ActiveFirst,
            description: "PROJECT DEVELOPMENT",
            slug: "projects",
            color_code: "#369797",
        },
        {
            id: 1,
            src: ActiveSecond,
            description: "EPC",
            slug: "service",
            color_code: "#315dbd",
        },
        {
            id: 2,
            src: ActiveThird,
            description: "FABRICATION",
            slug: "service",
            color_code: "#6b39ba",
        },
        {
            id: 3,
            src: ActiveFourth,
            description: "MAINTANCE AND SPARE PARTS",
            slug: "service",
            color_code: "#7bba54",
        },
    ];
    const navigate = useNavigate();
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    return (
        <>
            {/* <div className="container mx-auto my-5">
                <ul className="grid grid-cols-4 place-items-center max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
                    {active_cards.map((item, index) => (
                        <ActivityCard
                            key={index}
                            src={item.src}
                            content={item.description}
                            color={item.color}
                            slug={item.slug}
                        />
                    ))}
                </ul>
            </div> */}
            <div
                ref={ref}
                className="w-full flex flex-wrap justify-center items-baseline py-6 max-md:px-6 max-sm:px-2"
            >
                {active_cards.map((item, i) => (
                    <div
                        id="spinning-service"
                        key={i}
                        className="w-[24%] flex justify-center flex-col flex-1 items-center max-md:w-5/6 cursor-pointer"
                        onClick={() => navigate(`/${item.slug}`)}
                    >
                        <div className="relative rounded-full w-64 h-64 max-lg:w-48 max-lg:h-48 flex justify-center items-center max-sm:w-52 max-sm:h-52 max-sm:m-2">
                            {/* Dönen Çerçeve */}
                            <div
                                style={{
                                    backgroundColor: `${item.color_code}`,
                                }}
                                className={`absolute top-0 left-0 w-full h-full rounded-full bg-cover ${
                                    newsAnim ? "animate-spin" : ""
                                }`}
                            ></div>
                            {/* Dönen Border */}
                            <div
                                className={`absolute top-0 left-0 w-full h-full  rounded-full ${
                                    newsAnim ? "animate-spin" : ""
                                } bg-cover`}
                                style={{
                                    backgroundImage: `url(${serviceBg})`,
                                }}
                            ></div>
                            {/* Sabit Resim */}
                            <img
                                className="w-full h-full relative z-30 rounded-full border-[12px] border-[#ffffff57]"
                                src={item.src}
                                alt="ServicesImage"
                            />
                            <div className="absolute z-40 w-full h-full border-4 border-black   rounded-full bg-black opacity-30" />
                        </div>
                        <p className="relative text-black text-lg font-semibold text-center">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Activity;
