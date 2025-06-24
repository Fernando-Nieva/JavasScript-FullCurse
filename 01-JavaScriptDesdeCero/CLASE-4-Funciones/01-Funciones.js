
//Las funciones son bloques de codigo reutilizables 
//function nombre de la funcion (parametro1,parametro2,parametro3)
// {
// codigo
// }

//PARAMETRO: es la variable temporal que existe en la funcion,
// ARGUMENTO : son los datos reales que s epasan al momento de ejecutar la funcion
function sumar(a, b) {
    // if(a>b){
        
    //     return a+b;
    // }
    // return b;
    return {     
        a: 7,
        b: 8
    }
}
let miSUma = sumar(7, 5);
console.log(miSUma);

//cuando una funcioncion esta dentro de un objeto ya se llama metodo

let Obj = {
    nombre: 'objeto',
    sumar(a, b) {
        return a + b
    }
}

 let otrasuma= Obj.sumar(5,5);
 console.log(otrasuma);

 //Funciones dentro de otra funcion
 function restar(a){
    return function(b){
        return a-b;
    }
 }

 let miResta= restar(5)(3);
 console.log(miResta)

 //Funciones AutoInvocadas

const resultado = (function(a, b) {
  return a * b;
})(5, 2);
console.log(resultado); // 10


//funcion constructora se usa new

let Pais =function(nombre,moneda){
    this.nombre=nombre;
    this.moneda=moneda;
}

let Argentina= new Pais('Argentina','Peso');
console.log(Argentina)


//apply() y call()


function add(a,b,c){
    return a+b+c;
}

let numeros=[2,3,4];
//forma inderecta aplly
let myadd=add.apply(undefined,numeros);
console.log(myadd)

let myOtherAdd=add.call(undefined,2,3,4);
console.log(myOtherAdd);
