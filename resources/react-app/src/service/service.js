import axiosInstance from "../utils/axiosClient";

const getAllNews = async (lang) => {
    const result = await axiosInstance.get("all-news", {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result;
};
const getHomeNews = async () => {
    const result = await axiosInstance.get("home-news");
    return result;
};
const getSectorSlider = async () => {
    const result = await axiosInstance.get("get-sector-slider");
    return result;
};
const getGlobalVito = async () => {
    const result = await axiosInstance.get("get-vito-global");
    return result;
};
const getAboutStat = async () => {
    const result = await axiosInstance.get("get-about-stats");
    return result;
};
const getAboutServices = async () => {
    const result = await axiosInstance.get("get-about-services");
    return result;
};
const getNewsDetail = async (slug) => {
    const result = await axiosInstance.get(`news-detail/${slug}`);
    return result;
};
const getProjects = async (lang) => {
    const result = await axiosInstance.get(`get-projects`, {
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": lang,
        },
    });
    return result;
};
const getMainProjects = async (slug) => {
    const result = await axiosInstance.get(`get-project-detail/${slug}`);
    return result;
};
const getHomeSlider = async () => {
    const result = await axiosInstance.get(`get-home-slider`);
    return result;
};
const getBasePage = async (slug) => {
    const result = await axiosInstance.get(`get-base-page/${slug}`);
    return result;
};
const contactForm = async (values) => {
    const result = await axiosInstance.post("/contact", values);
    return result;
};
const exportFunction = {
    getAllNews,
    getSectorSlider,
    getGlobalVito,
    getAboutStat,
    getAboutServices,
    getHomeNews,
    getNewsDetail,
    getMainProjects,
    getProjects,
    getHomeSlider,
    getBasePage,
    contactForm,
};

export default exportFunction;
