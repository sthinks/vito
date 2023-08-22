import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "../../service/service";
import Header from "../header/Header";
import ShortFooter from "../Footer/ShortFooter";
import ProjectBaner from "../../assets/projects/project-banner.png";

import ProjectSlider from "./ProjectSlider";

import PrCard2 from "../../assets/projects/Star1.jpg";
import PrCard3 from "../../assets/projects/Star1.png";
import PrCard4 from "../../assets/projects/Star2.jpg";
import PrCard5 from "../../assets/projects/Star Jetty piping.jpg";
import PrCard6 from "../../assets/projects/Star Rafiner.jpg";

const ProjectDetail = () => {
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

    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const param = useParams();

    const getMainProject = async () => {
        try {
            const result = await services.getMainProjects(param.slug);
            setProject(result.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching project data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMainProject();
    }, []);
    // console.log(project.color_code);
    return (
        <>
            <Header />
            <div>
                {isLoading ? (
                    <p>Loading .... </p>
                ) : project ? (
                    <div
                        className={`relative top-0 z-10 bg-[${project.color_code}]`}
                    >
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
                                <h1 className="mb-6 text-white text-3xl font-bold  ">
                                    {project.title}
                                </h1>
                                <h2 className="font-bold text-3xl mb-5">
                                    Description
                                </h2>
                                <p
                                    className="text-2xl"
                                    dangerouslySetInnerHTML={{
                                        __html: project.description,
                                    }}
                                />

                                <h2 className="font-bold text-3xl my-5">
                                    Value Added
                                </h2>

                                <p
                                    className="text-2xl"
                                    dangerouslySetInnerHTML={{
                                        __html: project.value_added,
                                    }}
                                />
                                <h2 className="font-bold text-3xl my-5">
                                    Results
                                </h2>
                                {project.results && (
                                    <p
                                        className="text-2xl"
                                        dangerouslySetInnerHTML={{
                                            __html: project.results,
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Not Found</p>
                )}
            </div>
            <ProjectSlider sliderImage={projectImage} />
            <ShortFooter />
        </>
    );
};

export default ProjectDetail;
