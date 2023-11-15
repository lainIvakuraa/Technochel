import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from './components/nav/Navbar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
        </div>
          <AppRouter />
      </BrowserRouter>
  );
};

export default App;
