import { Helmet } from "react-helmet-async";
import Banner from "./parts/Banner";
import PremiumMembers from "./parts/PremiumMembers";
import HowItWorks from "./parts/HowItWorks";
import SuccessCountup from "./parts/SuccessCountup";
import SuccessStory from "./parts/SuccessStory";
import Speciality from "./parts/Speciality";
import { useEffect } from "react";
import Biodatas from "./parts/Biodatas";
import Membership from "./parts/Membership";

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
            <Speciality />
            <PremiumMembers />
            <HowItWorks />
            <Biodatas />
            <SuccessCountup />
            <Membership />
            <SuccessStory />
        </>
    );
};

export default Home;