import { printTemplate as Login } from "../pages/Login/Login";
import { printTemplate as Dashboard } from "../pages/Dashboard/Dashboard";

export const initControler = (route) => {
  switch (route) {
    // ---> caso 1: el que gestiona que el usuario este authenticado
    case undefined:
      localStorage.getItem("user") ? Dashboard() : Login();
      break;
    case "Login":
      Login();
      break;
    case "Dashboard":
      Dashboard();
      break;
  }
};
