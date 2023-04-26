//Iteración #4: Calcular el promedio
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (array) => {
   let acc = 0;
   array.forEach(number => {
    acc += number;
  });
  return acc;
}

console.log(average(numbers)/(numbers.length))

