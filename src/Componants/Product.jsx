import React, { useContext } from "react";
import { MyContext } from "../Contexts/MyContextProvider";
import { Link } from "react-router-dom";

function Product() {
  const { shopFromContext } = useContext(MyContext);
  console.log(shopFromContext, 888);

  return (
    <>
      <h4>All Comp</h4>
<div style={{display:"flex", paddingLeft:"2px", marginLeft:"10px"}}>
  <button><Link to={'/jeshop'}>jeshop</Link></button>
  <button><Link to={'/electric'}>electric-shop</Link></button>
</div>
      {shopFromContext.map((item) => (
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

export default Product;
