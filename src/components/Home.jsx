import React from "react";
import item1 from '../assets/image/item1.webp'
import item2 from '../assets/image/item2.webp'
import item3 from '../assets/image/item3.webp'
import item4 from '../assets/image/item4.webp'
import item5 from '../assets/image/item5.webp'
import item6 from '../assets/image/item6.webp'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 
import inst1 from '../assets/image/inst1.webp'
import inst2 from '../assets/image/inst2.webp'
import inst3 from '../assets/image/inst3.webp'
import inst4 from '../assets/image/inst4.webp'
import inst5 from '../assets/image/inst5.webp'
import inst6 from '../assets/image/inst6.webp'

import { Link } from "react-router-dom";

import { FaExchangeAlt } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import '../styles/Home.css'

import VendorList from "./VendorList";
import NewProduct from "./NewProduct"
import ExploreProduct from "./ExploreProduct";


function Home () {
     
    return(
        <><div className="main">
           
        <div className="categories-home">
            <ul>
                <li>Electronics</li>
                <li>Computer Gadget</li>
                <li>Fashion</li>
                <li>Body Lotion</li>
                <li>Sports</li>
                <li>Woman Clothes</li>
                <li>Shoes</li>
                <li>Watches</li>
            </ul>
       
        <div className="shop-now">
            <p>Explore our latest and greatest electronics</p>
            <Link to="/shop">
            <button>SHOP NOW</button></Link>
        </div> </div>
        <div className="popular-categories">
            <h2>POPULAR CATEGORIES</h2>
        
        <div className="gallery-popular">
            <div className="popular-item">
            <img src={item1} />
            <p>Body Lotion</p>
        </div>
        
        <div className="popular-item">
            <img src={item2} />
            <p>Body Lotion</p>
        </div>
        <div className="popular-item">
            <img src={item3} />
            <p>Body Lotion</p>
        </div>
        <div className="popular-item">
            <img src={item4} />
            <p>Body Lotion</p>
        </div>
        <div className="popular-item">
            <img src={item5} />
            <p>Body Lotion</p>
        </div>
        <div className="popular-item">
            <img src={item6} />
            <p>Body Lotion</p>
        </div>
        </div>
        </div>
        
        <div className="new-arrival">
            <h2>New Arrival Product</h2>
{/* <div className="gallery-arrival">
    <div className="new-container">
    <div className="new-item">
        <img src={product1} />
        
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div></div>
    <br /><b>
    <p>All In One Bottle<br/>
        
        $22.0-$55.00<br/>
        
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
    </p></b>
        </div>
        <div className="new-container">
        <div className="new-item">
        <img src={product2} />
        
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div>
        </div><b><p>Amazon Alexa<br/>
       
        $49.00-$69.00<br/>
        
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        </p></b>
        </div>

        <div className="new-container">
        <div className="new-item">
        <img src={product3} />
       
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div></div><b>
    <p>Headset Gamer Legion<br/>
    
$22.0-$55.0<br/>
<FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
    </p></b>
        </div>
        <button className="shop-btn">SHOP NOW</button>
    </div> */}
    <NewProduct />
    <Link to="/shop">
    <button className="shop-btn">SHOP NOW</button> </Link>
        </div>
       
       <div className="vendor-list">
            <h2>Our Vendor List</h2>
             {/* <div className="gallery-vendor">
                <div className="vendor-item">
                    <img src={vendor1} />
                    <div className="vendor-grid">
            <p>Santa Monica's store</p>
            <FaChevronCircleRight /></div>
            <p className="vendor-location"></p>
                </div>
            
            <div className="gallery-vendor">
                <div className="vendor-item">
                    <img src={vendor2} />
                    <div className="vendor-grid">
            <p>Josh Doe's Store</p>
            <FaChevronCircleRight /></div>
            <p className="vendor-location"></p>
                </div>
            </div>

            <div className="gallery-vendor">
                <div className="vendor-item">
                    <img src={vendor3} />
                    <div className="vendor-grid">
            <p>Digital Good's Store</p>
            <FaChevronCircleRight /></div>
            <p className="vendor-location"></p>
                </div>
            </div>
            </div>*/}
            <VendorList /><Link to="/vendor">
            <button className="shop-btn" style={{
                width:"200px"
            }}>SEE ALL VENDORS</button></Link>
        </div> 
        <div className="choose-us">
            <h2>Why People Choose Us</h2>
            <div className="choose-container">
            <div className="choose-item">
  <div className="icon-container">
    <FaExchangeAlt />
  </div>
  
  <p className="title">Easy Returns</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>

<div className="choose-item">
  <div className="icon-container">
  <FaCarSide />
  </div>
  <p className="title">Customer Service</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>

<div className="choose-item">
  <div className="icon-container">
    <FaExchangeAlt />
  </div>
  <p className="title">High Quality</p>
  <p className="description">Our return policy is simple and that is why customers love our shop.</p>
</div>
</div> </div>
<div className="new-arrival">
            <h2>New Arrival Product</h2>
{/* <div className="gallery-arrival">
    <div className="new-container">
    <div className="new-item">
        <img src={product1} />
        
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div></div>
    <br />
    <p>All In One Bottle<br/>
        
        $22.0-$55.00<br/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
    </p>
        </div>
        <div className="new-container">
        <div className="new-item">
        <img src={product2} />
        
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div>
        </div><p>Amazon Alexa<br/>
        
        $49.00-$69.00<br/>
        
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(202, 202, 201)"}}/>
        </p>
        </div>

        <div className="new-container">
        <div className="new-item">
        <img src={product3} />
       
        <button className="quick-view">Quick View</button>
    <button className="select-option">Select Option</button>
    <div className="heart">❤️</div></div>
    <p>Headset Gamer Legion<br/>
    
$22.0-$55.0<br/>
<FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
        <FaStar style={{color:"rgb(224, 150, 11)"}}/>
    </p>
        </div>
       
    </div>  */}
    <ExploreProduct />
    <Link to="/shop">
    <button className="shop-btn" style={{
                width:"200px"
            }} >SEE ALL PRODUCTS</button></Link>
        </div>
<div className="follow-instagram">
    <h2>Follow us on @instagram</h2>
<div className="instagram-gallery">
    <img src={inst1} />
    <img src={inst2} />
    <img src={inst3} />
    <img src={inst4} />
    <img src={inst5} />
    <img src={inst6} />
</div>
</div>

</div>
        </>
    )
}
export default  Home