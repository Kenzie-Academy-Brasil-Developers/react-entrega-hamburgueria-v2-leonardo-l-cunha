import { useContext } from "react";
import { HeaderPage } from "../../components/Head";
import { AddModal } from "../../components/Modal";
import { ProductsList } from "../../components/ProductList";
import { productContext } from "../../providers/productContext";
import { Container } from "../../styles/Container";

export const Home = () => {
  const { openModal } = useContext(productContext);
  return (
    <>
      <HeaderPage />
      <Container>
        {openModal && <AddModal />}
        <ProductsList />
      </Container>
    </>
  );
};
