import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { Product } from "../Product";
import { StyledUl } from "./style";

export const ProductsList = () => {
  const { products, filteredProducts } = useContext(productContext);
  return (
    <StyledUl>
      {filteredProducts.length
        ? filteredProducts.map((element) => (
            <Product key={element.id} element={element} />
          ))
        : products.map((element) => (
            <Product key={element.id} element={element} />
          ))}
    </StyledUl>
  );
};
