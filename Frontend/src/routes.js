import Home from "./pages/Home/Home";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Cabinet from "./pages/Cabinet/Cabinet"
import Product from "./pages/ProductPage/Product";
import ProductList from './pages/ProductList/ProductList'
import Catalog from './pages/Catalog/Catalog'
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";

// export const CART_ROUTE = '/cart'
// export const PROFILE_ROUTE = '/profile'
// export const ADMIN_ROUTE = '/admin'
// export const HOME_ROUTE = '/'
// export const CATALOG_ROUTE = '/catalog'
// export const SIGNUP_ROUTE = '/sign-up'





export const authRouts = [
    {
        path: '/cart',
        Component: <Cart/> //заменить на нужное
    },
    {
        path: '/profile',
        Component: <Cabinet/> //заменить на нужное
    },
    {
        path: '/admin',
        Component: <Admin/> //заменить на нужное
    },
]

export const publicRouts = [
    {
        path: '/',
        Component: <Home/>
    },
    {
        path: '/catalog',
        Component: <Catalog/>
    },
    {
        path: '/sign-up',
        Component: <RegistrationForm/>
    },
    {
        path: '/product',
        Component: <Product/> 
    },
    {
        path: '/product-list',
        Component: <ProductList/>
    }
    
]