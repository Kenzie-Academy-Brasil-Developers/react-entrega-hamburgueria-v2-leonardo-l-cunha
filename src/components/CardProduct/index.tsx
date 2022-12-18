import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { CartProduct } from "../Card";
import { CartContainer } from "./style";

export const Cart = () => {
  const { currentSale } = useContext(productContext);
  return (
    <>
      <CartContainer>
        {currentSale.length === 0 ? (
          <div>
            <p>Sua sacola está vazia</p> <span>Adicione itens</span>
          </div>
        ) : (
          currentSale.map((element) => (
            <CartProduct key={element.id} element={element} />
          ))
        )}
      </CartContainer>
    </>
  );
};
