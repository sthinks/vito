import axiosInstance from "../utils/axiosClient";

const getAllNews = async () => {
    const result = await axiosInstance.get("all-news");
    return result;
};

const exportFunction = {
    getAllNews,
};

export default exportFunction;
