import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import SignupPage from "../pages/auth/singup";
import LoginPage from "../pages/auth/login";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/auth/sign-up',
        element: <SignupPage></SignupPage>
    },
    {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
    },
])