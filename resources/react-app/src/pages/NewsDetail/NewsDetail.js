import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../service/service";
import newsBg from "../../assets/news/newsbg.jpg";
import GlobalSlider from "../../components/Global/GlobalSlider";
import { Helmet } from "react-helmet";
function NewsDetail() {
    const [data, setData] = useState(null);
    const { slug } = useParams();
    const getByNewsDetail = async () => {
        const result = await service.getNewsDetail(slug);
        setData(result.data);
        console.log(result.data);
    };
    useEffect(() => {
        getByNewsDetail();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {data && (
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{data?.title}</title>
                    <link rel="canonical" href={`/news/${data?.slug}`} />
                    <meta
                        name="description"
                        content="ViTO Energy Engineering Construction and Contracting Inc"
                    />
                    {data.metatag != null &&
                        data.metatag.map((item, i) => (
                            <meta
                                key={i}
                                name="description"
                                content={item.value}
                            />
                        ))}
                </Helmet>
            )}

            <div className="w-full">
                {data && (
                    <>
                        <div className="w-full flex justify-center items-center pb-32 relative h-[550px] max-lg:h-[350px]">
                            <img
                                className="absolute w-full h-full object-cover z-10"
                                src={
                                    data.banner !== null ? data.banner : newsBg
                                }
                                alt="bgbanner"
                            />

                            <div className="absolute w-full h-full bg-black opacity-70 z-20" />
                            <p className="w-4/6 max-lg:w-full text-5xl max-lg:text-3xl max-sm:text-xl font-extrabold tracking-widest px-24 max-md:px-6 text-center z-30 text-white mt-11 max-lg:mt-24">
                                {data.title}
                            </p>
                        </div>

                        <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5 z-20 max-lg:hidden">
                            <hr className="w-full border-2 border-[#456998] max-sm:hidden" />
                        </div>
                        <div className="container mx-auto px-16 max-lg:px-5 flex my-5 max-lg:flex-col">
                            {data.media != null && (
                                <div className="h-[250px] my-2 w-3/12 max-lg:w-full">
                                    <img
                                        className="w-full h-full object-fill"
                                        src={data.media}
                                        alt="NewsDetailImage"
                                    />
                                </div>
                            )}
                            <p
                                className="font-medium px-5 mt-5 w-9/12 max-lg:w-full"
                                dangerouslySetInnerHTML={{
                                    __html: data?.content,
                                }}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <div className="container mx-auto px-16 max-md:px-0">
                                {data.image_gallery !== null && (
                                    <GlobalSlider
                                        sliderImage={data.image_gallery}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default NewsDetail;
