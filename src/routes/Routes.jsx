import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import AddProduct from "../Home/AddProduct/AddProduct";
import MyCart from "../Home/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);
export default router;