import React from "react";
import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 
import shop from '../assets/image/shop.webp'
import '../styles/Shop.css'
import { FaAngleDown } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import AllProduct from "./AllProduct";
function Shop(){
    return(
        <>
        <div className="shot-title">
            <p className="shop-text">Shop</p>
            <img src={shop} alt="shop" className="shop-image"/>

        </div>
        <div className="shop-categories">
            <div className="left-categories">
            <div className="categorie-list">
                <h2>Categories</h2>
                <ul >
                    <li>Body Lotion (1) </li>
                    <li>Computer Gadget (3) </li>
                    <li>Electronics (5) </li>
                    <li>Fashion(3) </li>
                    <li>General (1) </li>
                    <li>Shoes (2) </li>
                    <li>Sports (3) </li>
                    <li>Watch (1) </li>
                    <li>Woman Clothes (3) </li>

                </ul></div>
                <div className="color-categories">
                    <p >Color</p>
                    <div class="ranking-colors">
    <div class="color-box arsenic"></div>
    <div class="color-box chamoisee"></div>
    <div class="color-box silver"></div>
    <div class="color-box white"></div>
</div>

                </div>
                <div className="rating-categories">
<p>Rating</p><br />
<p className="rating-five">★★★★★ <span className="rating-num">(8)</span></p>
<p className="rating-five">★★★★<span className="rating-four">★</span><span className="rating-num">(4)</span></p>
<p className="rating-five"> ★★★<span className="rating-four">★★</span><span className="rating-num">(1)</span></p>
                </div>
                <div className="price-categories">
<p>Price</p><br />
<div class="line-container">
    <div class="circle left"></div>
    <div class="line"></div>
    <div class="circle right"></div>
</div>
<div className="dollar-container">
<button className="dollar-price">$0</button>
<button className="dollar-price">$75</button>
</div>
                </div>
            </div>
            <div className="right-categories">
                <div className="rigt-title">
                    <p >Showing 1-9 of 13 results</p>
                        <p className="sorting">Default sorting  
                        <FaAngleDown />
                        <FaList />
                        <BsFillGrid3X3GapFill />
                       </p>

                    </div>
                <AllProduct />
            </div>
        </div>
        </>
    )

}
export default Shop