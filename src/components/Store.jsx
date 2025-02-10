import React from "react";
import vendor1 from '../assets/image/vendor1.webp';
import vendor2 from '../assets/image/vendor2.webp';
import vendor3 from '../assets/image/vendor3.webp';
import vendor4 from '../assets/image/vendor4.webp';
import vendor5 from '../assets/image/vendor5.webp';
import vendor6 from '../assets/image/vendor6.webp';
import { MdNavigateNext } from "react-icons/md";
import '../styles/Vendor.css';

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

function Store(){
    const stores = [
        { 
        id:1, 
        image:vendor1, 
        name:"John Doe's Store", 
        rating:5, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)" 
    },
        { 
        id:2, 
        image:vendor2, 
        name:"Jessica's Store", 
        rating:3, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)" 
    },
        { 
        id:3, 
        image:vendor3, 
        name:"Santa Monica's Store", 
        rating:4, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)" 
    },
        { 
        id:4, 
        image:vendor4, 
        name:"Digital Goods Store", 
        rating:2, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)" 
    },
        { 
        id:5, 
        image:vendor5, 
        name:"The Glass Store", 
        rating:5, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)"  
    },
        { 
        id:6, 
        image:vendor6, 
        name:"John's Art Store", 
        rating:1, 
        sector:"Central Park", 
        province:" New York,", 
        country:"New York,United States (US)" 
     }
    ];

    return (
        <div className="gallery-store">
            {stores.map((storeitem) => (
                <div className="store-item" key={storeitem.id}>
                    <div className="store-overlay"></div>
                    
                    <div className="store-image">
                        <img src={storeitem.image} alt={storeitem.name} />
                        
                    </div>

                   
                    <div className="store-info">
                        <div className="vendor-text">{storeitem.name}<br /></div>

                        <div className="star-rating">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index} className={`star ${index < storeitem.rating ? "filled" : ""}`}>★</span>
                            ))}
                        </div>

                        <div className="vendors-location">
                            {storeitem.sector}<br />
                            {storeitem.province}<br />
                            {storeitem.country}
                        </div>
                    </div>

                   
                    <div className="store-footer">
                        <div className="vendor-profile">
                            <img src={storeitem.image} alt="Profile" />
                        </div>
                        <MdNavigateNext className="action-button"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Store;
