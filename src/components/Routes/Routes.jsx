import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Statistics from "../Statistics/Statistics";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }

        ]
    },
]);
export default router
