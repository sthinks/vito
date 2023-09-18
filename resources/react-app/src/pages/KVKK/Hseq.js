import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Hseq() {
    const [data, setData] = useState(null);
    const { t, i18n } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getPages();
    }, [i18n.language]);

    const getPages = async () => {
        const result = await service.getBasePage("our-policies", i18n.language);
        setData(result.data);
    };
    return (
        <>
            <div className="w-full">
                <div className="w-full container mx-auto px-36 flex justify-center items-center flex-col max-md:px-6">
                    <div className="py-2">
                        <p className="text-2xl font-bold text-black py-2 text-center ">
                            {t("about_us_hseq_title")}
                        </p>
                        <p className="text-lg py-2">
                            {t("about_us_hsqe_contetnt1")}
                            <a
                                className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                                href={data?.pdf_links[1]}
                                target="blank"
                            >
                                {" "}
                                {t("about_us_hsqe_contetnt2")}{" "}
                            </a>
                            {t("about_us_hsqe_contetnt4")}
                            <a
                                className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                                href={data?.pdf_links[0]}
                                target="blank"
                            >
                                {" "}
                                {t("about_us_hsqe_contetnt3")}{" "}
                            </a>
                            {t("about_us_hsqe_contetnt5")}{" "}
                            <a
                                className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                                href={data?.pdf_links[2]}
                                target="blank"
                            >
                                {" "}
                                ISO 9001:2015{" "}
                            </a>{" "}
                            {t("about_us_hsqe_contetnt6")} ,{" "}
                            <a
                                className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                                href={data?.pdf_links[4]}
                                target="blank"
                            >
                                {" "}
                                ISO 45001:2018{" "}
                            </a>{" "}
                            {t("about_us_hsqe_contetnt7")}{" "}
                            <a
                                className="cursor-pointer font-bold hover:underline hover:text-blue-500"
                                href={data?.pdf_links[3]}
                                target="blank"
                            >
                                {" "}
                                ISO 14001:2015{" "}
                            </a>{" "}
                            {t("about_us_hsqe_contetnt8")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hseq;
