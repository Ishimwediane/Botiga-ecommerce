import React from "react";
import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 
import { IoFilter } from "react-icons/io5";
import { IoGridSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Store from "./Store";
import '../styles/Vendor.css'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

function Vendor(){
    return(
        <>
        <div className="store-container">
            <center>
        <h2>Store List</h2></center>
        <div className="store-tile">
        <span>Total stores showing:6</span><p className="filter-recentside">
        <button className="filter-btn"><IoFilter />Filter</button>
        <p className="most-store">Sort by:<button className="recent-btn">Most Recent</button></p></p>
        <div className="store-menugrid">
        <IoGridSharp />
        <IoIosMenu />
</div>
        
        </div>
        <Store />
        </div></>
    )
}
export default Vendor