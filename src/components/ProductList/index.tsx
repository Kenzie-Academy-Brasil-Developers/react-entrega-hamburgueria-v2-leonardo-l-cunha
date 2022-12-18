import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { Product } from "../Product";
import { StyledUl } from "./style";

export const ProductsList = () => {
  const { products } = useContext(productContext);
  return (
    <StyledUl>
      {products.map((element) => (
        <Product key={element.id} element={element} />
      ))}
    </StyledUl>
  );
};
