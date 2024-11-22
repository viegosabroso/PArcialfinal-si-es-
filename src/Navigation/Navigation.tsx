import Dashboard from "../screens/Dashboard/Dashboard";
import Detail from "../screens/Detail/Detail";
import Form from "../screens/Form/Form";
import Intro from "../screens/Intro/Intro";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter ([

    {
        path: '/',
        element: <Intro />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/Detail/:id",
        element: <Detail />
    },
    {
        path: "/Form",
        element: <Form />
    }

])

export default routes;