import axios from "axios"

export const getService = async () => {
    const response = await axios.get("https://bollywood.free.beeceptor.com/bollywood");
    return response.data;
}