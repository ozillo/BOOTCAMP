import { changeColor } from "../../../utils/changeColor";
import { initControler } from "../../../utils/route";
import "./header.css";



const template = () => `
  <img
    src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683535743/ProyectoMarc/consola-ninja-diseno-logotipos-juegos_100735-52_ejtksx.jpg"
    alt="title hub game website (app)"
    class="logo"
  />
  <nav>
    <img
      src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
      alt=" change to style mode page"
      id="changeColor"
    />
    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683485303/ProyectoMarc/lvt7u1zgug9nuy4ed8vn.png"
      alt=" navigate to home app"
      id="buttonDashboard"
    />

    <img
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683699569/ProyectoMarc/nfn4s4p0kkexrncvsnfd.jpg"
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

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};
