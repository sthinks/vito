import axiosInstance from "../utils/axiosClient";

const getAllNews = async () => {
    const result = await axiosInstance.get("all-news");
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
const getProjects = async () => {
    const result = await axiosInstance.get(`get-projects`);
    return result;
};
const getMainProjects = async (slug) => {
    const result = await axiosInstance.get(`get-project-detail/${slug}`);
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
};

export default exportFunction;
