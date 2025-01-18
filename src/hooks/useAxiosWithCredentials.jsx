import axios from "axios";

const withCredentials = axios.create({
    // baseURL: 'https://life-mate-server.vercel.app',
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosWithCredentials = () => {
    return withCredentials;
};

export default useAxiosWithCredentials;