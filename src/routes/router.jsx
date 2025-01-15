import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BiodataDetails from "../pages/BiodataDetails/BiodataDetails";
import Checkout from "../pages/Checkout/Checkout";

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
                element: <BiodataDetails />
            },
            {
                path: '/checkout/:biodataId',
                element: <Checkout />
            }
        ]
    }
])

export default router;