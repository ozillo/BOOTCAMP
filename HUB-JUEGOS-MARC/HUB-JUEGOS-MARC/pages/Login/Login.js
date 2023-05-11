import { initControler } from "../../utils/route";
import "./Login.css";


//1ero-->funcion template

const template=() =>`
<input type="text" Nombre="" id="" />
  <button id="buttonLogin">LOGIN</button>
`

//==> 2o eventos de nuestros elementos html
const addListeners =()=> {
    const buttonLogin = document.getElementById("buttonLogin");
    buttonLogin.addEventListener("click",()=>{
        const inputLogin=document.querySelector("input");
        localStorage.setItem("user", inputLogin.value);
        if (localStorage.getItem("user"))
        document.querySelector("nav").style.display="block";
        initcontroler();

    });



};


//-->3ero pintarlo
export const printTemplate = () => {
    if (!localStorage.getItem("user"))
      document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = template();
    addListeners();
  };
  