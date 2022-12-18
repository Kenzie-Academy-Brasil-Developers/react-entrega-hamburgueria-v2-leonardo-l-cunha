import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iChildrenProps {
  children: React.ReactNode;
}
interface iProduct {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}
interface iValueProps {
  products: iProduct[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (id: iId) => void;
  currentSale: iProduct[];
  hancleFilter: (id: iId | any) => void;
  removeAll: () => void;
  count: number;
  setProduct: React.Dispatch<React.SetStateAction<iProduct[]>>;
  sum: number;
}
interface iId {
  id: number;
}

export const productContext = createContext({} as iValueProps);

export const ProductProvider = ({ children }: iChildrenProps) => {
  const [products, setProduct] = useState([] as iProduct[]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([] as iProduct[]);
  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState<number>(0);

  let sum = currentSale.reduce((previusValue, currentValue) => {
    return currentValue.price + previusValue;
  }, 0);
  useEffect(() => {
    const getProducts = async () => {
      const token = localStorage.getItem("@TOKEN");

      try {
        const { data } = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    getProducts();
  }, []);

  const handleClick = (id: iId | any) => {
    const find: any = products.find((element) => {
      return element.id === id;
    });

    if (currentSale.includes(find)) {
      toast.error("Produto ja adicionado ao Carrinho");
    } else {
      setCurrentSale([...currentSale, find]);
      setCount(count + 1);
    }
  };
  const hancleFilter = (id: iId | any) => {
    const filter = currentSale.filter((element) => {
      return element.id !== id;
    });
    setCurrentSale(filter);
    setCount(count - 1);
  };
  const removeAll = () => {
    setCurrentSale([]);
    setCount(0);
  };

  return (
    <productContext.Provider
      value={{
        products,
        openModal,
        setOpenModal,
        handleClick,
        currentSale,
        hancleFilter,
        removeAll,
        count,
        setProduct,
        sum,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
