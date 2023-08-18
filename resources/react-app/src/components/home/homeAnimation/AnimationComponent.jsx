import React, { useState, useRef, useEffect } from "react";
import "./AnimationComponent.css"; // Animasyonlar için CSS dosyası
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimationComponent = ({ description, targetNumber, unit }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [newsAnim, setNewsAnim] = useState(false); // Eklemeyi unutmayın

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                setNewsAnim(true); // Görsel animasyonun görünürlüğü başladığında tetiklenir
            }
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <li ref={ref} className="flex flex-col justify-center items-center">
            <div className="animation-container p-20">
                <p className="text-center text-2xl">
                    {isVisible && (
                        <>
                            <CountUp
                                start={0}
                                duration={10}
                                end={targetNumber}
                                redraw={true} // Bu özelliği eklemeyi unutmayın
                            />
                            {unit}
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
