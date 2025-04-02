import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://127.0.0.1:8000/twitch/v1",
    timeout: 5000
})

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}