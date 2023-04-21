//Iteración #7: Buscador de nombres
//Crea una función que reciba por parámetro un array y el valor 
//que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
//en caso que existan nos devuelve un true y la posición de dicho elemento
 //y por la contra un false. Puedes usar este array para probar tu función:


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Peggy',
    'Jessica',
    'Marc'
  ];
 const finderName = (array, wordBuscar) => {
    let counterIndex = []
    if (array.includes(wordBuscar)) {
    array.forEach((nombre , index)  => {
      if (wordBuscar === nombre) {
        counterIndex.push(index)
      }
    });
    }
    if (counterIndex.length > 0) {
      return {
        include: true,
        index: counterIndex
      } 
    
    } else {
      return false
    }
  }

  console.log(finderName(nameFinder, "Peggy"))
  