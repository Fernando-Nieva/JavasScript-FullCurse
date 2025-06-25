//tipos de funciones
//funciones por definicion y por extension

function nombreFuncion(){
    //cuerpo d ela  funcion
    //funcionpor definicion
};

nombreFuncion();

let funcionPorExpresion=function(){
    //cuerpo de la funcion
};
funcionPorExpresion();

let c=console.log;
c('hola mundo')

//funciones nombradas y funciones anonimas
//recursiva dentro de la funcion se vuelve a llamar a la  misma funcion
//callback = una funcion que es ejecutad apor otra luego de un proceso

// el.addEventListener('click',function(){
// //funcion anonima
// //hacer algo
// });
//Funciones flecha (Arrow funtion) ESC6,son funciones anonimas
//(param1,pparam2,param3)=> valorRetorno

let suma = (a,b)=> a+b;
let mySuma = suma(5,2)
c(mySuma);

// let cuadrado = (a)=>{
//     if(typeof a== 'number'){
//         return a*a
//     };
// };

//refactorizar rescribir el codigo mejor
let cuadrado=(a)=>(typeof a=='number') ?a*a:undefined;
let mycuadrado=cuadrado(6);
console.log(mycuadrado)

//usar parentesis en arrow funcion para devolver objt
let myObj =(a,b)=>({a,b});
let myCustomObjt = myObj('hola','mundo');
console.log(myCustomObjt);