// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:


const numeros = [10,20,30,40,50];

const [uno, dos, tres ] = numeros;


// console.log(numeros);
// console.log(uno);
// console.log(dos);
// console.log(tres);

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

const [primero, , segundo, ...tercero ] = numeros;
console.log(numeros);