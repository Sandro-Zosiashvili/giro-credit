import axios, { AxiosError } from "axios";

export async function apiGet<T = any>(endpoint: string): Promise<T> {
    try {
        const res = await axios.get<T>(`https://fakestoreapi.com/${endpoint}`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        throw new Error(axiosError.response?.data?.message || "API GET request failed");
    }
}
// დროებით ესე იყოს