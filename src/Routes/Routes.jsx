import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Lsyouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Lsyouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Lsyouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Regis from "../pages/Login/Regis/Regis";
import PrivaterRoute from "./PrivaterRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/1"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Category></Category>,
            //     loader: () => fetch(`http://localhost:3000/news`)
            // },
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:3000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivaterRoute><News></News></PrivaterRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }

])

export default router;