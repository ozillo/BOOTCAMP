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
  