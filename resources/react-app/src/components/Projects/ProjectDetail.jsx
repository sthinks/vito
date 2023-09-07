import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "../../service/service";
import GlobalSlider from "../Global/GlobalSlider";

const ProjectDetail = () => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const param = useParams();

    const getMainProject = async () => {
        try {
            const result = await services.getMainProjects(param.slug);
            setProject(result.data);
            if (result.data) {
                window.scrollTo(0, 0);
            }
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
            {project && (
                <div
                    className={`relative top-0 z-10 `}
                    style={{ backgroundColor: `${project?.color_code}` }}
                >
                    <div className="w-full h-[500px] max-md:h-[250px] relative">
                        <img
                            src={project?.banner}
                            alt="banner"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0" />
                    </div>

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
                            <h2 className="font-bold text-3xl mb-5">CLIENT</h2>

                            <p
                                className="text-2xl"
                                dangerouslySetInnerHTML={{
                                    __html: project.client,
                                }}
                            />

                            <h2 className="font-bold text-3xl my-5">SCOPE</h2>

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
                        <GlobalSlider sliderImage={project?.card_gallery} />
                    )}
                </div>
            )}
        </>
    );
};

export default ProjectDetail;
