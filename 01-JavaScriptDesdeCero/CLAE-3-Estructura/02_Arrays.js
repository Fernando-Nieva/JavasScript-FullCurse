let arr=[1,2,3,4,5,'true',6];
       //0-1-2-3-4-5-6


    //  iNDEX OFF  -nos encuentra el elemento que queremos buscar en la direccion de memoria  
// console.log(arr.indexOf('true'));

// Agregar elementos con.push(el1,el2,el3)-> añade al final
// .unshift(el1,el2,el3)->añade al inicio

// arr.push('javascript','desde','cero');
// console.log(arr);
// arr.unshift('javascript','desde','cero');
console.log(arr.length);
let newLength =arr.unshift('javascript','desde','cero');
console.log(arr);
console.log(newLength);


