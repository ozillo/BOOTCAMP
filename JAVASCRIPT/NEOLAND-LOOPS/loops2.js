//Iteración #2: Condicionales avanzados
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad 
//isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log. 
//Concepto para ejercicio Iteración#2 ( Sergio ).
//Para poder recorrer un array con objetos deberás, recorrerlo con un array y por cada posición añadir una nueva propiedad a cada objeto.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let studentApproved = (array) => {
    array.forEach(alumn => {
        (alumn.T1 && alumn.T2) || (alumn.T1 && alumn.T3) || (alumn.T2 && alumn.T3) == true ? alumn.isApproved = true : alumn.isApproved = false
    })
        return array;
};

console.log(studentApproved(alumns));
