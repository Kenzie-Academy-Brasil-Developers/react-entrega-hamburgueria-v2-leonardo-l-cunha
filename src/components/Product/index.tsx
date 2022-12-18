import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { StyleDivText, StyleLi } from "./style";
interface iProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: string;
}
interface iElement {
  element: iProduct | any;
}
export const Product = ({ element }: iElement) => {
  const { handleClick } = useContext(productContext);
  return (
    <StyleLi>
      <img src={element.img} alt="" />
      <StyleDivText>
        <h3>{element.name}</h3>
        <span>{element.category}</span>
        <p>R$ {element.price}</p>
        <button onClick={() => handleClick(element.id)}>Adicionar</button>
      </StyleDivText>
    </StyleLi>
  );
};
