import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import backSectorImage from "../../assets/sector/bgsector2.png";
import rightImage from "../../assets/sector/asasa.png";
import leftImage from "../../assets/sector/bgsector.png";
import SectorBanner from "../../assets/sector/sectors.jpg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Sector() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO Sectors</title>
                <link rel="canonical" href={`/sectors`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Sectors" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full">
                <div className="w-full flex justify-center items-center relative h-[500px] max-md:h-[250px]">
                    <img
                        className="w-full h-full object-cover"
                        src={SectorBanner}
                        alt="SectorBanner"
                    />
                    <div className="w-full h-full absolute bg-black opacity-40 left-0 bottom-0" />
                    <p className="absolute text-6xl font-extrabold tracking-widest text-white">
                        {t("nav_sector")}
                    </p>
                </div>
                <div>
                    <ReactPlayer
                        className="sector-video"
                        width="100%"
                        controls="true"
                        url="https://www.youtube.com/watch?v=m0T3UKSuZxg"
                    />
                </div>
                <div
                    className="w-full bg-cover py-5"
                    style={{ backgroundImage: `url(${backSectorImage})` }}
                >
                    <div className="w-ful flex justify-end my-2 relative -bottom-10 max-lg:-bottom-2">
                        <div className="w-4/6 pr-8 max-lg:w-full max-lg:px-2">
                            <p className="text-end text-6xl font-semibold py-4 max-md:text-center">
                                {t("sector_oilandgaz")}
                            </p>

                            <div className="text-end text-lg mt-10">
                                {t("sector_t1")}
                                <p></p>
                                <p>{t("sector_t2")}</p>
                            </div>
                            <p className="text-end text-lg mt-10">
                                {t("sector_t3")}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="w-[35%]">
                            <img
                                className="w-full object-contain"
                                src={leftImage}
                                alt="LeftImage"
                            />
                        </div>
                        <div className="w-[45%] max-lg:w-[65%]">
                            <img
                                className="w-full mt-20 object-contain"
                                src={rightImage}
                                alt="RightImage"
                            />
                        </div>
                    </div>
                    <div className="w-ful flex justify-start relative -top-14 max-lg:-top-2">
                        <div className="w-4/6 pl-8 max-lg:w-full max-lg:px-2">
                            <p className="text-start text-6xl font-semibold py-4 max-md:text-center">
                                {t("sector_energy")}
                            </p>

                            <div className="text-start text-lg mt-10">
                                <p>{t("sector_e1")}</p>
                                <p>{t("sector_e2")}</p>
                                <p>{t("sector_e3")}</p>
                            </div>
                            <p className="text-start text-lg mt-10">
                                {t("sector_e4")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sector;
