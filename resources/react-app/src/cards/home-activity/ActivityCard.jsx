import React from "react";

function ActivityCard({ key, src, content, color }) {
    return (
        <li className="w-1/2 flex justify-center items-center flex-col ">
            <img src={src} alt="imgphoto" style={{width:"200px"}} />
            <p
                style={{
                    color: color,
                    font: "18px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "20px",
                }}
            >
                {content}
            </p>
        </li>
    );
}

export default ActivityCard;
