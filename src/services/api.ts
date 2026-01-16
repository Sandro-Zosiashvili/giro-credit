import axios from "axios";

export async function apiGet(endpoint: string) {
    try {
        const res = await axios.get(`'https://fakestoreapi.com/${endpoint}`);
        console.log(res.data)
        return res.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || "API GET request failed");
    }
}
