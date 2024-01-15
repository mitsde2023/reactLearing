import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const MyContext = createContext();

function MyContextProvider({ children }) {
  const [shopFromContext, setShopFromContext] = useState([]);

useEffect(() => {
    try {
      async function FetchData() {
        const apiData = await axios.get("https://fakestoreapi.com/products");
        setShopFromContext(apiData.data);
      }
      FetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(shopFromContext, 22);

  return (
    <MyContext.Provider value={{ shopFromContext }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, MyContextProvider };
