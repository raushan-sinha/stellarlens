import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND_URL
})

export const getSpaceData = async () => {
    const response = await API.get('');
    return response.data;
}