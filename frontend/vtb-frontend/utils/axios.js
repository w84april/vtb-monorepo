import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3014",
});

// axiosInstance.interceptors.request.use(async (config) => {
//     const token = getToken();
//     console.log("@@@", token);
//     return {
//         ...config,
//         headers: { ...config.headers, Authorization: `Bearer ${token}` }
//     };
// })
//
// const getToken = () => {
//     localStorage.getItem()
// }