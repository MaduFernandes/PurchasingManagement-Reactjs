//Context
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const data = useContext(AuthContext);

  return data;
};
