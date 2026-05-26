import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

import { API_BASE_URL } from "../config/apiBase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // ================= USER STATE =================

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // ================= LOAD USER =================

  useEffect(() => {

    try {

      const storedUser =
        localStorage.getItem("user");

      const token =
        localStorage.getItem("token");

      if (
        storedUser &&
        storedUser !== "undefined" &&
        token
      ) {

        const parsedUser =
          JSON.parse(storedUser);

        setUser({
          ...parsedUser,
          role:
            parsedUser.role?.toLowerCase(),
        });

      } else {

        setUser(null);
      }

    } catch (error) {

      console.error(
        "User parse error:",
        error
      );

      localStorage.removeItem("user");

      localStorage.removeItem("token");

      localStorage.removeItem("role");

      setUser(null);

    } finally {

      setLoading(false);
    }

  }, []);

  // ================= LOGIN =================

  const login = async (credentials) => {

    try {

      const res = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        credentials
      );

      console.log(
        "LOGIN RESPONSE :",
        res.data
      );

      // ================= TOKEN =================

      const token =
        res?.data?.data?.token;

      if (
        !token ||
        typeof token !== "string"
      ) {

        throw new Error(
          "JWT token not found"
        );
      }

      // ================= JWT DECODE =================

      const payload = JSON.parse(
        atob(token.split(".")[1])
      );

      console.log(
        "JWT PAYLOAD :",
        payload
      );

      // ================= USER DATA =================

      const userData = {

        email:
          payload.sub ||

          payload.email ||

          "",

        role:
          payload.role
            ?.toLowerCase() ||

          "",

        token: token,
      };

      // ================= SAVE LOCAL STORAGE =================

      localStorage.setItem(
        "user",
        JSON.stringify(userData)
      );

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "role",
        userData.role
      );

      // ================= SET USER =================

      setUser(userData);

      console.log(
        "FINAL USER DATA :",
        userData
      );

      return userData;

    } catch (error) {

      console.error(
        "Login error:",
        error
      );

      console.error(
        "Backend response:",
        error?.response?.data
      );

      throw new Error(
        error?.response?.data?.message ||

        "Invalid credentials"
      );
    }
  };

  // ================= LOGOUT =================

  const logout = () => {

    localStorage.removeItem("user");

    localStorage.removeItem("token");

    localStorage.removeItem("role");

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };