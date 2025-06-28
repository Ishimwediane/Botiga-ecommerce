import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import vendor1 from '../assets/image/vendor1.webp'
import vendor2 from '../assets/image/vendor2.webp'
import vendor3 from '../assets/image/vendor3.webp'
import vendor4 from '../assets/image/vendor4.webp'
import vendor5 from '../assets/image/vendor5.webp'
import vendor6 from '../assets/image/vendor6.webp'

import '../styles/Home.css'

import "@fontsource/inter"; 
import "@fontsource/inter/700.css"; 

const VendorList = () => {
    const vendors = [
        {
         id: 1, 
        name: "Santa Monica's Store", 
        location: "New York, NY", 
        image: vendor1 
    },
        { 
        id: 2, 
        name: "Josh Doe's Store", 
        location: "New York, NY", 
        image: vendor2 
    },
        {
         id: 3,
         name: "Digital Good's Store", 
         location: "New York, NY", 
         image: vendor3
         },
         {
          id: 4,
          name: "Jessica's Store", 
          location: "New York, NY", 
          image: vendor4
          },
          {
            id: 5,
            name: "The Glass Store", 
            location: "New York, NY", 
            image: vendor5
            },
            {
              id: 6,
              name: "Joe Doe's Store", 
              location: "New York, NY", 
              image: vendor6
              },
      ];
  
    return (
        <div>
        <div className="gallery-vendor">
          {vendors.map((vendor) => (
            <div className="vendor-item" key={vendor.id}>
              <img src={vendor.image} alt={vendor.name} />
              <div className="vendor-grid">
                <p>{vendor.name}</p>
                <FaChevronCircleRight />
              </div>
              <p className="vendor-location">{vendor.location}</p>
            </div>
          ))}
        </div>
        
      </div>
    );
    
  };
  
  export default VendorList;
  