import "./footer.css";



const template = () => {
    return `
        <div class="Marc2">
        <h3> Copyright © - 2023 - Marc Mateo  </h3>
        </div>
    `;
    };

export const printTemplate = ()=> {
document.querySelector("footer").innerHTML= template();


};