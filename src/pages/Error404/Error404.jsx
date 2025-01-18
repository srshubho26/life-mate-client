import { Helmet } from "react-helmet-async";
import { TbMoodSadDizzy } from "react-icons/tb";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (<section className="flex flex-col text-center justify-center items-center gap-5 h-screen bg-element p-2">
        <Helmet>
            <title>404 Not Found || Life Mate</title>
        </Helmet>
        <span className="text-primary text-[220px]"><TbMoodSadDizzy /></span>

        <h2 className="text-primary font-playwrite font-bold text-3xl sm:text-6xl">404 Not Found</h2>

        <p className="sm:text-lg font-semibold text-text">
            The page you are trying to view doesn&apos;t exist. Go to <Link to="/" className="text-primary">Home Page</Link>
        </p>
    </section>);
};

export default Error404;