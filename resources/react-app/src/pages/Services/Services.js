import React, { useEffect, useState } from "react";
import SectorBanner from "../../assets/sector/sectors.jpg";
import { useNavigate, useParams } from "react-router-dom";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

function Services() {
    const { t, i18n } = useTranslation();

    const slug = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getTake();
    }, [slug]);
    const getTake = () => {
        if (slug.slug !== undefined) {
            const targetElement = document.querySelector(`#${slug.slug}`);

            if (targetElement) {
                const viewportHeight = window.innerHeight;
                const elementRect = targetElement.getBoundingClientRect();
                const offset =
                    -(viewportHeight / 2) + elementRect.height * 0.25; // Biraz yukarı kaydırma

                window.scrollTo({
                    top: elementRect.top + offset,
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo(0, 0);
        }
    };
    return (
        <div className="w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO {t("nav_services")}</title>
                <link rel="canonical" href={`/services`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO Services" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full flex justify-center items-center relative max-md:h-[200px] ">
                <img
                    className="w-full h-full object-cover"
                    src={SectorBanner}
                    alt="SectorBanner"
                />
                <div className="w-full h-full absolute bg-black opacity-60 left-0 bottom-0" />
                <p className="absolute text-6xl font-extrabold max-md:text-3xl tracking-widest text-white">
                    {t("nav_services")}
                </p>
            </div>
            <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="engineering"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        {t("services_enginering")}
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        {t("services_enginering_content")}
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="procurement"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        {t("services_procument")}
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        {t("services_procument_content")}
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="construction"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        {t("services_construciton")}
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        {t("services_construciton_content")}

                        {/* Our highly experienced senior project management team
                        specializes in construction and installation works for
                        large, international projects. Throughout our past
                        projects, we have gained a strong reputation for safety,
                        quality, and program performance. We create our projects
                        using consistent tools, systems, and standards to
                        achieve superior results safely, even in the most
                        challenging environments
                        <br />
                        For storage terminals, we use our proprietary fleet of
                        over 700 hydraulic jacks to install storage tanks up to
                        105 meters in diameter faster, safer, and more
                        efficiently, allowing our customers to use their
                        facilities earlier than traditional methods.
                        <br />
                        Our experienced and top-tier project management team
                        specializes in construction and installation works for
                        large, international projects. Throughout our past
                        projects, we have gained a strong reputation for safety,
                        quality, and program performance. We create our projects
                        using consistent tools, systems, and standards to
                        achieve superior quality results safely, even in the
                        most challenging environments. (SUGGESTION: We create
                        our projects using consistent tools, systems, and
                        standards to achieve superior quality results safely,
                        even in the most challenging environments.)
                        <br />
                        Using our proprietary fleet of over 700 hydraulic jacks,
                        we install storage tanks up to 105 meters in diameter
                        faster, safer, and more efficiently, allowing our
                        customers to use their facilities earlier than
                        traditional methods for storage terminals.  */}
                    </p>
                </div>
                <div
                    className="w-full py-20 border-b-2 border-gray-500"
                    id="hydraulic-jack-systems"
                >
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        {t("services_jack_systems")}
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        {t("services_jack_systems_content")}
                    </p>
                </div>
                <div className="w-full py-20" id="manufacturing">
                    <p className="text-3xl text-black opacity-60 max-lg:text-2xl max-md:text-xl font-bold my-2">
                        {t("services_manufacturing")}
                    </p>
                    <p className="text-black  max-lg:text-lg max-md:text-md">
                        {t("services_manufacturing_content")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
