import React, { useState } from "react";
import AnimationComponent from "./AnimationComponent";
import { useInView } from "react-intersection-observer";
function HomeAnimation() {
    const animationDatas = [
        {
            id: 0,
            targetValue: 21000,
            unit: "km",
            content: "Steel Struction Erection",
        },
        {
            id: 1,
            targetValue: 69000,
            unit: "km",
            content: "Plate for Tanks Fabrication and Erection",
        },
        {
            id: 2,
            targetValue: 23000000,
            unit: "m3",
            content: "Plate for Fabrication and Erection",
        },
    ];

    return (
        <ul className="bg-[#093977] p-10 flex flex-row justify-evenly gap-10 mt-10 items-center max-md:flex-col">
            {animationDatas.map((item) => (
                <AnimationComponent
                    unit={item.unit}
                    key={item.id}
                    targetNumber={item.targetValue}
                    description={item.content}
                />
            ))}
        </ul>
    );
}

export default HomeAnimation;
