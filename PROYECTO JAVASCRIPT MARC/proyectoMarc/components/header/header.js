import "./header.css";


//crear template()
const template = () => {
return `
    <div class="inicio">
    <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683485172/ProyectoMarc/images_i6mmoz.png" alt="Logo"/>
    <ul>
    
    <li>
    <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683544663/images_gm7rvs.png" alt="Logo2"/> 
    Home</li>
    <li>
     <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683485303/ProyectoMarc/lvt7u1zgug9nuy4ed8vn.png" alt="logogames"/>
     Games</li>
    <li>

     <img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1683556514/ProyectoMarc/kltnvrz8hjbpmjplp5wk.png"alt="logoabout"/>
    About</li>
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




    
