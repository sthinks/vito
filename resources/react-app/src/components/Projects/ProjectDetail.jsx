import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "../../service/service";
import Header from "../header/Header";
import ShortFooter from "../Footer/ShortFooter";
import ProjectBaner from "../../assets/projects/project-banner.png";
import HomeAboutSlider from "../home/homeAbout/HomeAboutSlider";

const ProjectDetail = () => {
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

    return (
        <>
            <div>
                {isLoading ? (
                    <p>Loading .... </p>
                ) : project ? (
                    <div
                        className={`relative top-0 z-10 `}
                        style={{ backgroundColor: `${project?.color_code}` }}
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
                                    {project.project_name}
                                </h1>
                                <h2 className="font-bold text-3xl mb-5">
                                    CLIENT
                                </h2>

                                <p
                                    className="text-2xl"
                                    dangerouslySetInnerHTML={{
                                        __html: project.client,
                                    }}
                                />

                                <h2 className="font-bold text-3xl my-5">
                                    SCOPE
                                </h2>

                                <p
                                    className="text-2xl"
                                    dangerouslySetInnerHTML={{
                                        __html: project.scope,
                                    }}
                                />
                                <h2 className="font-bold text-3xl my-5">
                                    SUBCONTRACTOR
                                </h2>
                                {project.subcontractor && (
                                    <p
                                        className="text-2xl"
                                        dangerouslySetInnerHTML={{
                                            __html: project.subcontractor,
                                        }}
                                    />
                                )}
                                <h2 className="font-bold text-3xl my-5">
                                    PROJECT STATUS
                                </h2>

                                <p
                                    className="text-2xl"
                                    dangerouslySetInnerHTML={{
                                        __html: project.project_status,
                                    }}
                                />
                            </div>
                        </div>
                        {project && (
                            <HomeAboutSlider
                                sliderImage={project?.card_gallery}
                            />
                        )}
                    </div>
                ) : (
                    <p>Not Found</p>
                )}
            </div>
        </>
    );
};

export default ProjectDetail;
