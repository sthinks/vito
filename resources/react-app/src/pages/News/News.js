import React, { useLayoutEffect, useState } from "react";
import service from "../../service/service";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import newsBanner from "../../assets/news/newsbanner.jpg";
import Loading from "../../components/loading/Loading";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function News() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState(null);
    const [newsAnim, setNewsAnim] = useState(true);
    const { t, i18n } = useTranslation();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const navigate = useNavigate();

    const getAllNews = async () => {
        const result = await service.getAllNews();
        setNews(result.data);
        setIsLoading(false);
    };
    if (inView === true) {
        if (newsAnim !== true) {
            setNewsAnim(true);
        }
    }
    useLayoutEffect(() => {
        getAllNews();
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ViTO {t("title_news")}</title>
                <link rel="canonical" href={`/news`} />
                <meta
                    name="description"
                    content="ViTO Energy Engineering Construction and Contracting Inc"
                />
                <meta name="description" content="ViTO News" />
                <meta name="description" content="ViTO Energy Projects" />
            </Helmet>
            <div className="w-full">
                <div className="w-full flex justify-center items-center relative h-[500px] max-md:h-[200px]">
                    <img
                        className="w-full h-full"
                        src={newsBanner}
                        alt="NewsBanner"
                    />
                    <div className="w-full h-full absolute bg-black opacity-40 left-0 bottom-0" />
                    <p className="absolute text-6xl font-extrabold tracking-widest text-white">
                        {t("nav_news")}
                    </p>
                </div>
                <div className="w-full flex justify-center items-center px-24 gap-16 my-8 max-xl:px-10 max-md:px-5 max-xl:gap-5">
                    <hr className="w-full border-2 border-[#456998] max-sm:hidden" />
                </div>
                {news && (
                    <div className="w-full container mx-auto flex flex-wrap justify-evenly px-24 max-xl:px-5 max-md:px-2 max-md:justify-evenly max-sm:flex-col max-sm:justify-center max-sm:items-center">
                        {news.map((item, i) => (
                            <div
                                onClick={() => navigate(`/news/${item.slug}`)}
                                key={i}
                                className={
                                    newsAnim
                                        ? "w-[30%] h-3/4 cursor-pointer my-2 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-firstt"
                                        : "w-[30%] h-3/4 cursor-pointer my-2 max-md:w-[30%] max-md:h-[60%] max-sm:w-5/6 max-sm:my-2 bg-white relative shadow-lg animate-card-down-firstt"
                                }
                            >
                                <div className="relative h-3/4 w-full flex justify-center items-center">
                                    <img
                                        className="w-full h-72 object-fill"
                                        src={item.media}
                                        alt="newsimage"
                                    />

                                    <div className="absolute bg-[#456998] w-full h-full opacity-50 z-40" />
                                    <p className="absolute text-2xl font-semibold text-white z-50 text-center">
                                        {item.title}
                                    </p>
                                </div>

                                <div className="w-full h-48 p-6 max-md:p-4 flex justify-center items-start flex-col">
                                    <p
                                        className="text-[0.9rem]  font-medium text-[#3a3a3a]"
                                        dangerouslySetInnerHTML={{
                                            __html: item?.content
                                                .split(" ")
                                                .slice(0, 16)
                                                .join(" "),
                                        }}
                                    />
                                    <p className="text-base text-sky-500 font-medium">
                                        <a href={`/news/${item.slug}`}>
                                            {t("news_read_more")}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default News;
