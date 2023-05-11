export let lastHole; 

export const randomHole = () => {
   
    const index = Math.floor(
      Math.random() * document.querySelectorAll(".hole").length
    );
   
    const hole = document.querySelectorAll(".hole")[index];
    //condicional para evitar que el topo salga dos veces por el mismo hoyo
    if (hole === lastHole) {
      return randomHole(document.querySelectorAll(".hole"));
    }
  
    lastHole = hole;
    return hole;
  };

