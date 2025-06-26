// EJERCICIO 1: Función que muestra los elementos de un array
console.log("---Ejer 1----");
let frutas = ["Manzana", "Banana", "Uva", "Naranja"];
let edades = [15, 22, 17, 30, 12];

function mostrarArreglo(arreglos) {
  for (let arr of arreglos) {
    console.log(arr);
  }
}

mostrarArreglo(frutas);
mostrarArreglo(edades);

// EJERCICIO 2: Función que calcula el promedio de un array de números
console.log("---Ejer 2----");

let notas = [8, 7, 10, 6, 9];

function promArreglo(arr) {
  let suma = 0,
    i = 0;
  while (i < arr.length) {
    suma += arr[i];
    i++;
  }
  // for(let item of arr){
  //     suma += item;
  // }
  console.log("El nuevo promedio del arreglo es " + suma / arr.length);
  // return "El promedio del arreglo es " + suma/arr.length; //Usamos el + para concatenar en el return
}

promArreglo(notas);
// console.log(promArreglo(notas));

// EJERCICIO 3: Función que filtra mayores de edad
console.log("---Ejer 3----");

let listaEdades = [12, 20, 17, 25, 30]; //Ejemplo de Edades
// listaEdades.filter()
function mayorEdades(arrs) {
  //-----1° forma-----
  const arrNuevo = [];

  for (let i = 0; i <= arrs.length; i++) {
      if (arrs[i] > 18){
          arrNuevo.push(arrs[i]);
      }
  }
  for(let edad of arrNuevo){
      console.log("El mayor de edad es ",edad)
  }
  //-----2° forma-------
  // const mayoresEdad = arrs.filter(item => item > 18 ); //devuelve un nuevo arrelgo según la condición

  // for(let item of mayoresEdad){
  //     console.log("Los de mayor edad son " + item)
  // }
  //-----3° forma ------
//   arrs.filter((item) => item > 18)
//     .forEach((item2) => console.log(`El valor ${item2} es mayor de edad.`));
}
mayorEdades(listaEdades);

// EJERCICIO 4: Función que cuenta cuántos números son pares
console.log("---Ejer 4----");

function contarPares(arrNumeros) {
  let contador = 0;

  //----1° forma---
//   for (let numero of arrNumeros) {
//     if (numero % 2 === 0) contador++;
//   }

//----2° forma---
arrNumeros.forEach((item) => { 
    if (item % 2 === 0) contador++;
});
return contador;
}
let valores = [4, 7, 2, 9, 12, 5];
console.log("Cantidad de pares:", contarPares(valores));

// EJERCICIO 5: Función que devuelve el número mayor de un array
console.log("---Ejer 5----");

let alturas = [175, 172, 158, 180, 165];

function numeroMayor(arr) {
  let numMayor = arr[0];
  for (let num of arr) {
    if (numMayor < num) numMayor = num;
  }
  return numMayor;
}

console.log("El número mayor es ", numeroMayor(alturas));

// EJERCICIO 6: Función que recibe un array de nombres y devuelve un nuevo array con los nombres que empiezan con vocal
console.log("---Ejer 6----");

let nombresLista = ["ana", "Carlos", "Eduardo", "Ivana", "Pedro"];

let nuevoNombres =[];

const tieneVocal = nombres =>{

    for(let nombre of nombres){
        let primeraLetra = nombre[0].toLowerCase(); //pasar de mayúscula a minúscula
        // let primeraLetra2 = nombre[0].toUpperCase(); //pasar de minúscula a mayúscula

        // console.log(primeraLetra);
           if ("aeiou".includes(primeraLetra) ) {
                nuevoNombres.push(nombre);
           } 
    }
    // console.log(nuevoNombres.length)
    return nuevoNombres
}
console.log(tieneVocal(nombresLista));



