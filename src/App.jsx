import React, { useEffect, useState } from "react";
import "./App.css";
// import CarouselComp from "./Componants/CarouselComp";
import Product from "./Componants/Product";
import axios from "axios";
import ViewStudentData from "./Componants/ViewStudentData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const data = [
  "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
  "https://www.bottega7.com/media/filer_public_thumbnails/filer_public/f5/98/f5986e4f-b733-4ab8-aa3b-0d474d257464/copertina_img-theme-park_v2.jpg__1200x700_q100_crop_subsampling-2_upscale.jpg",
  "https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397",
];

function App() {
  // const [active, setActive] = useState(0);

  // const nextImg = () => {
  //   setActive((active + 1) % data.length);
  // };

  // setTimeout(function () {
  //   nextImg();
  // }, 2000);

  // const prevImg = () => {
  //   setActive((active - 1 + data.length) % data.length);
  // };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/kushalData" element={<ViewStudentData />} />
          <Route path="/Products" element={<Product />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewStudentData />} />
      </Routes>
    </BrowserRouter> */}

      {/* <ViewStudentData /> */}

      {/* <Product  Productdata={data}  /> */}
      {/* <CarouselComp /> */}

      {/* <div style={{ display: "flex" }}>
        <button onClick={prevImg}>img Prev</button>
        <div>
          <img
            style={{ background: "red", width: "1300px", height:'400px' }}
            src={data[active]}
            alt={`Image ${active + 1}`}
          />
        </div>
        <button onClick={nextImg}>img Next</button>
      </div> */}
    </>
  );
}

export default App;
