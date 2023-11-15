import {Route, Routes} from 'react-router-dom'
import {authRouts, publicRouts} from "../routes";


const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRouts.map(({path, Component}) =>
                <Route path={path} element={Component} exact/>
            )}
            {publicRouts.map(({path, Component}) =>
                <Route path={path} element={Component} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;