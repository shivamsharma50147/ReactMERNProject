import React from "react";
import ReactDOM from "react-dom/client";

//default import
import Navbar from  "./components/Navbar";
//named import
import {ProductCard} from "./components/ProductCard"
//Navbar
//Logo
//Menu Items








const App = () => {
    return <div>
       <Navbar />
       <ProductCard />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);