import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProductContext = createContext();
const url = "https://fakestoreapi.com/products"
export function ProductProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        
      }catch(error){
        console.log(error);
      }
    })()
    },[])

  return (
    <ProductContext.Provider
      value={{ data, setData }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}