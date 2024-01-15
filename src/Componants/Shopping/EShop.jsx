import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../Contexts/MyContextProvider";
function EShop() {
  const { shopFromContext } = useContext(MyContext);

  const EShop = shopFromContext.filter(
    (shop) => shop.category === "electronics"
  );

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={goBack}>All Products</button>

      <h4>Electronics Products</h4>

      {EShop.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{item.title}</h2>
            <p className="product-description">{item.description}</p>
            <p className="product-category">{item.category}</p>
            <p className="product-price">${item.price}</p>
            <div className="product-rating">
              <p className="rating">{item.rating.rate} stars</p>
              <p className="rating-count">{item.rating.count} reviews</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default EShop;
