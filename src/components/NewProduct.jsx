import React, { useState } from "react";
import product1 from "../assets/image/product1.webp";
import product2 from "../assets/image/product2.webp";
import product3 from "../assets/image/product3.webp";
import { FaStar } from "react-icons/fa";
import SinglePage from "./SinglePage";
import "../styles/Product.css"; // Ongera ho style niba ari ngombwa

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

const NewProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProduct = (product) => {
    setSelectedProduct(product);
  };
  const closeProduct = () => {
    setSelectedProduct(null)
  }

  const newproduct = [
    {
      id: 1,
      name: "All In One Bottle",
      priceRange: "$22.0-$55.00",
      image: product1,
      rating: 3,
      ranking: ["Arsenic", "Chamoisee", "Silver", "White"],
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 2,
      name: "Amazon Alexa",
      priceRange: "$49.00-$69.00",
      image: product2,
      rating: 4,
      ranking: ["Arsenic", "White"],
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
    {
      id: 3,
      name: "Headset Gamer Legion",
      priceRange: "$22.0-$55.00",
      image: product3,
      rating: 5,
      ranking: ["Arsenic", "Chamoisee", "Silver", "White"],
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    },
  ];

  return (
    <>                    
      {selectedProduct && <SinglePage product={selectedProduct} closeProduct={closeProduct} />}

      
      <div className="gallery-arrival">
        {newproduct.map((product) => (
          <div className="new-container" key={product.id}>
            <div className="new-item">
              <img src={product.image} alt={product.name} />
              <button className="quick-view" onClick={() => handleProduct(product)}>Quick View</button>
              <button className="select-option">Select Option</button>
              <div className="heart">🤍</div>
            </div>
            <p>
              {product.name}
              <br />
              {product.priceRange}
              <br />
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  style={{
                    color: index < product.rating ? "rgb(224, 150, 11)" : "rgb(202, 202, 201)",
                  }}
                />
              ))}
            </p>
            <RankingIndicator rankings={product.ranking} />
          </div>
        ))}
      </div>
    </>
  );
};

export default NewProduct;
