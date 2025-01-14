import axios from "axios";

const withCredentials = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosWithCredentials = () => {
    return withCredentials;
};

export default useAxiosWithCredentials;