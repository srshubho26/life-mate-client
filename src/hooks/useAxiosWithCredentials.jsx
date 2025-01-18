import axios from "axios";
import swal from "sweetalert";

const withCredentials = axios.create({
    baseURL: 'https://life-mate-server.vercel.app',
    withCredentials: true
});
withCredentials.interceptors.response.use(null, err => {
    swal('Oops!', err.message, 'error');
})

const useAxiosWithCredentials = () => {
    return withCredentials;
};

export default useAxiosWithCredentials;