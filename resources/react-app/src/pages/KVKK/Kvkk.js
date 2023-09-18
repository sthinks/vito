import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Kvkk() {
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
                <div className="w-full flex justify-center items-center relative h-[200px] bg-[#00dcff]">
                    <div className="w-full h-full absolute bg-black opacity-60 left-0 bottom-0" />
                </div>
                <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">
                            {t("our_human_policy_title")}
                        </p>
                        <p className="text-lg   py-2">
                            {t("our_human_policy_content")}
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">
                            {t("our_policy_why_vito")}
                        </p>
                        <p className="text-lg  py-2">
                            {t("our_policy_why_vito_content")}
                        </p>
                    </div>
                    <div className="py-2">
                        <p className="text-3xl font-bold py-2">
                            {t("our_policy_career")}
                        </p>
                        <p className="text-lg  py-2">
                            {t("our_policy_career_conetent1")}
                            <a
                                className="cursor-pointer hover:underline hover:text-blue-500 font-semibold"
                                href="mailto:cv@vito.com.tr"
                            >
                                cv@vito.com.tr
                            </a>{" "}
                            {t("our_policy_career_conetent2")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kvkk;
