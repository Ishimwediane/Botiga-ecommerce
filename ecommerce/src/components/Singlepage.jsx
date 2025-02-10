import React from "react";
import { FaStar } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "../styles/Product.css";

const rankingColors = {
  Arsenic: "rgb(82, 81, 81)",
  Chamoisee: "rgb(66, 36, 14)",
  Silver: "rgb(177, 175, 175)",
  White: "rgb(253, 251, 249)",
};

const RankingIndicator = ({ rankings }) => {
  return (
    <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
      {rankings.map((rank, index) => (
        <div
          key={index}
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: rankingColors[rank],
          }}
        />
      ))}
    </div>
  );
};

const SinglePage = ({ product, closeProduct }) => {
  if (!product) return null; 
  return (

    <>
   
  <div className="overlay-product">

  <MdClose
          className="close-icon"
          onClick={closeProduct} />
      
        <div className="product-container">
          <div className="image-product">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-card">
            <h2>{product.name}</h2>

            <div>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  style={{
                    color: index < product.rating ? "rgb(224, 150, 11)" : "rgb(202, 202, 201)",
                  }}
                />
              ))}
            </div>

            <p><h2>{product.priceRange}</h2></p>
<p className="">{product.description}</p>
            <span>
              Color <RankingIndicator rankings={product.ranking} />
            </span>
          </div>
        </div>
      </div>
   </>
  );
};

export default SinglePage;
