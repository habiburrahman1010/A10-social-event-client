import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpcommingEvents from "../Components/UpcommingEvents";
import CreateEvent from "../Pages/CreateEvent";
import EventDetails from "../Pages/EventDetails";
import JoinedEvents from "../Pages/JoinedEvents";

import MyEvents from "../Pages/MyEvents";

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
            {
                path: "/events/:id",
                element: <EventDetails></EventDetails>
            },
            {
                path: "/joined-events",
                element: <JoinedEvents></JoinedEvents>
            },
           
            {
                path: "/my-events",
               
                element: <MyEvents></MyEvents>
            },
        ],
    },
]);

export default Router;
