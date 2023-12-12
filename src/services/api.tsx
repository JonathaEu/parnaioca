import axios from "axios";

import { parseCookies } from "nookies";

const cookies = parseCookies();
const userToken = cookies.token

const BASEURL = "http://127.0.0.1:8000/api"

const api = axios.create({
    baseURL: BASEURL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${userToken}`
    console.log(userToken);
    return config;
})

export default api