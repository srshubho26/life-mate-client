import { Helmet } from "react-helmet-async";
import Banner from "./parts/Banner";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home || Love Mate</title>
            </Helmet>
            <Banner />
        </>
    );
};

export default Home;