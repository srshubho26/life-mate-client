import { Helmet } from "react-helmet-async";
import Title from "../../../components/reusuable/Title";
import { BsArrow90DegLeft } from "react-icons/bs";
import useAuth from "../../../hooks/useAuth";

const UserDashboard = () => {
    const user = useAuth();
    return (<section>
        <Helmet>
            <title>User Dashboard || Love Mate</title>
        </Helmet>

        <Title title={"Welcome " + user?.displayName} />
        <p className='text-center mt-10 flex-wrap text-lg text-text my-3 flex items-center gap-2 justify-center'>
            Click the <span className='inline-flex items-center gap-2 text-primary font-semibold'>
                <BsArrow90DegLeft className='text-2xl' />
                Top-Left
            </span> icon for available options
        </p>
    </section>);
};

export default UserDashboard;