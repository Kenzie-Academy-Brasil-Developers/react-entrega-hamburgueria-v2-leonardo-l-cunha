import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProductProvider } from "../providers/productContext";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route
          path="/home"
          element={
            <ProductProvider>
              <Home />
            </ProductProvider>
          }
        />
      </Route>
    </Routes>
  );
};
