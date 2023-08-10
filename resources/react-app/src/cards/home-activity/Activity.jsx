import React from "react";
import ActiveFirst from "../../assets/home-activity/activity-1.png";
import ActiveSecond from "../../assets/home-activity/activity-2.png";
import ActiveThird from "../../assets/home-activity/activity-3.png";
import ActiveFourth from "../../assets/home-activity/activity4.png";
import ActivityCard from "./ActivityCard";

function Activity() {
    const active_cards = [
        {
            id: 0,
            src: ActiveFirst,
            description: "Lorem Ipsum",
        },
        {
            id: 1,
            src: ActiveSecond,
            description: "Lorem Ipsum",
        },
        {
            id: 2,
            src: ActiveThird,
            description: "Lorem Ipsum",
        },
        {
            id: 3,
            src: ActiveFourth,
            description: "Lorem Ipsum",
        },
    ];
    return (
        <div className="container mx-auto">
            <ul className="grid grid-cols-4 place-items-center max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4" >
                {active_cards.map((item, index) => (
                    <ActivityCard
                        key={index}
                        src={item.src}
                        content={item.description}
                        color={item.color}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Activity;
