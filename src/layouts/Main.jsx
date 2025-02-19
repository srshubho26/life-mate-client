import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (<>
        <Header />
        <main className="pt-[64px] sm:pt-[80px]"><Outlet /></main>
        <Footer />
    </>);
};

export default Main;