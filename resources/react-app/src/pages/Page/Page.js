import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../service/service";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

function Page() {
    const [data, setData] = useState(null);
    const slug = useParams();
    const { t, i18n } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getPages();
    }, [slug, i18n.language]);

    const getPages = async () => {
        const result = await service.getBasePage(slug.slug, i18n.language);
        setData(result.data);
    };
    return (
        <div className="w-full">
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href={`/news`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO News" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full flex justify-center items-center relative h-[200px] bg-[#00dcff]">
                <div className="w-full h-full absolute bg-black opacity-60 left-0 bottom-0" />
            </div>
            <div className="container mx-auto px-24 max-lg:px-16 max-md:px-5 my-14">
                <p className="w-full justify-start items-start text-3xl font-bold max-md:text-xl my-10">
                    {data?.title}
                </p>
                <p dangerouslySetInnerHTML={{ __html: data?.content }} />
            </div>
            {data?.pdf_links.length > 0 && (
                <div className="w-full flex flex-wrap gap-2">
                    {data?.pdf_links.map((item, i) => (
                        <img key={i} src={item} alt="PDF" />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Page;
