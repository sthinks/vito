import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import services from "../../service/service";
import GlobalSlider from "../Global/GlobalSlider";
import Waves from "../../assets/footer/footerwaves.png";
import Loading from "../../components/loading/Loading.js";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const ProjectDetail = () => {
    const [project, setProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { t, i18n } = useTranslation();

    const param = useParams();

    const getMainProject = async () => {
        try {
            const result = await services.getProjects();

            setProject(result.data);
            const selectedProjectData = result.data.filter(
                (x) => x.slug === param.slug
            );
            const projectStatusData = result.data.filter(
                (x) => x.continues === selectedProjectData[0].continues
            );
            setProject(projectStatusData);
            const dataIndex = projectStatusData.indexOf(selectedProjectData[0]);
            const selectData = {
                data: selectedProjectData[0],
                index: dataIndex,
            };
            console.log("project", projectStatusData);
            console.log("select", selectData);
            setSelectedProject(selectData);
            if (result.data) {
                window.scrollTo(0, 0);
                setIsLoading(false);
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching project data:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getMainProject();
        setIsLoading(true);
    }, [param]);

    const navigate = useNavigate();

    const previousHandler = (index) => {
        if (index !== 0) {
            const selectDataSlug = project[index - 1].slug;
            navigate(`/projects/project-detail/${selectDataSlug}`);
        }
    };
    const nextHandler = (index) => {
        if (index !== project.length - 1) {
            const selectDataSlug = project[index + 1].slug;
            navigate(`/projects/project-detail/${selectDataSlug}`);
        }
    };
    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                selectedProject && (
                    <>
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{selectedProject.data?.project_name}</title>
                            <link
                                rel="canonical"
                                href={`/projects/project-detail/${selectedProject.data?.slug}`}
                            />
                            <meta
                                name="description"
                                content="ViTO Energy Engineering Construction and Contracting Inc"
                            />
                            {selectedProject.data.metatag != null &&
                                selectedProject.data.metatag.map((item, i) => (
                                    <meta
                                        key={i}
                                        name="description"
                                        content={item.value}
                                    />
                                ))}
                        </Helmet>

                        <div
                            className={`relative top-0`}
                            style={{
                                backgroundColor: `${selectedProject.data.color_code}`,
                            }}
                        >
                            <div className="w-full h-[500px] max-md:h-[250px] relative">
                                <img
                                    src={selectedProject.data.banner}
                                    alt="banner"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bg-black opacity-40 w-full h-full top-0 left-0" />
                                <div className="absolute bottom-4 w-full flex justify-between items-center">
                                    <div
                                        className={
                                            selectedProject.index === 0
                                                ? "w-48 max-md:w-24 text-2xl max-md:text-base h-14 ml-4 max-md:text-base opacity-50 text-white flex justify-end p-4 max-md:p-1 items-center"
                                                : "w-48 max-md:w-24 text-2xl max-md:text-base h-14 ml-4 max-md:text-base cursor-pointer  text-white flex justify-end p-4 max-md:p-1 items-center hover:-translate-x-4 duration-100"
                                        }
                                        onClick={() =>
                                            previousHandler(
                                                selectedProject.index
                                            )
                                        }
                                        style={{
                                            backgroundColor: `${selectedProject.data.color_code}`,
                                            clipPath:
                                                "polygon(100% 0%, 100% 50%, 100% 100%, 20% 100%, 0% 50%, 20% 0%)",
                                        }}
                                    >
                                        {t("project_PREVIOUS")}
                                    </div>
                                    <div
                                        className={
                                            selectedProject.index ===
                                            project.length - 1
                                                ? "w-48 max-md:w-24 text-2xl max-md:text-base max-md:text-base h-14 mr-4  opacity-50 text-white flex justify-start p-4 max-md:p-1 items-center"
                                                : "w-48 max-md:w-24 text-2xl max-md:text-base max-md:text-base h-14 mr-4 cursor-pointer  text-white flex justify-start p-4 max-md:p-1 items-center hover:translate-x-4 duration-100"
                                        }
                                        onClick={() =>
                                            nextHandler(selectedProject.index)
                                        }
                                        style={{
                                            backgroundColor: `${selectedProject.data.color_code}`,
                                            clipPath:
                                                "polygon(80% 0%, 100% 50%, 80% 100%, 0% 100%, 0% 50%, 0% 0%)",
                                        }}
                                    >
                                        {t("project_NEXT")}
                                    </div>
                                </div>
                            </div>

                            <div className="flex p-10 max-md:p-1 justify-evenly items-center text-white relative">
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
                                        {t("project_PROJECTS")}
                                    </h1>
                                </div>
                                <div className="w-3/4 max-md:w-full leading-9">
                                    <h1 className="mb-6 text-white text-3xl max-md:text-xl font-bold  ">
                                        {selectedProject.data.project_name}
                                    </h1>
                                    <h2 className="font-bold text-3xl max-md:text-xl  mb-5">
                                        {t("project_CLIENT")}
                                    </h2>

                                    <p
                                        className="text-2xl max-md:text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedProject.data.client,
                                        }}
                                    />

                                    <h2 className="font-bold text-3xl max-md:text-xl my-5">
                                        {t("project_SCOPE")}
                                    </h2>

                                    <p
                                        className="text-2xl max-md:text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedProject.data.scope,
                                        }}
                                    />
                                    <h2 className="font-bold text-3xl max-md:text-xl my-5">
                                        {t("project_SUBCONTRACTOR")}
                                    </h2>
                                    {selectedProject.data.subcontractor && (
                                        <p
                                            className="text-2xl max-md:text-base"
                                            dangerouslySetInnerHTML={{
                                                __html: selectedProject.data
                                                    .subcontractor,
                                            }}
                                        />
                                    )}
                                    <h2 className="font-bold text-3xl max-md:text-xl my-5">
                                        {t("project_PROJECT_STATUS")}
                                    </h2>

                                    <p
                                        className="text-2xl max-md:text-base"
                                        dangerouslySetInnerHTML={{
                                            __html: selectedProject.data
                                                .project_status,
                                        }}
                                    />
                                </div>
                            </div>
                            {selectedProject && (
                                <GlobalSlider
                                    sliderImage={
                                        selectedProject.data.card_gallery
                                    }
                                />
                            )}
                            <img
                                className="w-full rotate-180 relative -bottom-1 mb-3"
                                src={Waves}
                                alt="Wawes"
                            />
                        </div>
                    </>
                )
            )}
        </>
    );
};

export default ProjectDetail;
