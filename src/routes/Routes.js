import {createBrowserRouter, RouterProvider} from "react-router-dom";

import CustomerRole from '../components/layout/CustomerRole';
import SellerRole from '../components/layout/SellerRole';
import Error from '../components/layout/Error';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import VerifyCode from '../pages/VerifyCode';
import RegisterUser from '../pages/RegisterUser';
import BidHistory from '../pages/BidHistory';
import ProductList from '../pages/seller/ProductList';
import CreateProduct from '../pages/seller/CreateProduct';
import MonthlyReport from '../pages/seller/MonthlyReport';
import {useAuth} from './AuthProvider';
import {ProtectedRoute} from "./ProtectedRoute";
import Logout from "../pages/Logout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Routes = () => {
    const {token} = useAuth();

    const router = createBrowserRouter([
        {
            path: "/authenticated",
            element: <ProtectedRoute/>, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: '',
                    element:
                        <>
                            <Header/>
                            <div className="content-div"><Home/></div>
                            <Footer/>
                        </>

                }
            ]
        },
        {
            path: '/',
            element: <CustomerRole/>,
            errorElement: <Error/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'product/detail',
                    element: <ProductDetail/>
                },
                {
                    path: 'bid-history',
                    element: <BidHistory/>
                }
            ]
        },
        {
            path: '/seller/',
            element: <SellerRole/>,
            errorElement: <Error/>,
            children: [
                {
                    path: 'products',
                    element: <ProductList/>
                },
                {
                    path: 'products/add',
                    element: <CreateProduct/>
                },
                {
                    path: 'products/report',
                    element: <MonthlyReport/>
                }
            ]
        },
        {
            path: '/register',
            element: <RegisterUser/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/logout',
            element: <Logout/>
        },
        {
            path: '/forgot',
            element: <ForgotPassword/>
        },
        {
            path: '/verify',
            element: <VerifyCode/>
        }
    ]);

    return <RouterProvider router={router}/>;
}
export default Routes;