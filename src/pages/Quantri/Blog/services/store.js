import {apiBlogDetails} from "./api";

export const getBlogDetails = async (id) => {
    try {
        const response = await apiBlogDetails(id);
        return response.data;
    } catch (error) {
        return error;
    }
    
}