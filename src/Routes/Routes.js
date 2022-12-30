import { createBrowserRouter } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import HomePage from "../Components/HomePage/HomePage";
import Service from "../Components/Service/Service";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/banner',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            }


        ]
    },
])
