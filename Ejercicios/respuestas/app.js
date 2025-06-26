//Trabajo práctico de repaso de JS

// EJERCICIO 1: Variables simples
// Crear dos variables: nombre y edad. Mostrar un mensaje con esos datos.
//creamos variables: let const

console.log("-----Ejer 1 ----");

let nombre = "Gabriel";
let edad = 40;
console.log(`Nombre ${nombre} y su edad es ${edad}`);

// EJERCICIO 2: Array básico
// Crear un array con 5 nombres de animales. Mostrar el segundo y el último.
console.log("-----Ejer 2 ----");

const animales = ["perro", "gato","tortuga","gallina","caballo"];

console.log("El segundo elemento del array es ", animales[1]);
console.log("El útimo elemento del array es ", animales[4]);

// EJERCICIO 3: Bucle for
// Recorrer el array de animales e imprimir todos los elementos.
console.log("-----Ejer 3 ----");
console.log(" con for");

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
}

// EJERCICIO 4: Bucle for...of
// Mostrar todos los animales usando for...of
console.log("-----Ejer 4 ----");
console.log("usamos For of");

for(let animal of animales){
    console.log(animal);
}

// EJERCICIO 5: Estructura de decisión
// Dado un número, indicar si es par o impar.
console.log("-----Ejer 5 ----");

let num = 16;
// para saber si es un número par podemos usar % 
if (num % 2 === 0) {
    console.log('El número es par');
}else{
    console.log('El número es impar');
}

// EJERCICIO 6: Array + decisión
// Recorrer una lista de edades y decir si cada una es mayor de edad o no.
console.log("-----Ejer 6 ----");

let edades = [15, 22, 17, 30, 12];

// for (let i = 0; i < edades.length; i++) {
    //mayor de edad es 18 años
//     if (edades[i] >= 18) {
//         console.log(`Edad ${edades[i]} es mayor de edad`);
//     }else {
//         console.log(`Edad ${edades[i]} es menor de edad`);
//     }
// }
for(let num of edades){
     if (num >= 18) {
        console.log(`Edad ${num} es mayor de edad`);
    }else {
        console.log(`Edad ${num} es menor de edad`);
    }
}

// EJERCICIO 7: Desafío combinado
// Crear un array con 5 números. Calcular la suma total y decir si es mayor a 10.
console.log("-----Ejer 7 ----");

let numeros = [7, 3, 7, 10, 9];
let totalAcumulado = 0;

for(let num of numeros){
    totalAcumulado += num;
}
console.log('La suma total es ', totalAcumulado);
// Sacar el promedio de las notas
let notaFinal = totalAcumulado/numeros.length;
//según la nota final decir si aprueba la materia. Con 6 aprueba
console.log("El promedio de las notas es ", notaFinal);
if (notaFinal >= 6) {
    console.log("Aprueba la materia");
}else{
    console.log("No Aprueba la materia");

}
