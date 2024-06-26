import React, { useEffect, useState } from "react";
import services from "../../service/service";
import { useInView } from "react-intersection-observer";
import { useNavigate, useParams } from "react-router-dom";
import projectBanner from "../../assets/projects/project.png";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function MainProjects() {
    const param = useParams();
    const { t, i18n } = useTranslation();

    const [projects, setProjects] = useState(null);
    const [onProjects, setOnProjects] = useState(null);
    const [projectsAnim, setProjectsAnim] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    const getAllMainProjects = async () => {
        const result = await services.getProjects(i18n.language);

        const filterDataMain = result.data.filter((x) => x.continues === 0);
        setProjects(filterDataMain);

        const filterDataOn = result.data.filter((x) => x.continues === 1);
        setOnProjects(filterDataOn);
    };
    if (inView === true) {
        if (projectsAnim !== true) {
            setProjectsAnim(true);
        }
    }
    useEffect(() => {
        getAllMainProjects();
        window.scrollTo(0, 0);
    }, [param, i18n.language]);

    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO {t("project_title_head")}</title>
                <link rel="canonical" href={`/projects`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full relative flex justify-center items-center h-[500px] max-md:h-[200px]">
                <img
                    src={projectBanner}
                    alt="projectbanner"
                    className="w-full h-full object-cover top-0"
                />
                <div className="w-full h-full top-0 absolute bg-black opacity-40 left-0 bottom-0" />

                <p className="absolute text-6xl font-extrabold tracking-widest text-white">
                    {t("nav_project")}
                </p>
            </div>
            <>
                <div ref={ref} className="py-10 bg-white ">
                    <div className="w-full mt-20 flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                        <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                        <p className="text-4xl max-lg:text-3xl max-md:text-2xl  font-semibold text-center text-[#093977] max-sm:underline max-sm:w-full">
                            {t("home_activity_main")}
                        </p>
                        <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                    </div>
                    {projects && (
                        <div className="w-full container mx-auto  flex flex-wrap justify-evenly px-16 max-xl:px-5 max-md:px-2 max-md:justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
                            {projects?.map((item, i) => (
                                <a
                                    key={i}
                                    href={`/projects/project-detail/${item.slug}`}
                                    target="blank"
                                    className={
                                        projectsAnim
                                            ? "w-[30%] cursor-pointer my-2 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-first"
                                            : "w-[30%] cursor-pointer my-2 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-first"
                                    }
                                >
                                    <div className="relative h-3/4 w-full flex justify-center items-center">
                                        <img
                                            className="w-full h-72 object-fill"
                                            src={item.card_image}
                                            alt="newsimage"
                                        />

                                        <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                                    </div>

                                    <div className="w-full h-36 p-6 max-md:p-4 flex justify-between items-start flex-col">
                                        <p className="text-2xl  max-lg:text-xl max-md:text-base font-semibold text-black z-50 text-start">
                                            {item.project_name}
                                        </p>

                                        <p className="text-base text-sky-500 font-medium">
                                            <a
                                                href={`/projects/project-detail/${item.slug}`}
                                                target="blank"
                                            >
                                                {t("details")}...
                                            </a>
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                    <div className="w-full mt-20 flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                        <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                        <p className="text-4xl max-lg:text-3xl max-md:text-2xl  font-semibold text-center text-[#093977] max-sm:underline max-sm:w-full">
                            {t("home_activity_going")}
                        </p>
                        <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                    </div>

                    {onProjects && (
                        <div className="w-full container mx-auto  flex flex-wrap justify-evenly px-16 max-xl:px-5 max-md:px-2 max-md:justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
                            {onProjects?.map((item, i) => (
                                <a
                                    key={i}
                                    href={`/projects/project-detail/${item.slug}`}
                                    target="blank"
                                    className={
                                        projectsAnim
                                            ? "w-[30%] cursor-pointer my-2 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-first"
                                            : "w-[30%] cursor-pointer my-2 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-first"
                                    }
                                >
                                    <div className="relative h-3/4 w-full flex justify-center items-center">
                                        <img
                                            className="w-full h-72 object-fill"
                                            src={item.card_image}
                                            alt="newsimage"
                                        />

                                        <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                                    </div>

                                    <div className="w-full h-36 p-6 max-md:p-4 flex justify-between items-start flex-col">
                                        <p className="text-2xl  max-lg:text-xl max-md:text-base font-semibold text-black z-50 text-start">
                                            {item.project_name}
                                        </p>

                                        <p className="text-base text-sky-500 font-medium">
                                            <a
                                                href={`/projects/project-detail/${item.slug}`}
                                                target="blank"
                                            >
                                                {t("details")}...
                                            </a>
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </>
        </>
    );
}

export default MainProjects;
