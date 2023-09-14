import React, { useLayoutEffect, useState } from "react";
import Aboutusbg from "../../assets/aboutus/aboutusbg.png";
import AboutusRight from "../../assets/aboutus/aboutusright.png";
import AboutWawes from "../../assets/aboutus/aboutwawes.png";
import service from "../../service/service";
import CountUp from "react-countup";
import serviceBg from "../../assets/aboutus/servicebg.png";
import { useInView } from "react-intersection-observer";
import CEO from "../../assets/institutional/vedattbey.jpg";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Kvkk from "../KVKK/Hseq";
import { useTranslation } from "react-i18next";

function AboutUs() {
    const [data, setData] = useState(null);
    const [dataService, setDataService] = useState(null);
    const [newsAnim, setNewsAnim] = useState(false);
    const { slug } = useParams();
    const { t, i18n } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getDataStatHandler();
        getDataServiceHandler();
        setTimeout(() => {
            if (slug !== undefined && slug === "service") {
                const targetElement = document.querySelector(`#${slug}`);
                if (targetElement) {
                    const viewportHeight = window.innerHeight;
                    const elementRect = targetElement.getBoundingClientRect();
                    const offset =
                        -(viewportHeight / 2) + elementRect.height * 2; // Biraz yukarı kaydırma

                    window.scrollTo({
                        top: elementRect.bottom + offset,
                        behavior: "smooth",
                    });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 1000);
    }, [slug]);
    const getDataStatHandler = async () => {
        const result = await service.getAboutStat();
        setData(result.data);
    };
    const getDataServiceHandler = async () => {
        const result = await service.getAboutServices();
        setDataService(result.data);
    };
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO {t("nav_aboutus")}</title>
                <link rel="canonical" href={`/about-us`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO About Us" />
                <meta name="description" content="ViTO Aboutus" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div
                className="w-full bg-[#093977] relative"
                style={{
                    backgroundImage: `url(${Aboutusbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <img
                    className="absolute w-full h-auto z-50 bottom-[-0.1rem] left-0"
                    src={AboutWawes}
                    alt="AboutUsWawes"
                />
                <div className="w-full flex justify-center items-center flex-col text-center pt-56 pb-20 px-36 max-lg:px-20  max-md:px-2 h-auto">
                    <p className="text-7xl font-bold max-md:text-5xl text-center text-white tracking-widest z-50 py-10">
                        {t("nav_aboutus")}
                    </p>
                    <p className="text-xl font-normal max-lg:text-lg max-md:text-base text-center text-white z-50 py-10 ">
                        {t("about_us_content")}
                    </p>
                </div>
                <div className="w-full flex justify-between items-center my-5 h-[450px] max-xl:h-[550px] max-lg:h-auto max-md:flex-col">
                    <img
                        className="w-2/6 h-full object-cover object-top max-md:w-full"
                        src={CEO}
                        alt="CEO"
                    />
                    <div className="w-4/6  px-10 py-5 max-md:w-full max-md:px-2 h-auto">
                        <p className="text-3xl font-bold max-lg:text-xl max-md:text-lg text-center text-white z-50 py-10">
                            {t("about_us_ceo_message")}
                        </p>
                        <p className="text-left max-lg:text-lg max-md:text-base z-50 py-10 text-lg font-light text-white ">
                            {t("about_us_ceo_message_content")}
                        </p>
                    </div>
                </div>
                {data != null && (
                    <div className="w-full flex flex-wrap pb-20 justify-center items-center">
                        {data.map((item, i) => (
                            <div
                                key={i}
                                className={`w-2/6 max-md:w-3/6  h-40 p-2  hover:-translate-y-2 transition delay-200 ease-in max-md:hover:-translate-x-0`}
                            >
                                <div
                                    className={`w-full h-full shadow-md shadow-slate-800 flex flex-col justify-center items-center`}
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                >
                                    <div className="text-white text-center flex items-end">
                                        <p className="text-4xl font-bold max-lg:text-2xl max-md:text-xl">
                                            <CountUp
                                                start={1}
                                                end={item.value}
                                            />
                                        </p>
                                        <p className="text-lg ml-2 max-md:text-base text-center">
                                            {item.type}
                                        </p>
                                    </div>

                                    <p className="text-lg text-white max-md:text-sm text-center">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="w-full relative">
                    <img
                        className="absolute right-0 w-2/6 -top-12 max-lg:-top-5 max-sm:hidden"
                        src={AboutusRight}
                        alt="AboutusRightImage"
                    />
                    <div className="w-full flex justify-start items-center px-20 pb-3 max-sm:px-0 max-sm:pb-0 max-sm:justify-center">
                        <div className="w-[40%] max-lg:w-[55%] max-sm:w-5/6">
                            <p className="text-4xl font-bold text-white py-2">
                                {t("about_us_vision")}
                            </p>
                            <p className="text-lg font-light text-white py-2">
                                {t("about_us_vision_content")}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-start pb-40">
                        <div className="w-1/4 h-auto relative -left-40 max-sm:hidden">
                            <p
                                className="text-[13rem] font-bold text-white tracking-[1.2rem] "
                                style={{
                                    writingMode: "vertical-rl",
                                    rotate: "180deg",
                                }}
                            >
                                VİTO
                            </p>
                        </div>
                        <div className="w-3/4 relative -left-40 max-lg:-left-24 max-md:-left-12 max-sm:left-0 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-full">
                            <div className="w-3/6 max-lg:w-5/6 my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    {t("about_us_mission")}
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    {t("about_us_mission_content")}
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    {t("about_us_value")}
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    {t("about_us_value_content")}
                                </p>
                            </div>
                            <div className="w-5/6  my-10">
                                <p className="text-4xl font-bold text-white py-2">
                                    {t("about_us_work_prencible")}
                                </p>
                                <p className="text-lg font-light text-white py-2">
                                    {t("about_us_work_prencible_content")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p
                    className="text-6xl font-semibold text-[#093977] max-md:text-5xl"
                    id="service"
                >
                    {t("nav_services")}
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div
                ref={ref}
                className="w-full flex flex-wrap justify-center items-center px-32 py-6 max-lg:px-10 max-md:px-6 max-sm:px-2"
            >
                {dataService != null &&
                    dataService.map((item, i) => (
                        <a
                            id="spinning-service"
                            key={i}
                            className="w-2/6 flex justify-center items-center max-md:w-5/6 cursor-pointer"
                            href={`/service/${item.slug}#${item.slug}`}
                        >
                            <div className="relative rounded-full w-64 h-64 flex justify-center items-center max-sm:w-52 max-sm:h-52 max-sm:m-2">
                                {/* Dönen Çerçeve */}
                                <div
                                    style={{
                                        backgroundColor: `${item.color_code}`,
                                    }}
                                    className={`absolute top-0 left-0 w-full h-full rounded-full bg-cover ${
                                        newsAnim ? "animate-spin" : ""
                                    }`}
                                ></div>
                                {/* Dönen Border */}
                                <div
                                    className={`absolute top-0 left-0 w-full h-full  rounded-full ${
                                        newsAnim ? "animate-spin" : ""
                                    } bg-cover`}
                                    style={{
                                        backgroundImage: `url(${serviceBg})`,
                                    }}
                                ></div>
                                {/* Sabit Resim */}
                                <img
                                    className="w-[90%] relative z-30 rounded-full border-[12px] border-[#ffffff57]"
                                    src={item.image}
                                    alt="ServicesImage"
                                />
                                <div className="absolute z-40 w-[83%] h-[82%] border-4 border-black   rounded-full bg-black opacity-30" />
                                <p className="absolute text-white text-2xl font-bold text-center z-50">
                                    {item.title}
                                </p>
                            </div>
                        </a>
                    ))}
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="text-6xl text-center max-sm:w-full font-semibold text-[#093977] max-md:text-5xl">
                    {t("about_us_ethic")}
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div className="w-full container mx-auto px-36 flex justify-center items-center flex-col max-md:px-6">
                <p className="text-2xl font-bold text-black py-2 text-center ">
                    {t("about_us_ethic_title")}
                </p>
                <p className="text-lg py-2">{t("about_us_ethic_content")}</p>
            </div>
            <div className="w-full flex justify-center items-center px-24 gap-16 my-10 max-xl:px-10 max-md:px-5 max-xl:gap-5 relative z-40 ">
                <hr className="w-[40%] border-2 border-[#456998] max-sm:hidden" />
                <p className="w-[20%] max-sm:w-full text-6xl font-semibold text-[#093977] max-md:text-5xl text-center">
                    HSE-Q
                </p>
                <hr className="w-[40%] border-2 border-[#456998] max-sm:hidden" />
            </div>
            <Kvkk />
        </>
    );
}

export default AboutUs;
