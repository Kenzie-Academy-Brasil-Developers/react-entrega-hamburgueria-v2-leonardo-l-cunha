import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../providers/productContext";
import { Container } from "../../styles/Container";
import { StyledDiv, StyleHeader } from "./style";

export const HeaderPage = () => {
  const { openModal, setOpenModal, count, products, setProduct } =
    useContext(productContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const inputFilter = (event: any) => {
    const data = products?.filter((element) => {
      return element.category.toUpperCase().includes(inputValue.toUpperCase());
    });
    setProduct(data);
  };
  const reload = () => {
    window.location.reload();
  };
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <StyleHeader>
      <Container>
        <StyledDiv>
          <h1 onClick={reload}>
            Burguer <span>Kenzie</span>
          </h1>
          <div>
            <form onSubmit={(event) => inputFilter(event.preventDefault())}>
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                onChange={(event) => setInputValue(event.target.value)}
              />
              <button type="submit">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8086 12.8633L11.0742 10.1289C10.9375 10.0195 10.7734 9.9375 10.6094 9.9375H10.1719C10.9102 8.98047 11.375 7.77734 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7 12.125 8.20312 11.6875 9.1875 10.9219V11.3867C9.1875 11.5508 9.24219 11.7148 9.37891 11.8516L12.0859 14.5586C12.3594 14.832 12.7695 14.832 13.0156 14.5586L13.7812 13.793C14.0547 13.5469 14.0547 13.1367 13.8086 12.8633ZM5.6875 9.9375C3.74609 9.9375 2.1875 8.37891 2.1875 6.4375C2.1875 4.52344 3.74609 2.9375 5.6875 2.9375C7.60156 2.9375 9.1875 4.52344 9.1875 6.4375C9.1875 8.37891 7.60156 9.9375 5.6875 9.9375Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
            <button onClick={() => setOpenModal(!openModal)}>
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.6875 13.7266L24.707 4.78906C24.8359 4.14453 24.3633 3.5 23.6758 3.5H6.83203L6.44531 1.60938C6.31641 1.13672 5.88672 0.75 5.41406 0.75H1.03125C0.429688 0.75 0 1.22266 0 1.78125V2.46875C0 3.07031 0.429688 3.5 1.03125 3.5H3.99609L7.04688 18.2812C6.31641 18.7109 5.84375 19.4844 5.84375 20.3438C5.84375 21.6758 6.91797 22.75 8.25 22.75C9.53906 22.75 10.6562 21.6758 10.6562 20.3438C10.6562 19.6992 10.3555 19.0977 9.92578 18.625H18.9062C18.4766 19.0977 18.2188 19.6992 18.2188 20.3438C18.2188 21.6758 19.293 22.75 20.625 22.75C21.9141 22.75 23.0312 21.6758 23.0312 20.3438C23.0312 19.3984 22.4727 18.582 21.6562 18.1953L21.8711 17.1641C22.043 16.5195 21.5273 15.875 20.8828 15.875H9.36719L9.06641 14.5H21.6562C22.1289 14.5 22.5586 14.1992 22.6875 13.7266Z"
                  fill="#BDBDBD"
                />
              </svg>
              <p>{count}</p>
            </button>
            <button onClick={logout}>
              <svg
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.1797 12.4297C27.6719 11.9375 27.6719 11.1172 27.1797 10.5703L17.9922 1.38281C17.1172 0.5625 15.75 1.16406 15.75 2.3125V7.5625H8.3125C7.54688 7.5625 7 8.16406 7 8.875V14.125C7 14.8906 7.54688 15.4375 8.3125 15.4375H15.75V20.6875C15.75 21.8906 17.1719 22.4375 17.9922 21.6172L27.1797 12.4297ZM10.5 21.3438V19.1562C10.5 18.8281 10.1719 18.5 9.84375 18.5H5.25C4.26562 18.5 3.5 17.7344 3.5 16.75V6.25C3.5 5.32031 4.26562 4.5 5.25 4.5H9.84375C10.1719 4.5 10.5 4.22656 10.5 3.84375V1.65625C10.5 1.32812 10.1719 1 9.84375 1H5.25C2.35156 1 0 3.35156 0 6.25V16.75C0 19.6484 2.35156 22 5.25 22H9.84375C10.1719 22 10.5 21.7266 10.5 21.3438Z"
                  fill="#BDBDBD"
                />
              </svg>
            </button>
          </div>
        </StyledDiv>
      </Container>
    </StyleHeader>
  );
};
