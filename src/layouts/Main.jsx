import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (<div className="">
        <Header />
        <main className="pt-[65px] sm:pt-[81px]"><Outlet /></main>
        <Footer />
    </div>);
};

export default Main;