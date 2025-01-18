import { Helmet } from "react-helmet-async";
import Banner from "./parts/Banner";
import PremiumMembers from "./parts/PremiumMembers";
import HowItWorks from "./parts/HowItWorks";
import SuccessCountup from "./parts/SuccessCountup";
import SuccessStory from "./parts/SuccessStory";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Home || Life Mate</title>
            </Helmet>

            <Banner />
            <PremiumMembers />
            <HowItWorks />
            <SuccessCountup />
            <SuccessStory/>
        </>
    );
};

export default Home;