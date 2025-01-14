import { useContext } from 'react';
import googleImg from '../../assets/img/google.png';
import PropTypes from 'prop-types';
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useAxiosWithCredentials from '../../hooks/useAxiosWithCredentials';

const GoogleBtn = ({ setLoading, setFormProcessing, to }) => {
    const { googleSignin } = useContext(AuthContext);
    const axiosWithCredentials = useAxiosWithCredentials();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        setLoading(true);
        setFormProcessing(true);
        googleSignin()
            .then(res => {
                axiosWithCredentials.post("/create-user?social=true", { name: res.user.displayName, email: res.user.email })
                    .then(() => {
                        swal("Done", "Login is successfull", "success")
                            .then(() => {
                                navigate(to);
                            })
                    })
            })
            .catch(() => {
                swal("Oops!", "Someting went wrong!", "error");
                setLoading(false);
                setFormProcessing(false);
            })
    }

    return (<button
        className="uppercase text-primary text-base font-semibold flex items-center gap-2 mx-auto border border-primary px-5 py-2 rounded-md hover:bg-primary hover:text-lite transition-colors"
        onClick={handleGoogleLogin}>
        <img src={googleImg} alt="Google" />
        <span>Login With Google</span>
    </button>)
};

GoogleBtn.propTypes = {
    setLoading: PropTypes.func,
    setFormProcessing: PropTypes.func,
    to: PropTypes.string
}

export default GoogleBtn;