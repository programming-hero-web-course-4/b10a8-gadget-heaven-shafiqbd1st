import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statistics/Statistics";
import AllCards from "../AllCards/AllCards";
import Details from "../Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Brands from "../Brands/Brands";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('/categories.json'),
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/gadgetHeaven.json'),
                        element: <AllCards></AllCards>
                    },
                    {
                        path: '/category/:category',
                        loader: () => fetch('/gadgetHeaven.json'),
                        element: <AllCards></AllCards>
                    }
                ]
            },
            {
                path: '/product-details/:Id',
                loader: () => fetch('/gadgetHeaven.json'),
                element: <Details></Details>

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/Brand',
                element: <Brands></Brands>
            }

        ]
    },
]);
export default router
