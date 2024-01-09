import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import RegistrationForm from "./pages/RegistrationForm/RegistrationForm";
import Cabinet from "./pages/Cabinet/Cabinet"
import Product from './pages/Home/Product'
import ProductList from './pages/ProductList/ProductList'

export const authRouts = [
    {
        path: '/cart',
        Component: <RegistrationForm/> //заменить на нужное
    },
    {
        path: '/profile',
        Component: <Cabinet/> //заменить на нужное
    },
]

export const publicRouts = [
    {
        path: '/',
        Component: <ProductList/>
    },
    {
        path: '/categories',
        Component: <Categories/>
    },
    {
        path: '/sign-up',
        Component: <RegistrationForm/>
    },
    {
        path: '/item',
        Component: <Home/> //заменить на нужное
    },
    
]