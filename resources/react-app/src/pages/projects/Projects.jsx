import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import ProjectBaner from "../../assets/projects/project-banner.png";

import PrCard2 from "../../assets/projects/Star1.jpg";
import PrCard3 from "../../assets/projects/Star1.png";
import PrCard4 from "../../assets/projects/Star2.jpg";
import PrCard5 from "../../assets/projects/Star Jetty piping.jpg";
import PrCard6 from "../../assets/projects/Star Rafiner.jpg";
import ProjectSlider from "../../components/Projects/ProjectSlider";

import As1 from "../../assets/projects/project2/as.jpg";
import As2 from "../../assets/projects/project2/as2.jpg";
import As3 from "../../assets/projects/project2/as3.jpg";
import As4 from "../../assets/projects/project2/as4.jpg";
import As5 from "../../assets/projects/project2/as5.jpg";
import As6 from "../../assets/projects/project2/as6.jpg";

function Projects() {
    const projectImage = [
        {
            id: 0,
            url: PrCard2,
            style: true,
        },
        {
            id: 1,
            url: PrCard3,
            style: true,
        },
        {
            id: 2,
            url: PrCard4,
            style: true,
        },
        {
            id: 3,
            url: PrCard5,
            style: true,
        },
        {
            id: 4,
            url: PrCard6,
            style: true,
        },
    ];
    const project2 = [
        {
            id: 0,
            url: As1,
            style: true,
        },
        {
            id: 1,
            url: As2,
            style: true,
        },
        {
            id: 2,
            url: As6,
            style: true,
        },
        {
            id: 3,
            url: As4,
            style: true,
        },
        {
            id: 4,
            url: As5,
            style: true,
        },
        {
            id: 5,
            url: As3,
            style: true,
        },
    ];
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <>
            <Header />
            <div className="relative top-0 z-10 bg-[#e24f82]">
                <img
                    src={ProjectBaner}
                    alt="banner"
                    style={{ width: "100%", height: "100vh" }}
                />
                <div className="flex p-10 justify-evenly items-center text-white relative">
                    <div
                        className="max-md:hidden"
                        style={{
                            transform: "rotate(90deg)",
                            transformOrigin: "top",
                            position: "absolute",
                            left: "-117px",
                            top: "270px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "100px",
                                fontWeight: "bold",
                            }}
                        >
                            PROJECTS
                        </h1>
                    </div>
                    <div className="w-3/4 leading-9">
                        <h1 className="mb-6 text-white text-3xl font-bold l ">
                            Star Tank Farm
                        </h1>
                        <h2 className="font-bold">Description</h2>
                        <p>
                            The new tank farm project consisting of 51 storage
                            tanks located in Aliağa, Turkey (Izmir) for SOCAR's
                            Star Refinery. The entire refinery's turnkey supply
                            was awarded to TSGI, a consortium established by
                            Técnicas Reunidas, Saipem, Goldstar, and Itochu.
                        </p>
                        <h2 className="font-bold">Value Added</h2>
                        <p className="mb-14">
                            IOT-ViTO, a joint venture between ViTO Group and
                            Indian Oil Tanking (IOT), a subsidiary of Germany's
                            11th largest family-owned company Marquard & Bahls,
                            signed a contract for the turnkey EPC works of 43
                            cylindrical and 8 spherical tanks. The total
                            capacity of the 51 tanks is 1.2 million m³ and the
                            total weight is 30 thousand tons. The project
                            reached over 5 million working hours in total. The
                            largest tanks have a diameter of 90 meters and a
                            height of 18 meters. IOT-ViTO provided in-house
                            engineering services and procurement from top
                            international suppliers. The use of hydraulic jacks
                            significantly reduced the time required for lifting
                            operations. Results Approximately 30,000 tons of
                            steel plates were manufactured with around 1,200
                            workers. Mechanical works were completed within just
                            eight months. The project was completed with zero
                            accidents and over 5 million working hours,
                            receiving a total of 9 awards for HSE procedures.
                            The contract end date was December 15, 2017, before
                            the original plan.
                        </p>
                    </div>
                </div>
            </div>
            <ProjectSlider sliderImage={projectImage} />
            <div className="relative p-10 top-0 z-10 bg-[#33b4e6]">
                <div className="flex justify-evenly items-center text-white">
                    <div
                        className="max-md:hidden"
                        style={{
                            transform: "rotate(90deg)",
                            transformOrigin: "top",
                            position: "absolute",
                            left: "-117px",
                            top: "270px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "100px",
                                fontWeight: "bold",
                            }}
                        >
                            PROJECTS
                        </h1>
                    </div>
                    <div className="w-3/4 leading-9">
                        <h1 className="mb-6 text-white text-3xl font-bold l ">
                            AOSTE
                        </h1>
                        <h2 className="font-bold">Description</h2>
                        <p>
                            The new tank farm project consisting of 51 storage
                            tanks located in Aliağa, Turkey (Izmir) for SOCAR's
                            Star Refinery. The entire refinery's turnkey supply
                            was awarded to TSGI, a consortium established by
                            Técnicas Reunidas, Saipem, Goldstar, and Itochu.
                        </p>
                        <h2 className="font-bold">Value Added</h2>
                        <p className="mb-10">
                            IOT-ViTO, a joint venture between ViTO Group and
                            Indian Oil Tanking (IOT), a subsidiary of Germany's
                            11th largest family-owned company Marquard & Bahls,
                            signed a contract for the turnkey EPC works of 43
                            cylindrical and 8 spherical tanks. The total
                            capacity of the 51 tanks is 1.2 million m³ and the
                            total weight is 30 thousand tons. The project
                            reached over 5 million working hours in total. The
                            largest tanks have a diameter of 90 meters and a
                            height of 18 meters. IOT-ViTO provided in-house
                            engineering services and procurement from top
                            international suppliers. The use of hydraulic jacks
                            significantly reduced the time required for lifting
                            operations. Results Approximately 30,000 tons of
                            steel plates were manufactured with around 1,200
                            workers. Mechanical works were completed within just
                            eight months. The project was completed with zero
                            accidents and over 5 million working hours,
                            receiving a total of 9 awards for HSE procedures.
                            The contract end date was December 15, 2017, before
                            the original plan.
                        </p>
                    </div>
                </div>
            </div>
            <ProjectSlider sliderImage={project2} />
            <div className="relative top-0 z-10 bg-[#093977]">
                <div className="flex p-10 justify-evenly items-center text-white">
                    <div
                        className="max-md:hidden"
                        style={{
                            transform: "rotate(90deg)",
                            transformOrigin: "top",
                            position: "absolute",
                            left: "-117px",
                            top: "270px",
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "100px",
                                fontWeight: "bold",
                            }}
                        >
                            PROJECTS
                        </h1>
                    </div>
                    <div className="w-3/4 leading-9">
                        <h1 className="mb-6 text-white text-3xl font-bold l ">
                            Star Mechanical and Piping Works
                        </h1>
                        <h2 className="font-bold">Description</h2>
                        <p>
                            The new tank farm project consisting of 51 storage
                            tanks located in Aliağa, Turkey (Izmir) for SOCAR's
                            Star Refinery. The entire refinery's turnkey supply
                            was awarded to TSGI, a consortium established by
                            Técnicas Reunidas, Saipem, Goldstar, and Itochu.
                        </p>
                        <h2 className="font-bold">Value Added</h2>
                        <p className="mb-10">
                            IOT-ViTO, a joint venture between ViTO Group and
                            Indian Oil Tanking (IOT), a subsidiary of Germany's
                            11th largest family-owned company Marquard & Bahls,
                            signed a contract for the turnkey EPC works of 43
                            cylindrical and 8 spherical tanks. The total
                            capacity of the 51 tanks is 1.2 million m³ and the
                            total weight is 30 thousand tons. The project
                            reached over 5 million working hours in total. The
                            largest tanks have a diameter of 90 meters and a
                            height of 18 meters. IOT-ViTO provided in-house
                            engineering services and procurement from top
                            international suppliers. The use of hydraulic jacks
                            significantly reduced the time required for lifting
                            operations. Results Approximately 30,000 tons of
                            steel plates were manufactured with around 1,200
                            workers. Mechanical works were completed within just
                            eight months. The project was completed with zero
                            accidents and over 5 million working hours,
                            receiving a total of 9 awards for HSE procedures.
                            The contract end date was December 15, 2017, before
                            the original plan.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
