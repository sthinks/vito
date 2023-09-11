import React, { useState } from "react";
import AnimationComponent from "./AnimationComponent";
import { useInView } from "react-intersection-observer";
import steel from "../../../assets/home-anim/aaas.png";
import steelplant from "../../../assets/home-anim/steelll.png";
import steeltank from "../../../assets/home-anim/aaa.png";

function HomeAnimation() {
    const animationDatas = [
        {
            id: 0,
            targetValue: 21000,
            unit: "Tons",
            content: "Steel Structure Erection",
            icon: steel,
        },
        {
            id: 1,
            targetValue: 69000,
            unit: "Tons",
            content: "Steel Plates Fabricated and Erected For Tanks",
            icon: steelplant,
        },
        {
            id: 2,
            targetValue: 2300000,
            unit: "m³",
            content: "Storage Capacity for Tanks",
            icon: steeltank,
        },
    ];

    return (
        <ul className="bg-[#093977] p-10 flex flex-row justify-evenly gap-10 mt-10 items-center max-md:flex-col">
            {animationDatas.map((item) => (
                <>
                    <AnimationComponent
                        unit={item.unit}
                        key={item.id}
                        icon={item.icon}
                        targetNumber={item.targetValue}
                        description={item.content}
                    />
                </>
            ))}
        </ul>
    );
}

export default HomeAnimation;
