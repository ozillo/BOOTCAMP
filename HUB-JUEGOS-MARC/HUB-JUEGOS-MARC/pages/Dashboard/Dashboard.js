import { initControler } from "../../utils/route";
import "./Dashboard.css";


//1ero-->funcion template
//ponemos figure para estructurar que tenemos texto y figura y poder hacer click en estos elementos
//PONEMOS ID para identificar unitariamente un elemento

const template=() => `
<div id= "ContainerDashboard"> 
    <ul>
    
<li>
<figure id="figurePokemon" class"figureDashboard">
<img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683535723/ProyectoMarc/images_rlmlmr.png" alt="logoPokemon" />
<h2>POKEMON</h2>
</figure>
</li>
<li>

<figure id="figureWakamole" class"figureDashboard">
    <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683734408/ProyectoMarc/e3ryxbig7xcfs2zdzfxp.png" alt="logowakamole" />
<h2>WAKAMOLE</h2>
</figure>
</li>
    </ul>
</div>
`;

//==> 2o eventos de nuestros elementos html
function addListeners() {
const figurePokemon = document.getElementById("figurePokemon");
figurePokemon.addEventListener("click",()=>{
    initControler("Pokemon");
});
const figureWakamole = document.getElementById("figureWakamole");
figureWakamole.addEventListener("click",()=>{
    initControler("Wakamole")
});


 };


//-->3ero pintarlo

export const printTemplate =()=>{
document.querySelector("main").innerHTML = template();
addListeners();
};