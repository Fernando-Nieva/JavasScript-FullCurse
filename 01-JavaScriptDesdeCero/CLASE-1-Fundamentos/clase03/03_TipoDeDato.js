
//tipos de datos primitivos  y tipos de datos compuestos U Objetos
//js es dinamicamente tipado y js esta basado en prototipos


let numero=20;
console.log(numero)
let saludo='hola mundo';

//primitivos

// String(texto);
// let holamundo ="Hola \" \mundo";
// console.log(holamundo)
let amigo ="jon wick";
// let numeros=33;
let numeros='3a';
let saludo2=`bienvenido ${amigo} ,${numeros*3}`;
console.log(saludo2)




// Number(numeros);

let year= 1992;
let burn=new Date().getFullYear();
let edad = year-burn;
console.log(edad);


// Boolean(booleano);

// true,false;
if ('a'=='b'){

    console.log("son iguales")
}else{
    console.log("no son iguales")
}


// undefined;
//cuando no se asigna un valor a una variable
let nodefinada;
console.log(nodefinada)
// null;
//no existe un valor
let title =document.getElementById('title');
console.log(typeof(title))


// compuestos
// Arrayobjetos
// maps
// sets
// funciones