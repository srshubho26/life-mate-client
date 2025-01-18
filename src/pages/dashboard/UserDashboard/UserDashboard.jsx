import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import { BsArrow90DegLeft, BsEye } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const linkCss = "flex items-center gap-2 border border-line rounded-md px-5 py-3 hover:bg-primary hover:text-lite transition-colors";

const UserDashboard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const user = useAuth();
    return (<section>
        <Helmet>
            <title>User Dashboard || Life Mate</title>
        </Helmet>

        <Title title={"Welcome " + user?.displayName} />
        <p className='text-center mt-10 flex-wrap text-lg text-text my-3 flex items-center gap-2 justify-center'>
            Click the <span className='inline-flex items-center gap-2 text-primary font-semibold'>
                <BsArrow90DegLeft className='text-2xl' />
                Top-Left
            </span> icon for page navigation
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 text-lg md:text-xl xl:text-2xl mt-10 gap-5 text-primary font-semibold max-w-sm sm:max-w-full mx-auto">
            <Link to="/dashboard/edit-biodata" className={linkCss}>
            <span className="text-4xl md:text-5xl"><FiEdit/></span>
            <span>Edit Biodata</span>
            </Link>

            <Link to="/dashboard/view-biodata" className={linkCss}>
            <span className="text-4xl md:text-5xl"><BsEye/></span>
            <span>View Biodata</span>
            </Link>

            <Link to="/dashboard/my-contact-requests" className={linkCss}>
            <span className="text-4xl md:text-5xl"><TiContacts/></span>
            <span>My Contact Requests</span>
            </Link>

            <Link to="/dashboard/my-favourite-biodatas" className={linkCss}>
            <span className="text-4xl md:text-5xl"><FaRegHeart/></span>
            <span>Favourite Biodatas</span>
            </Link>

            <Link to="/dashboard/success-story" className={linkCss}>
            <span className="text-4xl md:text-5xl"><AiOutlineSafetyCertificate/></span>
            <span>Success Story</span>
            </Link>
        </div>
    </section>);
};

export default UserDashboard;