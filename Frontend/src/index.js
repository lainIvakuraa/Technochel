import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CategoryStore from "./store/CategoryStore";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        category: new CategoryStore()
    }}>
        <App/>
    </Context.Provider>,
document.getElementById('root')
);

