import { Drawer, Tooltip } from "flowbite-react";
import { useContext, useState } from "react";
import Logo from "../components/reusuable/Logo";
import { RxCross2 } from "react-icons/rx";
import { FiEdit, FiLogOut, FiUserCheck } from "react-icons/fi";
import { BsEye } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import NavItem from "../pages/dashboard/components/NavItem";
import { Outlet, useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import useIsAdmin from "../hooks/useIsAdmin";
import Loading from "../components/reusuable/Loading";
import { AiOutlineDashboard, AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { LiaAddressCardSolid } from "react-icons/lia";
import Header from "../components/shared/Header/Header";

const theme = {
    "root": {
      "base": "fixed z-40 overflow-y-auto bg-lite p-4 transition-transform dark:bg-background-dark",
    }
  }

const Dashboard = () => {
    const { isAdmin, adminChecking } = useIsAdmin();

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => navigate('/login'))
    }

    const togglerBtn = (<button className="text-4xl p-0 text-primary hover:text-lite rounded-md transition-colors z-10 bg-expand relative neomorphism-outset-sm dark:neomorphism-outset-sm-dark bg-element dark:bg-lite-dark"
        onClick={() => setIsOpen(true)}>
        <span className="relative z-40"><IoAdd /></span>
    </button>);

    return (<>
        <div className="min-h-screen px-2 py-10 pt-32">
            <div className="max-w-screen-xl mx-auto h-full">
                <Outlet />
            </div>
        </div>

        <Header drawerToggler={togglerBtn}/>

        <Drawer theme={theme} open={isOpen} onClose={handleClose} className="bg-white">
            <div className="relative">
                <Tooltip content="Visit Site">
                    <Logo />
                </Tooltip>

                <button
                    onClick={handleClose}
                    className="absolute dark:text-text-dark right-0 top-0 text-2xl hover:text-accent-dark">
                    <RxCross2 />
                </button>
            </div>

            <Drawer.Items>
                <ul className="mt-10 text-text dark:text-text-dark relative min-h-80">
                    {adminChecking ? <Loading loading={adminChecking} /> : <>
                        {isAdmin ? <>
                            <NavItem
                                closeDrawer={handleClose}
                                icon={<AiOutlineDashboard />}
                                to="admin-dashboard"
                                name="Dashboard"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<RiUserSettingsLine />}
                                to="manage-users"
                                name="Manage Users"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<FiUserCheck />}
                                to="premium-bio-reqs"
                                name="Premium Bio Requests"
                            />
                            <NavItem
                                closeDrawer={handleClose}
                                icon={<LiaAddressCardSolid />}
                                to="contact-requests"
                                name="Contact Requests"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<AiOutlineSafetyCertificate />}
                                to="success-stories"
                                name="Success Stories"
                            />
                        </> : <>
                            <NavItem
                                closeDrawer={handleClose}
                                icon={<AiOutlineDashboard />}
                                to="user-dashboard"
                                name="Dashboard"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<FiEdit />}
                                to="edit-biodata"
                                name="Edit Biodata"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<BsEye />}
                                to="view-biodata"
                                name="View Biodata"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<TiContacts />}
                                to="my-contact-requests"
                                name="My Contact Requests"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<FaRegHeart />}
                                to="my-favourite-biodatas"
                                name="Favourite Biodatas"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<AiOutlineSafetyCertificate />}
                                to="success-story"
                                name="Success Story"
                            />
                        </>}
                    </>}

                    <li className="my-2">
                        <button
                            onClick={handleLogout}
                            className="text-accent-dark hover:text-accent-deep font-semibold flex items-center gap-2 text-3xl">
                            <FiLogOut />
                            <span className="text-base">Logout</span>
                        </button>
                    </li>
                </ul>

            </Drawer.Items>
        </Drawer>
    </>);
};

export default Dashboard;