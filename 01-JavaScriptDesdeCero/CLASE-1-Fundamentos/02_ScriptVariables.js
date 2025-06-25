
//let,const y var no se ocupa ya casi

let precio = 125;
let impuesto = precio *0.18;
let descuento= precio*0.1;
let preciofinal= precio+impuesto-descuento;
console.log(preciofinal);

const gravedad =9.8;

{
    let a='a';
    //ambito de bloque
}
console.log(a);