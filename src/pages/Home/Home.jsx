import { Helmet } from "react-helmet-async";
import Banner from "./parts/Banner";
import PremiumMembers from "./parts/PremiumMembers";
import HowItWorks from "./parts/HowItWorks";
import SuccessCountup from "./parts/SuccessCountup";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home || Love Mate</title>
            </Helmet>

            <Banner />
            <PremiumMembers />
            <HowItWorks />
            <SuccessCountup />
        </>
    );
};

export default Home;