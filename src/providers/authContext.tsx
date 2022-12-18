import { AxiosError } from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface iChildrenProviderPros {
  children: React.ReactNode;
}
interface iBody {
  email: string;
  password: string;
  name?: string;
}

interface iContextProvider {
  createUser: (body: iBody) => Promise<void>;
  login: (body: iBody) => Promise<void>;
  user: iToken[] | null;
  loading: boolean;
}

interface iToken {
  category: string;
  id: number;
  img: string;
  name: string;
  price: string;
}
export const authContext = createContext({} as iContextProvider);

export const AuthProvider = ({ children }: iChildrenProviderPros) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iToken[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return null;
      }

      try {
        const { data } = await api.get("products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const createUser = async (body: iBody) => {
    try {
      const response = await api.post("/users", body);
      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (e: any | AxiosError) {
      console.error(e);
      toast.error(e.response.data);
    }
  };

  const login = async (body: iBody) => {
    try {
      const response = await api.post("login", body);
      localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.accessToken);
      setUser(response.data.user);
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error: any | AxiosError) {
      toast.error(error.response.data);
    }
  };
  return (
    <authContext.Provider value={{ createUser, login, user, loading }}>
      {children}
    </authContext.Provider>
  );
};
