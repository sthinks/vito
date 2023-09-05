import React from "react";
import ActiveFirst from "../../assets/home-activity/developp.png";
import ActiveSecond from "../../assets/home-activity/epc.jpg";
import ActiveThird from "../../assets/home-activity/bergamaa.png";
import ActiveFourth from "../../assets/home-activity/acd.png";
import ActivityCard from "./ActivityCard";

function Activity() {
    const active_cards = [
        {
            id: 0,
            src: ActiveFirst,
            description: "PROJECT DEVELOPMENT",
            slu: "project",
        },
        {
            id: 1,
            src: ActiveSecond,
            description: "EPC",
            slug: "service",
        },
        {
            id: 2,
            src: ActiveThird,
            description: "FABRICATION",
            slug: "service",
        },
        {
            id: 3,
            src: ActiveFourth,
            description: "MAINTENANCE",
            slug: "service",
        },
    ];
    return (
        <div className="container mx-auto my-5">
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
        </div>
    );
}

export default Activity;
