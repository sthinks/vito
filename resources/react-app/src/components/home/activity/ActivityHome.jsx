import React from "react";
import Activity from "../../../cards/home-activity/Activity";
import Famous from "../../../assets/home-activity/famous.png";
import Continous from "../../../assets/home-activity/contproject.png";
import { Link } from "react-router-dom";

function ActivityHome() {
    return (
        <>
            <div className="container mx-auto flex flex-row items-center justify-center">
                <div className="w-2/5 h-[2px] bg-[#093977] mr-4"></div>
                <h1 className="font-bold text-5xl my-5 mx-0 text-[#093977] text-center">
                    FIELDS OF ACTIVITY
                </h1>
                <div className="w-2/5 h-[2px] bg-[#093977] ml-4"></div>
            </div>
            <Activity />
            <div className="flex flex-row justify-center items-center mt-10 ">
                <div className="w-1/2 relative cursor-pointer">
                    <img
                        src={Continous}
                        alt="contprj"
                        className="w-full h-full relative z-30"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 z-40" />
                    <Link to="/projects">
                        <p className="text-white text-2xl absolute z-50 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            ONGOING PROJECTS
                        </p>
                    </Link>
                </div>

                <div className="w-1/2 relative cursor-pointer">
                    <img
                        src={Famous}
                        alt="contprj"
                        className="w-full h-full relative z-30"
                    />
                    <div className="absolute top-0 right-0 w-full h-full bg-red-500 opacity-50 z-40" />
                    <Link to="/projects">
                    <p className="text-white text-2xl absolute z-50 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        MAIN PROJECTS
                    </p>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ActivityHome;
