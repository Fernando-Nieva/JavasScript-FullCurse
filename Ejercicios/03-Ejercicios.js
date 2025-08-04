// EJERCICIO 1: Función que muestra los elementos de un array
console.log("---Ejer 1----");

const arrayfrutas=['manzana','pera','palta','anana','mandioca']
function muestrafrutas(frutas){
const nuevafrutas=[];
for (let i = 0; i < frutas.length; i++) {
    nuevafrutas.push(frutas[i]); // Agrega cada fruta al nuevo array
 console.log(nuevafrutas)
}
}
muestrafrutas(arrayfrutas);

// EJERCICIO 2: Función que calcula el promedio de un array de números
console.log("---Ejer 2----");
let notas = [8, 7, 10, 6, 9];
function promedioNotas(notas) {
  let suma = 0;
  notas.forEach(element => {
    suma += element;
  });
  const promedio = (suma / notas.length); 
  console.log(promedio);
}
promedioNotas(notas);

// EJERCICIO 3: Función que filtra mayores de edad
console.log("---Ejer 3----");

let listaEdades = [12, 20, 17, 25, 30]; //Ejemplo de Edades
console.log(listaEdades);
function mayoresdeEdad(lista){
    let mayores=lista.filter(valor=>valor >18)
    ;
    mayores.forEach(element => {
        console.log(`Los mayores de edad tienen: ${element} años`)
    });
}
mayoresdeEdad(listaEdades);

// EJERCICIO 4: Función que cuenta cuántos números son pares
console.log("---Ejer 4----");
let listaDenumeros = [3, 8, 15, 22, 7, 10, 19, 4, 13, 6,55];

function numerosPares(lista) {
  let pares = [];
  let impares = [];
  let contPares=0;
  let contImpares=0;
  
  lista.forEach(element => {
    if (element % 2 === 0) {
      pares.push(element);
      contPares++;
    } else {
      impares.push(element);
      contImpares++
    }
  });
  
  console.log(`Los números pares son: ${pares} y hay : ${contPares}`);
  console.log(`Los números impares son: ${impares} y hay : ${contImpares}`);
}

numerosPares(listaDenumeros);

// EJERCICIO 5: Función que devuelve el número mayor de un array
console.log("---Ejer 5----");

let alturas = [175, 172, 158, 180, 165];

function elMayorDe(lista){
    let mayor = lista[0]; // Inicializo con el primer valor del array
    lista.forEach(element => {
        if(mayor < element){
            mayor = element;
        }
    });
    // console.log(mayor)
   return mayor
}
console.log(elMayorDe(alturas));

function mayoresQue(lista, limite){
    let mayores = []; // Array donde guardaremos los valores que superen el límite
    lista.forEach(element => {
        if(element > limite){
            mayores.push(element); // Agrega al array
        }
    });
    return mayores;
}
console.log(mayoresQue(alturas, 170)); // [175, 172, 180]

// / EJERCICIO 6: Función que recibe un array de nombres y devuelve un nuevo array con los nombres que empiezan con vocal
console.log("---Ejer 6----");

let nombresLista = ["fernando","ana", "Carlos", "Eduardo", "Ivana", "Pedro"];


function arrayDeVocales(lista) {
  let vocales = ['a', 'e', 'i', 'o', 'u'];
  
  const listaVocales = lista.filter(nombre => {
      // Obtener la primera letra en minúscula
      const primeraLetra = nombre[0].toLowerCase();
      console.log(primeraLetra)

    // Verificar si la primera letra está en el array de vocales
    return vocales.includes(primeraLetra);
  });

  console.log(listaVocales);
}

arrayDeVocales(nombresLista);
