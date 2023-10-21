import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Home/Home";
import AddProduct from "../Home/AddProduct/AddProduct";
import MyCart from "../Home/MyCart/MyCart";
import BrandPage from "../Home/BrandNames/BrandPage";
import ProductDetails from "../Home/ProductDetails.jsx/ProductDetails";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/brand/:brandName',
                element: <BrandPage />,
                loader: (params) => {
                    const { brandName } = params;
                    return fetch(`http://localhost:5000/cars?brandname=${brandName}`).then(response => response.json());
                }
            },
            {
                path: '/cars/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/cars?${params.id}`)
            }

        ]
    }
]);
export default router;