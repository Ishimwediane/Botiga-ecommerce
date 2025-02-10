import React from "react";
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

function Layout() {
    return(
        <>
<Navbar/>
<Outlet/>
<Footer/>

        </>
    )
}
export default Layout