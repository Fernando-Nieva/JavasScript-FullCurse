// let arr=[1,2,3,4,5,'true',6];
       //0-1-2-3-4-5-6

    //  iNDEX OFF  -nos encuentra el elemento que queremos buscar en la direccion de memoria  
// console.log(arr.indexOf('true'));

// Agregar elementos con.push(el1,el2,el3)-> añade al final
// .unshift(el1,el2,el3)->añade al inicio

// arr.push('javascript','desde','cero');
// console.log(arr);
// arr.unshift('javascript','desde','cero');
// console.log(arr.length);
// let newLength =arr.unshift('javascript','desde','cero');
// console.log(arr);
// console.log(newLength);

// Eliminar un solo elemento sin parametros
// Estos metodos deveuelven el elemento eliminado
// .pop()al final y .shift()al inicio

// console.log(arr);
// let deletedEl=arr.pop();
// console.log(arr);
// console.log(deletedEl);

// .join('separador')
// 'separador' es por defecto una coma;
// console.log(arr.join(','))
// splice(a,b,items)
// añade o quita elementos
// console.log(arr);
// arr.splice(2,2);//elimina2elementos
// arr.splice(2,2,'escuel','amigo','digital');//añade 2 elementos, eliminando si agrego mas
// arr.splice(2,0,'escuela','amigo','digital');//añade elementos 0 sin eliminar nada 

// let arr2=arr.slice(0,5);//es un nuevo array no es el mismo es una copia
// let arr3=arr esto e suna referencia , no e suna copia sigue dependiendo de array original 
// console.log(arr);
// console.log(arr2);


//ES6
//arrow function
// parametro => //valor retorno

// Array.find(cb);

let arr2 =[9,2,6,7,5];
let num = arr2.find(el => el >2);
numIndex= arr2.findIndex(el => el>3);
console.log(numIndex);
console.log(num);

//Interadores
//son objetos que contienen metodo next()
//ese metodo devuelve un objeto con dos propiedades
//value,done y sigue recordadon si posicion

//.keys() .values()  .entries()

// let interador = arr2.keys();
// let interador = arr2.entries();
let interador = arr2.values();
console.log(interador.next());
console.log(interador.next());
console.log(interador.next());
console.log(interador.next());
console.log(interador.next());
console.log(interador.next());

