import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import { Footer } from "flowbite-react";

const Main = () => {
    return (<div className="">
        <Header />
        <main><Outlet /></main>
        <Footer />
    </div>);
};

export default Main;