
//Iteración 1.1 click Usa querySelector para mostrar por consola el botón con la clase .showme
const evento = document.querySelector(".showme");
console.log(evento);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado


//Hay 2 formas, esta sería una 
const evento2 = document.getElementById("pillado")
console.log(evento2);

//----------y esta otra forma ---------------
//esta es la mejor forma y recomendada
const evento3 = document.querySelector("#pillado");
console.log(evento3);

//1.3 Usa querySelector para mostrar por consola todos los p


const evento4 = document.querySelectorAll("body");
console.log(evento4);

