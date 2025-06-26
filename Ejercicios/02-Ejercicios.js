//Trabajo práctico de repaso de JS
// EJERCICIO 1: Variables simples
// Crear dos variables: nombre y edad. Mostrar un mensaje con esos datos.
//creamos variables: let const

console.log("-----Ejer 1 ----");
const nombre ='Fernando';
let edad = 32;
console.log(`nombre:${nombre} edad:${edad}`);

// EJERCICIO 2: Array básico
// Crear un array con 5 nombres de animales. Mostrar el segundo y el último.
console.log("-----Ejer 2 ----");

const zoo=['mono','tigre','leon','oveja','vaca']

console.log('El segundo elemento del array es',zoo[1]);
console.log('El último elemento del array es',zoo[4]);


// EJERCICIO 3: Bucle for
// Recorrer el array de animales e imprimir todos los elementos.
console.log("-----Ejer 3 ----");

for (let index = 0; index < zoo.length; index++) {
    const animales = zoo[index];
    console.log(animales)
    
}

// EJERCICIO 4: Bucle for...of
// Mostrar todos los animales usando for...of
console.log("-----Ejer 4 ----");

for (const element of zoo) {
    console.log(element)
    
}
// EJERCICIO 5: Estructura de decisión
// Dado un número, indicar si es par o impar.
console.log("-----Ejer 5 ----");
const numero=5;
if(numero%2===0){
    console.log('numero es par');
}else{
    console.log('El número es impar');
}
// EJERCICIO 6: Array + decisión
// Recorrer una lista de edades y decir si cada una es mayor de edad o no.

const personas = [
  { nombre: "Lucía", edad: 17 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Marta", edad: 15 },
  { nombre: "Julián", edad: 30 },
  { nombre: "Sofía", edad: 18 },
  { nombre: "Pedro", edad: 12 },
  { nombre: "Ana", edad: 25 }
];

for ( const element of personas) {

    if(element.edad>=18){

        console.log(`${element.nombre} tiene:${element.edad} y es mayor de edad`)
    }else
    console.log(`${element.nombre} tiene:${element.edad} y es menor de edad`)
    
}

// EJERCICIO 7: Desafío combinado
// Crear un array con 5 números. Calcular la suma total y decir si es mayor a 10.
console.log("-----Ejer 7 ----");

const arraynumeros=[1,2,5];

let sumaTotal=0

for (const element of arraynumeros) {
    sumaTotal+=element;
    
}

if(sumaTotal>10){

    console.log('La suma total es mayor que 10')
}else if(sumaTotal===10){
    console.log('La suma total es igual a 10')
    
}else{
    console.log('La suma total es menor a 10')

}