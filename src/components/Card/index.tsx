import { useContext } from "react";
import { productContext } from "../../providers/productContext";
import { DivCartProduct } from "./style";
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
export const CartProduct = ({ element }: iElement) => {
  const { hancleFilter } = useContext(productContext);
  return (
    <DivCartProduct>
      <img src={element.img} alt="" />
      <div>
        <h4>{element.name}</h4>
        <span>{element.category}</span>
      </div>
      <button onClick={() => hancleFilter(element.id)}>
        <svg
          width="17"
          height="19"
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0322 1.375H11.8135L11.4619 0.742188C11.3213 0.460938 11.04 0.25 10.7236 0.25H6.68066C6.36426 0.25 6.08301 0.460938 5.94238 0.742188L5.62598 1.375H1.40723C1.09082 1.375 0.844727 1.65625 0.844727 1.9375V3.0625C0.844727 3.37891 1.09082 3.625 1.40723 3.625H16.0322C16.3135 3.625 16.5947 3.37891 16.5947 3.0625V1.9375C16.5947 1.65625 16.3135 1.375 16.0322 1.375ZM2.70801 16.668C2.74316 17.582 3.48145 18.25 4.39551 18.25H13.0088C13.9229 18.25 14.6611 17.582 14.6963 16.668L15.4697 4.75H1.96973L2.70801 16.668Z"
            fill="#BDBDBD"
          />
        </svg>
      </button>
    </DivCartProduct>
  );
};
