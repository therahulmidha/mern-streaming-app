import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

/**
 * @description Simple hook to get AuthContext values
 * so that useContext and AuthContext are not imported
 * Only this hook would be required to be imported
 */
export const useAuth = () => {
  return useContext(AuthContext);
};
