import axiosInstance from "../utils/axiosClient";

const getAllNews = async () => {
    const result = await axiosInstance.get("all-news");
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
const exportFunction = {
    getAllNews,
    getSectorSlider,
    getGlobalVito,
};

export default exportFunction;
