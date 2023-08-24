import React from "react";
import Activity from "../../../cards/home-activity/Activity";
import Famous from "../../../assets/home-activity/onggoo.jpg";
import Continous from "../../../assets/home-activity/ongogin.png";
import { Link, useNavigate } from "react-router-dom";

function ActivityHome() {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    FIELDS OF ACTIVITY
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <Activity />
            <div className="flex flex-row justify-center items-center mt-10 max-md:flex-col max-md:gap-4 h-[600px] max-lg:h-[350px] py-20">
                <div
                    className="w-1/2 h-full relative cursor-pointer max-md:w-full"
                    onClick={() => navigate("projects/ongoing-projects")}
                >
                    <img
                        src={Famous}
                        alt="contprj"
                        className="w-full h-full relative z-30 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-300 opacity-50 z-40" />
                    <p>
                        <p className="text-white text-4xl max-lg:text-2xl max-md:text-xl font-bold absolute z-50 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            ONGOING PROJECTS
                        </p>
                    </p>
                </div>

                <div
                    className="w-1/2 h-full relative cursor-pointer max-md:w-full"
                    onClick={() => navigate("/projects/main-projects")}
                >
                    <img
                        src={Continous}
                        alt="contprj"
                        className="w-full h-full relative z-30 object-cover"
                    />
                    <div className="absolute top-0 right-0 w-full h-full bg-blue-500 opacity-50 z-40" />
                    <p to="">
                        <p className="text-white text-4xl max-lg:text-2xl max-md:text-xl font-bold absolute z-50 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            MAIN PROJECTS
                        </p>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ActivityHome;
