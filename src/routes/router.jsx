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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/details/:id',
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
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/edit-biodata',
                element: <EditBiodata />
            },
            {
                path: '/dashboard/view-biodata',
                element: <ViewBiodata />
            }
        ]
    }
])

export default router;