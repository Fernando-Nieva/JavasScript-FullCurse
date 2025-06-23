
let arr=[1,2,3,4,5,'true',6];
       //0,1,2,3,4 espacios de memoria


// console.log(arr.length);
// console.log(arr[4]);

let sum=0;
for(let index=0 ; index< arr.length;index++){
    let elelement=arr[index];
    // console.log(elelement)
    // console.log(index);


// caso en el que si los elementos son  numeros hacer algo
// if(typeof elelement == 'number'){
    
//     sum+=elelement;
// }



// caso en el que si los elementos son  distinotosa a numeros saltar y continua

    if(typeof elelement != 'number')continue ;
     sum+=elelement;
    


}

console.log(sum)
// voy al prototipe y le añado la propiedad saludo
Array.prototype.saludo="hola";
console.log(arr.saludo)