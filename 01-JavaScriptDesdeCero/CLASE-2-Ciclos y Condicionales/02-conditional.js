//condicionales
//(||==O),(&&==y)

if (5 == 5 || 5 > 13) {
  console.log("se cumplio la condicion");
} else {
  console.log("no se cumplio la condicion");
}

// let edadstr = prompt('dime tu edad');

// let edad= parseInt(edadstr)
let edad = 10;

console.log(typeof edad);
if (edad < 12) {
  console.log("eres un niño");
  if (edad <= 2) {
    console.log("eres un bebe");
  }
} else if (edad >= 12 && edad < 18) {
  console.log("eres un adolecente");
} else if (edad >= 18 && edad < 60) {
  console.log("eres Adulto");
} else {
  console.log("eres anciano");
}

//Truthy y falsy values ej:0
//un stringvasio es un falsy
let año = 0;
if (año) {
  console.log("ingresaste un valor truththy");
} else {
  console.log("ingresaste un valor falsy");
}

//switch


let color= prompt(`escoge un color:
    1.Rojo
    2.Verde
    3.Azul
    4.Negro6
    5.Amarillo`);

switch (color) {
    case '1':
        console.log('elgiste el Rojo')
        break;
    case '2':
        console.log('elgiste el Verde')
        break;
    case '3':
        console.log('elgiste el Azul')
        break;
    case '4':
        console.log('elgiste el Negro')
        break;
    case '5':
        console.log('elgiste el Amarillo')
        break;

    default:
        console.log('escribiste otro valor')
        break;
}

//Operador ternario , es una forma abreviada deescribir un if
//condicion ? valortrue:valorfalse

let nombre = prompt('Escribe tu nombre');
nombre.length > 5 ? console.log('tu nombre es largo'):console.log('tu nombre es corto')

