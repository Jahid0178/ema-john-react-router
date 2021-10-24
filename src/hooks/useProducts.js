import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  // return necessary things
  return [products];
};

export default useProducts;
