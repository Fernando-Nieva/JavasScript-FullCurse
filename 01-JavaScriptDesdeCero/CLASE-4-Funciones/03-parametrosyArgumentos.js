//Parametros y Argumentos

function sumar(a,b,c) {
   return c;
};
// let mysuma = sumar(2,3,5,6);
// console.log(mysuma);
//si hay mas parametros que argumentos ,los argumentos sobrantes son undefined
// let mysuma = sumar(2,3);

//si hay mas argumentos que parametros no devuelve error
let mysuma = sumar(2,3,4);
console.log(mysuma)

//   Spread operator (...) — "Expandir"
// Se usa para desarmar arreglos u objetos y meter sus elementos en otro lugar.
const [primero, ...resto] = [10, 20, 30, 40];
console.log(primero); // 10
console.log(resto);   // [20, 30, 40]


function sumarTodos(){
    return([...arguments].reduce((a,b)=>a+b))
    // let sum=0;
    // for(let i=0;i<arguments.length;i++){
    //     sum+=arguments[i];
    // }
    // return sum;
}
console.log(sumarTodos(1,2,3,4,5,6,7,8,9));
function sumar2(a,b){
    return a+b;
}
let numeros =[2,3]
// console.log(sumar2.apply(undefined,numeros));
console.log(sumar2(...numeros));
//parametros pro defecto

function resta (a,b=2){
    return a-b;
}
console.log(resta(4)); 

//parametros rest
// parámetro rest (rest parameter) 
// es una forma de capturar un número indefinido de argumentos en una función y guardarlos como un array

function sumarValores(m,n,...elements){
    return elements.reduce((a,b)=>a+b);
}
console.log(sumarValores('a','b',4,4,));
