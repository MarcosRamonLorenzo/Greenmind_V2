import React, { useContext } from "react";
import { ContextOfUsuarios } from "../contexts/UserProvider.jsx";

const useUser = () => {
  const contexto = useContext(ContextOfUsuarios);
  return contexto;
};

export default useUser;