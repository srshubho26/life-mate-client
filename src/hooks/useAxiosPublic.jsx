import axios from 'axios';
import swal from 'sweetalert';

const axiosPublic = axios.create({
    baseURL : 'https://life-mate-server.vercel.app'
});

axiosPublic.interceptors.response.use(null, err => {
    swal('Oops!', err.message, 'error');
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;