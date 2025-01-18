import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BiodataDetails from "../pages/BiodataDetails/BiodataDetails";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import EditBiodata from "../pages/dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../pages/dashboard/ViewBiodata/ViewBiodata";
import MyContactRequests from "../pages/dashboard/MyContactRequests/MyContactRequests";
import MyFavBiodatas from "../pages/dashboard/MyFavBiodatas/MyFavBiodatas";
import AdminDashboard from "../pages/dashboard/AdminDashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/dashboard/ManageUsers/ManageUsers";
import PremiumBioRequests from "../pages/dashboard/PremiumBioRequests/PremiumBioRequests";
import ContactReqs from "../pages/dashboard/ContactReqs/ContactReqs";
import SuccessStory from "../pages/dashboard/SuccessStory/SuccessStory";
import SuccessStories from "../pages/dashboard/SuccessStories/SuccessStories";
import Error404 from "../pages/Error404/Error404";
import AllStories from "../pages/AllStories/AllStories";
import UserDashboard from "../pages/dashboard/UserDashboard/UserDashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/biodatas',
                element: <Biodatas />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/stories',
                element: <AllStories />
            },
            {
                path: '/details/:biodataId',
                element: <PrivateRoute><BiodataDetails /></PrivateRoute>
            },
            {
                path: '/checkout/:biodataId',
                element: <PrivateRoute><Checkout /></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard/edit-biodata',
                element: <PrivateRoute><EditBiodata /></PrivateRoute>
            },
            {
                path: '/dashboard/view-biodata',
                element: <PrivateRoute><ViewBiodata /></PrivateRoute>
            },
            {
                path: '/dashboard/my-contact-requests',
                element: <PrivateRoute><MyContactRequests /></PrivateRoute>
            },
            {
                path: '/dashboard/my-favourite-biodatas',
                element: <PrivateRoute><MyFavBiodatas /></PrivateRoute>
            },
            {
                path: '/dashboard/success-story',
                element: <PrivateRoute><SuccessStory /></PrivateRoute>
            },
            {
                path: '/dashboard/user-dashboard',
                element: <PrivateRoute><UserDashboard /></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/manage-users',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/premium-bio-reqs',
                element: <PrivateRoute>
                    <AdminRoute>
                        <PremiumBioRequests />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/contact-requests',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ContactReqs />
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: '/dashboard/success-stories',
                element: <PrivateRoute>
                    <AdminRoute>
                        <SuccessStories />
                    </AdminRoute>
                </PrivateRoute>
            }
        ]
    }
])

export default router;