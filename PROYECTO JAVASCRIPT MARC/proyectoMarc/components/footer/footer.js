import "./footer.css";



const template = () => {
    return `
        <div class="Marc2">
        <h3> Marc Mateo 2023 </h3>
        </div>
    `;
    };

export const printTemplate = ()=> {
document.querySelector("footer").innerHTML= template();


};