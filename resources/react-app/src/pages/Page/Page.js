import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../service/service";
function Page() {
    const [data, setData] = useState(null);
    const slug = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        getPages();
    }, [slug]);

    const getPages = async () => {
        const result = await service.getBasePage(slug.slug);
        setData(result.data);
    };
    return (
        <div className="w-full">
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
