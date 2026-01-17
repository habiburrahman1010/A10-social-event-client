import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpcommingEvents from "../Components/UpcommingEvents";
import CreateEvent from "../Pages/CreateEvent";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                path: "/events",
                element: <UpcommingEvents></UpcommingEvents>
            },
            {
                path: "/create-event",
                element: <CreateEvent />
            },
        ],
    },
]);

export default Router;
