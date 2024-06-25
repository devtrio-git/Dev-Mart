import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import SignUpPage from "../pages/auth/sign-up";
import LoginPage from "../pages/auth/login";
import ProductsPage from "../pages/products/products";
import ProductInfoPage from "../pages/product-info/product-info";

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/auth/sign-up',
        element: <SignUpPage></SignUpPage>
    },
    {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/products',
        element: <ProductsPage></ProductsPage>
    },
    {
        path: '/product-info',
        element: <ProductInfoPage></ProductInfoPage>
    },
])