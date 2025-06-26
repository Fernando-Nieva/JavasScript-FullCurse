/*
Se debe realizar una calculadora básica + - * /
usando el método promp() para solicitar las operaciones y 
luego ingresar los valores para el cálculo
*/

console.log('Esta es una calculadora básica. Ingrese el número para realizar la operación deseada.');

let operacion = prompt('1-suma, 2-resta, 3-multiplicacion, 4-division, *salir');
let num1 = parseFloat(prompt('Ingrese el primer valor'));
let num2 = parseFloat(prompt('Ingrese el segundo valor'));

if (operacion == 1) {
  console.log(suma(num1, num2));
}

function suma(a, b) {
  return a + b;
}
1