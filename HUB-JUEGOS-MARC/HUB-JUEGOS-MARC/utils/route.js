import { printTemplate as Pokemon } from "../pages/Pokemon/Pokemon";
import { printTemplate as Wakamole } from "../pages/Wakamole/Wakamole";
import { printTemplate as Login } from "../pages/Login/Login";
import { printTemplate as Dashboard } from "../pages/Dashboard/Dashboard";

export const initControler = async (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? Dashboard() : Login();
      break;

    case "Pokemon":
      Pokemon();
      break;

    case "Wakamole":
      Wakamole();
      break;

    case "Login":
      Login();
      break;

    case "Dashboard":
      Dashboard();
      break;

    default:
      break;
  }
};
