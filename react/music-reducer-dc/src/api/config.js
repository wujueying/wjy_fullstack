import axios from 'axios';

export const baseUrl = "https://localhost:3000";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export {axiosInstance}

