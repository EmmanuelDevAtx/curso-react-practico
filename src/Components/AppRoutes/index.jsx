import { useAuth } from "../../Context/auth"
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../../Pages/Home'
import MyAccount from '../../Pages/MyAccount'
import MyOrder from '../../Pages/MyOrder'
import MyOrders from '../../Pages/MyOrders'
import NotFound from '../../Pages/NotFound'
import SignIn from '../../Pages/SignIn'

import { useLocation } from 'react-router-dom';


const AppRoutes = () => {
    const { isSignin, validAuth } = useAuth();
    const location = useLocation();

    useEffect(() => {
        validAuth();
    }, [location.pathname]);

    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/clothes', element: <Home /> },
        { path: '/electronics', element: <Home /> },
        { path: '/furnitures', element: <Home /> },
        { path: '/toys', element: <Home /> },
        { path: '/others', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/my-orders/:id', element: <MyOrder /> },
        { path: '/sing-in', element: <SignIn /> },
        { path: '/*', element: <NotFound /> },
    ])

    return isSignin ? routes : <SignIn />
}

export default AppRoutes;