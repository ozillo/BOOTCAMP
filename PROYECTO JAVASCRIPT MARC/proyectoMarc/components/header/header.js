import "./header.css";


//crear template()
const template = () => {
return `
    <div class="inicio">
    <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683485172/ProyectoMarc/images_i6mmoz.png" alt="Logo"/>
    <ul>
    <li>Games</li>
    <li>About</li>
    <li>Home</li>
    </ul>
    </div>
`;
};




//crear eventListeners



//crear printTemplate


export const printTemplate=()=> {
    document.querySelector("header").innerHTML = template();
    crearboton();    
};

const crearboton=()=>{
const button=document.createElement("button");
button.innerText="Login";
const divMarc=document.querySelector(".inicio");

divMarc.appendChild(button);
};




    
