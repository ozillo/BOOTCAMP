//**Iteration #8: Contador de 
//repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una 
//de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(array) {
    let arrayVuelta = []
    let arraySinRepetir = []
    for (name of array) {
      if (!arraySinRepetir.includes(name)) {arraySinRepetir.push(name)
      console.log(arraySinRepetir)
      }
    }
    arraySinRepetir.forEach((nombre, index) => {
      let acc = 0
      for (i= 0; i < counterWords.length; i++) {
        if (nombre == counterWords[i]) {
          acc++
        }
    }
    arrayVuelta.push({
      TrueName: nombre,
      puesto: acc,
    })

    });

   return arrayVuelta
  }
  resultadoFinal = repeatCounter(counterWords)
  console.log(resultadoFinal)