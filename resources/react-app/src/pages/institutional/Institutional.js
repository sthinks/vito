import React, { useEffect, useState } from "react";

import VedatBey from "../.././assets/institutional/VedatBeyCv.png";
import Fuat from "../.././assets/institutional/fuat.png";
import Burhan from "../.././assets/institutional/burhanbey.jpg";
import Dinc from "../.././assets/institutional/dinsellier.jpg";
import Zeki from "../.././assets/institutional/zekigunay.png";
import Canberk from "../.././assets/institutional/canberkyildiran.jpg";
import Reha from "../.././assets/institutional/reha.jpg";
import Tahir from "../.././assets/institutional/tahirbey.jpg";
import InstBanner from "../.././assets/institutional/kurumsl.png";
import History from "../.././assets/institutional/ghistory.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";
const paragraphStyles = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
};

function Institutional() {
    const { t, i18n } = useTranslation();

    const [objectPosition, setObjectPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);

    //İmage slider start
    const handleDrag = (value) => {
        if (objectPosition + value < 0) {
            setObjectPosition(0);
        } else if (objectPosition + value > 100) {
            setObjectPosition(100);
        } else {
            setObjectPosition(objectPosition + value);
        }
    };
    //İmage slider end

    return (
        <>
            <Helmet>
                <title>ViTO {t("corporate_title_head")}</title>
                <link rel="canonical" href={`/corporate`} />

                <meta name="description" content="Vito Institutional" />
                <meta name="keywords" content="Vito Institutional Page" />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Energy Engineering " />
            </Helmet>
            <div className="relative w-full flex justify-center items-center h-full object-cover max-lg:h-auto">
                <img
                    className="w-full h-fll object-cover"
                    src={InstBanner}
                    alt="instbanner"
                />
                <div className="absolute bg-blue-800 opacity-25 w-full h-full left-0 top-0" />
                <h2 className="overlay-text max-md:text-5xl max-sm:text-2xl max-sm:mt-0 mt-10 absolute text-center text-6xl text-white bg-opacity-70 px-2 py-1 rounded font-bold">
                    {t("nav_corporate")}
                </h2>
            </div>
            <div className="relative ">
                <div className="flex justify-between w-full max-lg:flex-col">
                    <div className="flex w-2/6 max-xl:w-2/4 max-lg:w-full flex-col  ">
                        <div className="bg-[#e24f82] w-full">
                            <h1 className=" text-white p-3 text-center text-3xl font-bold">
                                {t("coprote_title")}
                            </h1>
                        </div>
                        <div className="sol-alt w-full h-full">
                            <img
                                src={VedatBey}
                                alt="deneme"
                                className="w-full object-cover object-center h-full"
                            />
                        </div>
                    </div>
                    <div className="flex w-4/6 max-xl:w-2/4 max-lg:w-full   flex-col justify-between  ">
                        <div className="w-full">
                            <h1 className=" text-white text-3xl  p-3 bg-[#1b4378] text-left font-bold">
                                {t("coprote_title2")}
                            </h1>
                        </div>
                        <div className="bg-[#00a1e0] h-full text-white p-4 text-left flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3">
                            <h2 className="text-3xl font-semibold">
                                Vedat Irdelp
                            </h2>
                            <p className=" mt-5">{t("coprote_cv_vedat")}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Fuat    */}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="bg-[#093977]  text-white w-[65%] p-4 text-left h-[450px] max-lg:w-full max-lg:h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3">
                    <h2 className="text-3xl font-semibold">
                        Muhittin Fuat Şengül
                    </h2>

                    <p className=" mt-5">{t("coprote_fuat_cv")}</p>
                </div>
                <div className="w-[27%] max-lg:w-full">
                    <img
                        src={Fuat}
                        alt="fuat"
                        className="h-[450px] w-full object-cover"
                    />
                </div>
                <div className="w-[8%] flex-col text-center  max-lg:hidden">
                    <div className="k bg-[#093977] h-4/5 relative flex justify-center items-center">
                        <p
                            className="text-white text-2xl p-1 max-lg:hidden"
                            style={{
                                writingMode: "vertical-rl",

                                position: "absolute",
                            }}
                        >
                            {t("coprote_fuat_title")}
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
                <div className="hidden max-lg:flex w-full h-[100px] bg-[#093977] justify-center items-center max-md:text-xl">
                    <p className="text-white text-3xl text-center">
                        {t("coprote_fuat_title")}
                    </p>
                </div>
            </div>
            {/*Burhan   */}
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col">
                <div className="w-[8%] flex-col text-center ">
                    <div className=" bg-[#3266a7] h-4/5  flex justify-center items-center max-lg:hidden">
                        <p
                            className="text-white text-3xl"
                            style={{
                                transform: "rotate(-180deg)",
                                writingMode: "vertical-rl",
                            }}
                        >
                            {t("coprote_burhan_title")}
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
                <div className="hidden max-lg:flex bg-[#3266a7] w-full h-auto justify-center items-center ">
                    <p className="text-white text-3xl p-1  max-md:py-4">
                        {t("coprote_burhan_title")}
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full h-auto">
                    <img
                        src={Burhan}
                        alt="fuat"
                        className="w-full h-full max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#3266a7]  text-white w-[65%] p-4 text-left max-lg:w-full h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3 ">
                    <h2 className="text-3xl font-semibold">Burhan Tekdemir </h2>
                    <p className=" mt-5">{t("coprote_burhan_cv")}</p>
                </div>
            </div>
            {/* Canberk Yıldıran */}
            <div className="flex flex-row-reverse justify-between w-full h-full max-lg:flex-col">
                <div className="w-[8%] flex-col text-center ">
                    <div className=" bg-[#093977] h-4/5  flex justify-center items-center max-lg:hidden">
                        <p
                            className="text-white text-3xl"
                            style={{
                                transform: "rotate(-180deg)",
                                writingMode: "vertical-rl",
                            }}
                        >
                            {t("coprote_canberk_title")}
                        </p>
                    </div>

                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
                <div className="hidden max-lg:flex bg-[#093977] w-full h-auto justify-center items-center ">
                    <p className="text-white text-3xl p-1  max-md:py-4">
                        {t("coprote_canberk_title")}
                    </p>
                </div>
                <div className="w-[27%] max-lg:w-full h-auto">
                    <img
                        src={Canberk}
                        alt="Canberk Yıldıran"
                        className="w-full h-full max-lg:w-full object-cover"
                    />
                </div>
                <div className="bg-[#093977] text-white w-[65%] p-4 text-left max-lg:w-full h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3 ">
                    <h2 className="text-3xl font-semibold">Canberk Yıldıran</h2>
                    <p className=" mt-5">{t("coprote_canberk_cv")}</p>
                </div>
            </div>
            <div className="container mx-auto flex flex-row items-center justify-center my-2">
                <div className="w-2/5 h-[2px] bg-[#093977] mr-4"></div>
                <h1 className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    {t("coprota_managment")}
                </h1>
                <div className="w-2/5 h-[2px] bg-[#093977] ml-4"></div>
            </div>
            <div className="flex flex-row justify-between w-full h-full max-lg:flex-col-reverse bg-sky-800">
                <div className="w-1/2 text-white  p-4 text-left max-lg:w-full h-auto flex flex-col justify-center items-start px-36 max-xl:px-12 max-md:px-3 ">
                    <h2 className="text-3xl text-white font-semibold mb-1">
                        Dinç Şenlier
                    </h2>
                    <p className="text-white text-left">
                        {t("coprote_dinc_cv")}
                    </p>
                </div>
                <div className="w-[32%] max-lg:w-full h-auto">
                    <img
                        src={Dinc}
                        alt="dinç"
                        className="h-full w-full max-lg:h-auto object-cover"
                    />
                </div>
                <div className="flex justify-center items-center text-center w-[8%] max-lg:hidden">
                    <p
                        className="text-white text-2xl p-1"
                        style={{
                            writingMode: "vertical-rl",
                        }}
                    >
                        {t("coprote_dinc_title")}
                    </p>
                </div>
                <div className="hidden max-lg:flex w-full h-[100px] bg-[#093977] justify-center items-center max-md:text-xl">
                    <p className="text-white text-xl text-center">
                        {t("coprote_dinc_title")}
                    </p>
                </div>
                <div className="w-[8%]">
                    <div className="bg-[#00a1e0] h-1/3"></div>
                    <div className="bg-[#093977] h-1/3"></div>
                    <div className="bg-[#be677b] h-1/3"></div>
                </div>
            </div>
            {/*Dinçer    */}
            <div className="flex flex-row justify-between  bg-[#093977] w-full max-lg:flex-col">
                <div className="w-[5%] h-full bg-[#093977] max-lg:hidden">
                    <p
                        className="text-white text-2xl p-1"
                        style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(-180deg)",
                            marginTop: "100%",
                            height: "400px",
                            textAlign: "center",
                        }}
                    >
                        {t("coprote_zeki_title")}
                    </p>
                </div>
                <div className="bg-[#be677b] w-full hidden max-lg:flex justify-center items-center">
                    <p className="text-white text-3xl p-1 max-lg:text-xl max-md:py-4 text-center">
                        {t("coprote_zeki_title")}
                    </p>
                </div>
                <div className="w-[35%] h-auto max-lg:w-full">
                    <img
                        src={Zeki}
                        alt="dnc"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className=" bg-[#00a1e0]  text-white w-[65%] p-4 text-left h-auto max-lg:w-full px-36 max-xl:px-1 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-semibold py-2 max-md:px-0">
                        Zeki Günay
                    </h2>
                    <br />

                    <p className=" mt-5">{t("coprote_zeki_cv")}</p>
                </div>
            </div>
            {/* <div className="flex flex-row  justify-between w-full h-full max-lg:flex-col-reverse">
                <div className="bg-[#26697ce3]  text-white w-[65%] p-4 text-left h-auto max-lg:w-full max-lg:h-auto px-36 max-xl:px-12 max-md:px-3 flex flex-col justify-center items-start">
                    <h2 className="text-3xl font-semibold">Hüseyin Özcan</h2>
                    <p className=" mt-5">{t("coprote_reha_cv")}</p>
                </div>
                <div className="w-[27%] h-auto max-lg:w-full">
                    <img
                        src={Reha}
                        alt="Reha"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="hidden max-lg:flex bg-[#093977] w-full justify-center items-center">
                    <p className="text-white text-3xl p-1 max-lg:text-xl max-md:py-4 text-center">
                        {t("coprote_reha_title")}
                    </p>
                </div>
                <div className="w-[8%] flex-col text-center  max-lg:hidden">
                    <div className=" bg-[#093977] h-4/5 relative flex justify-center items-center">
                        <p
                            className="text-white text-2xl p-1"
                            style={{
                                writingMode: "vertical-rl",
                            }}
                        >
                            {t("coprote_reha_title")}
                        </p>
                    </div>
                    <div className=" h-1/5 bg-[#00a1e0]"></div>
                </div>
            </div> */}
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 mt-9">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    {t("coprote_history")}
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            <div className="w-full">
                <div
                    className="flex w-full justify-center items-center"
                    onDragOver={(e) => e.preventDefault()}
                >
                    <MdKeyboardArrowLeft
                        className="absolute left-4 max-md:-left-2 max-lg:left-2 h-48 w-48 z-50 hover:-translate-x-4 cursor-pointer duration-100"
                        style={{
                            color: "#f1f2f2",
                        }}
                        onClick={(e) => handleDrag(-25)}
                    />
                    <img
                        style={{ objectPosition: `${objectPosition}% center` }}
                        draggable="true"
                        src={History}
                        alt="asdasdsa"
                        className="object-cover cursor-pointer h-[500px] duration-200 py-5"
                    />

                    <MdKeyboardArrowRight
                        className="absolute right-4 max-md:-right-2 max-lg:right-2 h-48 w-48 z-50 hover:translate-x-4 cursor-pointer duration-100"
                        style={{
                            color: "#f1f2f2",
                        }}
                        onClick={(e) => handleDrag(25)}
                    />
                </div>
            </div>
        </>
    );
}

export default Institutional;
