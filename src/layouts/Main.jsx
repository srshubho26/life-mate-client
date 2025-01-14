import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
    return (<div className="">
        <Header />
        <main className="pt-16 sm:pt-20"><Outlet /></main>
        <Footer />
    </div>);
};

export default Main;