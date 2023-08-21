import React, { useEffect, useState } from "react";
import services from "../../service/service";
import { useInView } from "react-intersection-observer";
import { useParams } from "react-router-dom";
function MainProjects() {
    const param = useParams();
    const [projects, setProjects] = useState(null);
    const [projectsAnim, setProjectsAnim] = useState(false);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const getAllMainProjects = async () => {
        const result = await services.getProjects();
        setProjects(result.data);
    };
    if (inView === true) {
        if (projectsAnim !== true) {
            setProjectsAnim(true);
        }
    }
    useEffect(() => {
        getAllMainProjects();
    }, []);
    return (
        <div ref={ref} className="py-10 bg-white ">
            <div className="w-full mt-20 flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-4xl font-semibold text-center text-[#093977] max-md:text-5xl">
                    MAIN PROJECTS
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            {projects && (
                <div className="w-full flex flex-wrap justify-between px-16 max-xl:px-5 max-md:px-2 max-md:justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
                    {projects.map((item, i) => (
                        <div
                            key={i}
                            className={
                                projectsAnim
                                    ? "w-[33%] h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-first"
                                    : "w-[33%] h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-first"
                            }
                        >
                            <div className="relative h-3/4 w-full flex justify-center items-center">
                                <img
                                    className="w-full h-72 object-fill"
                                    src={item.image_gallery[0].url}
                                    alt="newsimage"
                                />

                                <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                            </div>

                            <div className="w-full h-48 p-6 max-md:p-4 flex justify-between items-start flex-col">
                                <p className="text-2xl font-semibold text-black z-50 text-start">
                                    {item.title}
                                </p>
                                <p className="text-base text-sky-500 font-medium">
                                    <a href={`project-detail/${item.slug}`}>
                                        Details...
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MainProjects;
