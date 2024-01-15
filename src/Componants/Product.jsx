import React, { useEffect, useState } from "react";

function Product() {

  const [Productdata, setProductdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductdata(json))
      .catch((err) => console.log(err));

    // fetch("https://api.coincap.io/v2/assets?limit=10")
    //   .then((res) => res.json())
    //   .then((json) => setData(json))
    //   .catch((err) => console.log(err));

    // try {
    //  async function FetchData() {
    //     const apiData =await axios.get("https://api.coincap.io/v2/assets?limit=10");
    //     setusingAxios(apiData.data);
    //     }
    //   FetchData();
    // } catch (error) {
    //   console.log(error)
    // }
  }, []);
  return (
    <>
      <h4>Products Comp</h4>
      {Productdata.map((item) => (
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
