import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
import ReactPlayer from "react-player";
import GlobalSlider from "../../components/Global/GlobalSlider";
function News() {
    const [data, setData] = useState(null);
    const [openText, setOpenText] = useState(0);
    const getAllNews = async () => {
        const result = await service.getAllNews();
        setData(result.data);
    };
    useLayoutEffect(() => {
        getAllNews();
    }, []);
    return (
        <div className="w-full">
            <div className="w-full flex justify-center items-center py-28">
                <p className="text-6xl font-extrabold tracking-widest">NEWS</p>
            </div>
            {data?.map((item, i) =>
                i % 2 === 0 ? (
                    <div
                        key={i}
                        className={
                            item.image_gallery
                                ? "w-full mb-3 pb-2"
                                : "w-full mb-10 pb-4"
                        }
                        style={{
                            backgroundColor: `${item.color_code}`,
                        }}
                    >
                        <div className="ml-10 mb-5 flex justify-start items-start bg-white max-md:flex-col">
                            <div className="w-1/4 h-auto max-md:w-full">
                                {item.video === null ? (
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.media}
                                        alt="NewsImage"
                                    />
                                ) : (
                                    <ReactPlayer
                                        width="100%"
                                        height="250px"
                                        controls={true}
                                        url={`${item.video}`}
                                    />
                                )}
                            </div>
                            <div
                                className={
                                    openText === item.id
                                        ? "w-3/4 h-full bg-white px-10 flex justify-start flex-col max-md:w-full max-md:px-3"
                                        : "w-3/4 h-auto bg-white px-10 flex justify-start flex-col max-md:w-full max-md:px-3"
                                }
                            >
                                <p className="text-3xl text-black font-semibold py-5 max-md:text-xl">
                                    {item.title
                                        .split(" ")
                                        .slice(0, 10)
                                        .join(" ")}
                                </p>
                                {openText === item.id ? (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                ) : (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.content
                                                .split(" ")
                                                .slice(0, 80)
                                                .join(" "),
                                        }}
                                    />
                                )}

                                <p
                                    className={
                                        openText === item.id
                                            ? "hidden"
                                            : "text-blue-800 cursor-pointer hover:underline"
                                    }
                                    onClick={() => setOpenText(item.id)}
                                >
                                    Read more
                                </p>
                            </div>
                        </div>
                        {item.image_gallery != null && (
                            <div className="bg-white">
                                <GlobalSlider
                                    sliderImage={item.image_gallery}
                                />
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        key={i}
                        className="w-full mb-10 pb-4"
                        style={{
                            backgroundColor: `${item.color_code}`,
                        }}
                    >
                        <div className="mr-10 pb-5 flex flex-row-reverse justify-between items-start bg-white max-md:flex-col">
                            <div className="w-1/4 h-auto max-md:w-full">
                                {item?.video === null ? (
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.media}
                                        alt="NewsImage"
                                    />
                                ) : (
                                    <ReactPlayer
                                        width="100%"
                                        height="250px"
                                        controls={true}
                                        url={`${item.video}`}
                                    />
                                )}
                            </div>
                            <div
                                className={
                                    openText === item.id
                                        ? "w-3/4 h-full bg-white px-10 flex justify-start flex-col max-md:w-full max-md:px-3"
                                        : "w-3/4 h-auto bg-white px-10 flex justify-start flex-col max-md:w-full max-md:px-3"
                                }
                            >
                                <p className="text-3xl text-black font-semibold py-5 max-md:text-xl">
                                    {item.title
                                        .split(" ")
                                        .slice(0, 10)
                                        .join(" ")}
                                </p>
                                {openText === item.id ? (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                ) : (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.content
                                                .split(" ")
                                                .slice(0, 80)
                                                .join(" "),
                                        }}
                                    />
                                )}

                                <p
                                    className={
                                        openText === item.id
                                            ? "hidden"
                                            : "text-blue-800 cursor-pointer hover:underline"
                                    }
                                    onClick={() => setOpenText(item.id)}
                                >
                                    Read more
                                </p>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default News;
