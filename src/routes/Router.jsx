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
import PrivetRoute from "./PrivateRoute";

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
                element:<PrivetRoute> <CreateEvent /></PrivetRoute>
            },
            {
                path: "/events/:id",
                element:<PrivetRoute> <EventDetails></EventDetails></PrivetRoute>
            },
            {
                path: "/joined-events",
                element: <PrivetRoute><JoinedEvents></JoinedEvents></PrivetRoute>
            },
           
            {
                path: "/my-events",
               
                element: <PrivetRoute><MyEvents></MyEvents></PrivetRoute>
            },
        ],
    },
]);

export default Router;
