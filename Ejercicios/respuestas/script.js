// creamos las variables:
//Primer mensaje para ingresar la operación
let mensaje = prompt(`Calculadora: Ingrese la opción para la operación [1 - Sumar, 2 - Restar, 
            3 - Multiplicar, 4 - Dividir]`);

//variables para introducir los valores - usamos parseInt() para operar los valores ingresados

let num1;
let num2;
let resultado;

//Impedir que pida los números num1 y num2 no sean vacios
if (mensaje!=""){
    if (mensaje>= 1 && mensaje<= 4){
         num1 = parseInt(prompt("Ingresar el 1° Número: "));
         num2 = parseInt(prompt("Ingresar el 2° Número: "));
    }else{
        document.write("Ingrese un valor correcto");
    }
}else{
    document.write("Ingrese una opción correcta");
}

//definimos las funciones para las operaciones

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}

if (mensaje == 1) {
    resultado = suma(num1, num2);
    document.write("El resultado de la suma es: " + resultado);
} else if (mensaje == 2) {
    resultado = resta(num1, num2);
    document.write("El resultado de la resta es: " + resultado);
} else if (mensaje == 3) {
    resultado = multiplicar(num1, num2);
    document.write("El resultado de la multiplicación es: " + resultado);
} else if (mensaje == 4) {
    resultado = dividir(num1, num2);
    document.write("El resultado de la división es: " + resultado);
}else{
    alert("El valor ingresado no es correcto");
    //resultado="El valor ingresado no es correcto";
}

