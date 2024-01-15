import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import First from "./1.jpg";
import Second from "../2.jpg";
import Third from "../4.jpg";

export default function CarouselComp() {
  const [newCount, setNewCount] = useState(0);

  const data = [
    { name: "Magesh", age: 26 },
    { name: "kushal", age: 25 },
    { name: "Sanjay", age: 39 },
  ];

  setTimeout(() => setNewCount(newCount + 1), 1000);


  return (
    <>
{data ? <><h1>Mahesh</h1> <h2>sanjay</h2></> : <><h1>Kushal</h1></>}

      {data.length > 2 ? (
        <>
          {data.map((item) => (
            <ul key={item.name}>
              <li>{item.name}</li>
              <li>{item.age > 26 ? <>{item.age}</>: <> <p>age less than 26</p> </> }</li>
            </ul>
          ))}
        </>
      ) : (
        <></>
      )}
      {newCount > 3 ? (
        <>
          {" "}
          <Carousel infiniteLoop autoFocus showThumbs={false} autoPlay={2000}>
            <div>
              <img src={First} alt="First Image" />
            </div>
            <div>
              <img src={Second} alt="Second Image" />
            </div>
            <div>
              <img src={Third} alt="Third Image" />
            </div>
          </Carousel>
        </>
      ) : (
        <>
          <h1>current count {newCount}</h1>
        </>
      )}
    </>
  );
}
