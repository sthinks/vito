import React, { useEffect, useState } from "react";
import services from "../../service/service";
import { useInView } from "react-intersection-observer";
function Haber() {
    const [news, setNews] = useState(null);
    const [newsAnim, setNewsAnim] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const getAllNews = async () => {
        const result = await services.getHomeNews();
        setNews(result.data);
    };
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    useEffect(() => {
        getAllNews();
    }, []);
    return (
        <div ref={ref} className="py-10 bg-white ">
            <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
                <p className="font-bold text-4xl my-5 mx-0 text-[#093977] text-center">
                    NEWS
                </p>
                <hr className="w-3/4 border-2 border-[#456998] max-sm:hidden" />
            </div>
            {news && (
                <div className="w-full flex justify-around px-16 max-xl:px-5 max-md:px-2 max-md:justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center">
                    <div
                        className={
                            newsAnim
                                ? "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-first"
                                : "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-first"
                        }
                    >
                        <div className="relative h-3/4 w-full flex justify-center items-center">
                            <img
                                className="w-full h-72 object-fill"
                                src={news[0].media}
                                alt="newsimage"
                            />

                            <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                            <p className="absolute text-2xl font-semibold text-white z-50 text-center">
                                {news[0].title}
                            </p>
                        </div>

                        <div className="w-full h-48 p-6 max-md:p-4 flex justify-center items-start flex-col">
                            <p
                                className="text-[0.9rem]  font-medium text-[#3a3a3a]"
                                dangerouslySetInnerHTML={{
                                    __html: news[0].content
                                        .split(" ")
                                        .slice(0, 16)
                                        .join(" "),
                                }}
                            />
                            <p className="text-base text-sky-500 font-medium">
                                <a href={`news/${news[0].slug}`}>Devamı</a>
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            newsAnim
                                ? "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-second"
                                : "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-second"
                        }
                    >
                        <div className="relative h-3/4 w-full flex justify-center items-center">
                            <img
                                className="w-full h-72 object-fill"
                                src={news[1].media}
                                alt="newsimage"
                            />
                            <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                            <p className="absolute text-2xl font-semibold text-white z-50 text-center">
                                {news[1].title}
                            </p>
                        </div>

                        <div className="w-full h-48 p-6 max-md:p-4 flex justify-center items-start flex-col">
                            <p
                                className="text-[0.9rem]  font-medium text-[#3a3a3a]"
                                dangerouslySetInnerHTML={{
                                    __html: news[1].content
                                        .split(" ")
                                        .slice(0, 16)
                                        .join(" "),
                                }}
                            />
                            <p className="text-base text-sky-500 font-medium">
                                <a href={`news/${news[1].slug}`}>Devamı</a>
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            newsAnim
                                ? "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-thirt"
                                : "w-1/4 h-3/4 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-thirt"
                        }
                    >
                        <div className="relative h-3/4 w-full flex justify-center items-center">
                            <img
                                className="w-full h-72 object-fill"
                                src={news[2].media}
                                alt="newsimage"
                            />
                            <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                            <p className="absolute text-2xl font-semibold text-white z-50 text-center">
                                {news[2].title}
                            </p>
                        </div>

                        <div className="w-full h-48 p-6 max-md:p-4 flex justify-center items-start flex-col">
                            <p
                                className="text-[0.9rem]  font-medium text-[#3a3a3a]"
                                dangerouslySetInnerHTML={{
                                    __html: news[2].content
                                        .split(" ")
                                        .slice(0, 16)
                                        .join(" "),
                                }}
                            />
                            <p className="text-base text-sky-500 font-medium">
                                <a href={`news/${news[2].slug}`}>Read More</a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Haber;
