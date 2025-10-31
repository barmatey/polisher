import axios from "axios";
// @ts-ignore
import humps from 'humps';

const BACKEND_BASE_URL = ''

export const axiosInstance = axios.create(
    {
        baseURL: BACKEND_BASE_URL,
        headers: {
            "Accept": "application/json",
        },
        withCredentials: true,
    }
)


axiosInstance.interceptors.response.use((response) => {
    if (response.data) {
        // Преобразуем ключи ответа в camelCase
        response.data = humps.camelizeKeys(response.data)
    }
    return response
})


axiosInstance.interceptors.request.use((config) => {
    if (config.data && !(config.data instanceof URLSearchParams)) {
        config.data = humps.decamelizeKeys(config.data)
    }
    return config
})