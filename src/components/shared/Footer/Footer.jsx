import { Footer as FooterWrap } from "flowbite-react";

import Logo from "../../reusuable/Logo";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const theme = {
    "root": {
        "base": "",
    }
}

const Footer = () => {

    return (<FooterWrap theme={theme} className="border-t border-accent-dark pt-20">
        <div className="px-2">
            <div className="max-w-screen-xl mx-auto pb-20 grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-2 lg:gap-5 flex-wrap md:flex-nowrap">
                <div className="mb-5 md:mb-0 md:max-w-80 lg:max-w-md">
                    <Logo />

                    <p className="text-text dark:text-text-dark">LifeMate is a platform where people search for their disired life partner. It is platform of dream. Here tons of people have found their dream life partner.</p>
                </div>

                <div className="w-full mb-5 sm:mb-0 max-w-40 lg:max-w-48">
                    <h3 className="text-primary text-2xl font-semibold mb-2 text-shadow-sm">Useful Links</h3>

                    <ul className="text-text dark:text-text-dark text-base">
                        <li className="my-1">
                            <Link to="/" className="hover:text-primary">Home</Link>
                        </li>

                        <li className="my-1">
                            <Link to="/biodatas" className="hover:text-primary">Biodatas</Link>
                        </li>

                        <li className="my-1">
                            <Link to="/about" className="hover:text-primary">About Us</Link>
                        </li>

                        <li className="my-1">
                            <Link to="/contact" className="hover:text-primary">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="grow max-w-md lg:max-w-md">
                    <h3 className="text-primary text-2xl font-semibold mb-2 text-shadow-sm">Join Our Newsletter</h3>

                    <Newsletter />
                </div>
            </div>
        </div>

        <p className="text-center w-full border-t bg-element dark:bg-background-dark border-accent-dark sm:text-lg font-semibold text-text dark:text-text-dark py-5">
            &copy; All Rights Reserved By <span className="font-bold">LifeMate</span>
        </p>
    </FooterWrap>);
};

export default Footer;