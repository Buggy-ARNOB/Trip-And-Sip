import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import Service from "../Components/Service/Service";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            }


        ]
    },
])
