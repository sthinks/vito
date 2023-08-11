import React, { useState } from "react";
import "./AnimationComponent.css"; // Animasyonlar için CSS dosyası
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimationComponent = ({ targetNumber, description, key, unit }) => {
    const [newsAnim, setNewsAnim] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    return (
        <li ref={ref} className="flex flex-col justify-center items-center">
            <div className="animation-container p-20  ">
                <p className="text-center text-2xl">
                    {newsAnim && (
                        <>
                            <CountUp
                                start={0}
                                duration={10}
                                end={targetNumber}
                            />{" "}
                            {unit}{" "}
                        </>
                    )}
                </p>
            </div>
            <p className="text-center text-white text-lg mt-2 ">
                {description}
            </p>
        </li>
    );
};

export default AnimationComponent;
