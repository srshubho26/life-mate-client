import { Drawer } from "flowbite-react";
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
import { AiOutlineDashboard } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { LiaAddressCardSolid } from "react-icons/lia";

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

    return (<>
        <div className="min-h-screen px-2 bg-lite py-10">
            <button className="border border-primary text-4xl p-0 text-primary hover:text-lite hover:bg-primary rounded-md bg-lite fixed top-1 left-1 transition-colors z-10"
                onClick={() => setIsOpen(true)}>
                <IoAdd />
            </button>

            <div className="max-w-screen-xl mx-auto h-full">
                <Outlet />
            </div>
        </div>

        <Drawer open={isOpen} onClose={handleClose} className="bg-lite">
            <div className="relative">
                <Logo />

                <button
                    onClick={handleClose}
                    className="absolute right-0 top-0 text-2xl hover:text-accent-dark">
                    <RxCross2 />
                </button>
            </div>

            <Drawer.Items>
                <ul className="mt-10 text-text relative min-h-80">
                    {adminChecking ? <Loading loading={adminChecking} /> : <>
                        {isAdmin ? <>
                            <NavItem
                                closeDrawer={handleClose}
                                icon={<AiOutlineDashboard />}
                                to=""
                                name="Dashboard"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<RiUserSettingsLine />}
                                to="admin"
                                name="Manage Users"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<FiUserCheck />}
                                to=""
                                name="Approved Premium"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<LiaAddressCardSolid />}
                                to=""
                                name="Approved Contact Requests"
                            />
                        </> : <>
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
                                name="My Contact Request"
                            />

                            <NavItem
                                closeDrawer={handleClose}
                                icon={<FaRegHeart />}
                                to="my-favourite-biodatas"
                                name="Favourites Biodata"
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