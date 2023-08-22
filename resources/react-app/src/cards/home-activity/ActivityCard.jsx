import React from "react";
import { Link } from "react-router-dom";

function ActivityCard({ key, src, content, color }) {
    return (
        <li className="w-full flex justify-center items-center flex-col ">
            <Link to="/projects">
                <img
                    src={src}
                    alt="imgphoto"
                    style={{ width: "200px", height: "200px" }}
                    className="cursor-pointer rounded-full object-cover"
                />
            </Link>
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
