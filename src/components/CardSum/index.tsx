import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { StyleDivTotal } from "./style";

export const CartTotal = () => {
  const { currentSale, removeAll, sum } = useContext(productContext);

  return (
    <>
      {currentSale.length === 0 ? (
        <section></section>
      ) : (
        <StyleDivTotal>
          <div>
            <p>Total</p>
            <span>R${sum.toFixed(2)}</span>
          </div>
          <button onClick={removeAll}>Remover todos</button>
        </StyleDivTotal>
      )}
    </>
  );
};
