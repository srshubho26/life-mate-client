import { Card, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleBtn from '../../components/reusuable/GoogleBtn';
import { useContext, useEffect, useRef, useState } from "react";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/reusuable/Loading";
import loginImg from '../../assets/img/login.svg';
import { AuthContext } from "../../Provider/AuthProvider";

const btnCss = "w-fit text-primary transition-colors font-semibold text-lg rounded neomorphism-outset dark:neomorphism-outset-dark px-6 py-2 hover:text-lite uppercase bg-expand relative";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { loginUser, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [formProcessing, setFormProcessing] = useState(false);
    const { state } = useLocation();
    const formRef = useRef();

    useEffect(() => {
        if (formProcessing) return;
        if (user) navigate('/');
    }, [user, navigate, formProcessing]);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        setLoading(true);
        setFormProcessing(true);
        loginUser(email, pass)
            .then(() => {
                setLoading(false);
                swal("Done", "Login is successfull", "success")
                    .then(() => {
                        navigate(state || '/');
                    })

            }).catch(({ code }) => {
                setLoading(false);
                let msg = "Someting went wrong!";
                if (code === 'auth/invalid-credential') {
                    msg = "Invalid Email Or Password";
                }
                swal("Error!", msg, "error");
            })
    }

    const fillFormVal = (email, pass)=>{
        formRef.current.email.value = email;
        formRef.current.pass.value = pass;
    }

    return (<section className="py-20 px-2 login">
        <Helmet>
            <title>Login || Life Mate</title>
        </Helmet>

        <div className="max-w-screen-xl mx-auto flex-col-reverse md:flex-row flex items-center gap-5 justify-between">
            <Card className="max-w-sm md:max-w-md border-none rounded neomorphism-outset dark:neomorphism-outset-dark bg-element dark:bg-background-dark w-full relative overflow-hidden">
                <Loading loading={loading} />

                <h3 className="text-primary font-playwrite text-4xl mb-5 font-bold">Login</h3>

                <div className="flex gap-2 justify-between">
                    <button onClick={()=>fillFormVal("z@gmail.com", "aA123456")} type="button" className={btnCss}>
                        <span className="relative z-20 text-sm">Normal</span>
                    </button>

                    <button onClick={()=>fillFormVal("a@gmail.com", "aA123456")} type="button" className={btnCss}>
                        <span className="relative z-20 text-sm">Premium</span>
                    </button>

                    <button onClick={()=>fillFormVal("admin@gmail.com", "Admin123456")} type="button" className={btnCss}>
                        <span className="relative z-20 text-sm">Admin</span>
                    </button>
                </div>

                <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleLogin}>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Email" />
                        </div>
                        <TextInput name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label value="Password" />
                        </div>
                        <TextInput name="pass" type="password" placeholder="Enter your password" required />
                    </div>

                    <button className={btnCss}>
                        <span className="relative z-10">Login</span>
                    </button>
                </form>
                <Label className="text-desc text-sm sm:text-base">
                    Don&apos;t have an account?
                    <Link to="/register" className="ml-2 text-primary">Register</Link>
                </Label>

                <h3 className="text-center dark:text-lite text-lg font-semibold">OR</h3>

                <GoogleBtn setLoading={setLoading} setFormProcessing={setFormProcessing} to={state || "/"} />
            </Card>

            <div className="w-full max-w-sm md:max-w-xl">
                <img src={loginImg} />
            </div>
        </div>
    </section>)
};

export default Login;