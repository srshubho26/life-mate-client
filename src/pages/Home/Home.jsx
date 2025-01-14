import { Helmet } from "react-helmet-async";
import Banner from "./parts/Banner";
import PremiumMembers from "./parts/PremiumMembers";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home || Love Mate</title>
            </Helmet>

            <Banner />
            <PremiumMembers/>
        </>
    );
};

export default Home;