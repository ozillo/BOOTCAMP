import { changeColor } from "../../utils/changeColor";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
  <img
    src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683764023/ProyectoMarc/o5mmlmj2bs7yhvl5k3gb.png"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683794760/ProyectoMarc/paletacolores2_tkpymv.png"
      alt=" change to style mode page"
      id="changeColor"
      
    />
    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683794038/ProyectoMarc/pngwing.com_1_an2vrf.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />

    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683793514/ProyectoMarc/logohub_qp9oql.png"
      alt="logout"
      id="buttonLogout"
    />
  </nav>
`;



const addListeners = () => {
    // evento de el boton de cambiar de color
    const buttonChangeColor = document.querySelector("#changeColor");
    buttonChangeColor.addEventListener("click", () => {
      const color = changeColor();
      document.body.style.background = color;
    });
    // evento de el boton de ir a home
    const buttonDashboard = document.getElementById("buttonDashboard");
    buttonDashboard.addEventListener("click", () => {
      initControler("Dashboard");
    });
    // evento del boton logout
    const buttonLogout = document.getElementById("buttonLogout");
    buttonLogout.addEventListener("click", (e) => {
      console.log(e);
      localStorage.removeItem("user");
      initControler("Login");
      if (!localStorage.getItem("user"))
        document.querySelector("nav").style.display = "none";
    });
  };
  
  // ----> 3) Pintar
  export const printTemplate = () => {
    document.querySelector("header").innerHTML = template();
    addListeners();
  };
  