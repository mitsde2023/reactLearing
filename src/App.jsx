import React from "react";
import "./App.css";
import Product from "./Componants/Product";
import ViewStudentData from "./Componants/ViewStudentData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JShop from "./Componants/Shopping/JShop";
import EShop from "./Componants/Shopping/EShop";
import { MyContextProvider } from "./Contexts/MyContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyContextProvider>
          <Routes>
            <Route path="/kushalData" element={<ViewStudentData />} />
            <Route path="/" element={<Product />}></Route>
            <Route path="/jeshop" element={<JShop />}> </Route>
            <Route path="/electric" element={<EShop />}></Route>
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
