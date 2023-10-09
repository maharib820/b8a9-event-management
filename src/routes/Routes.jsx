import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details";
import PrivateRoute from "../Private/PrivateRoute";
import Offer from "../pages/Offer/Offer";
import ContactUs from "../pages/ContactUs/ContactUs";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "details/:id",
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: "/coupon",
                element: <PrivateRoute><Offer></Offer></PrivateRoute>
            },
            {
                path: "/query",
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            }
        ]
    },
]);

export default Routes;