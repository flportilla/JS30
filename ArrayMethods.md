- >Array.prototype[@@iterator]()
    >
    >
    >
    >
    >
    >
    > 
- >get Array[@@species]
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.at()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.concat()
    >
    >## Uso:
    >const array3 = array1.concat(array2);
    >
    >Devuelve un array nuevo con los elementos del array1 y array2
    >
    > ***-***
- >Array.prototype.copyWithin()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.entries()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.every()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.fill()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.filter()
    >
    >## Uso:
    >const result = array1.filter(element => element.length > 6);
    >
    >Devuelve un array nuevo con los elementos que cumplen la condición de la función, en este caso, elementos cuya longitud sea mayor a 6
    >
    > ***-***
- >Array.prototype.find()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.findIndex()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.flat()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.flatMap()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.forEach()
    >
    >
    >
    >
    >
    >
    > 
- >Array.from()
    >
    >
    >
    >
    >
    >
    > 
- >Experimental
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.groupBy()
    >
    >
    >
    >
    >
    >
    > 
- >Experimental
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.groupByToMap()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.includes()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.indexOf()
    >
    >## Uso:
    >console.log(array1.indexOf('elementINeed'));
    >
    >Devuelve el número del índice en donde encuentra la primera coincidencia, si no encuentra nada devuelve un -1. Útil para eliminar duplicados utilizándolo dentro de un filter.
    >
    > ***-***
- >Array.isArray()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.join()
    >
    >## Uso:
    >elements.join(",");
    >
    >Devuelve un string con todos los elementos dentro del array separados por el elemento dentro del paréntesis. Una coma en el ejemplo
    >
    > ***-***
- >Array.prototype.keys()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.lastIndexOf()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.map()
    >
    >## Uso:
    >const newArray = array1.map(x => x * 2);
    >
    >Devuelve un nuevo array en el que se incluyen todos los elementos del original después de ejecutar una función en cada uno de ellos. En este ejemplo multiplica x2 cada uno de los elementos dentro del array original y devuelve el nuevo almacenado en la variable newArray
    >
    > ***-***
- >Array.of()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.pop()
    >
    >## Uso:
    >array1.pop()
    >
    >Remueve el último elemento del array original y devuelve el elemento eliminado. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.push("elementoNuevo")
    >
    >## Uso:
    >array1.push()
    >
    >Añade n número de elementos al final del array original. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.reduce()
    >
    >## Uso:
    >const newArray = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
    >
    >Corre una función para los elementos dentro del array y devuelve un único valor. En el ejemplo suma todos los elementos dentro del array original y devuelve el número del total de la suma.
    >
    > ***-***
- >Array.prototype.reduceRight()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.reverse()
    >
    >## Uso:
    >array1.reverse()
    >
    >Cambia el orden de los elementos dentro del array poniendo de primero al último y partiendo de ahí hacia atrás. Este método modifica el array original
    >
    > ***-***
- >Array.prototype.shift()
    >
    >## Uso:
    >array1.shift()
    >
    >Remueve el primer elemento del array original y devuelve el elemento eliminado. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.slice()
    >
    >## Uso:
    >array1.slice(indexInicio, indexFin)
    >
    >Devuelve un array con los elementos del array original que estén dentro del rango indicado. Si se deja vacío toma todos los elementos, si se incluye solamente el primer valor devuelve desde ese índice hasta el final. Útil para trabajar con arrays dentro de funciones sin modificar el original.
    >
    > ***-***
- >Array.prototype.some()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.sort()
    >
    >## Uso:
    >array1.sort()
    >
    >Ordena el array de acuerdo con el código ASCII de los elementos dentro del mismo, Ej: [1, 1000, 2]. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.splice()
    >
    >## Uso:
    >array1.splice(indexInicio, indexFin, nuevoElemento)
    >
    >Elimina los elementos desde el indexInicio hasta el indexFin, el tercer parámetro sirve para agregar elementos en la posición indicada por los dos primeros. Útil para agregar elementos en posiciones específicas del array. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.toLocaleString()
    >
    >
    >
    >
    >
    >
    > 
- >Non-Standard
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.toSource()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.toString()
    >
    >
    >
    >
    >
    >
    > 
- >Array.prototype.unshift()
    >
    >## Uso:
    >array1.unshift(nuevoElemento, nuevoElemento2)
    >
    >Agrega los elementos indicados como parámetros al inicio del array y devuelve el nuevo length del array. Este método modifica el array original.
    >
    > ***-***
- >Array.prototype.values()
    >
    >
    >
    >
    >
    >
    > 