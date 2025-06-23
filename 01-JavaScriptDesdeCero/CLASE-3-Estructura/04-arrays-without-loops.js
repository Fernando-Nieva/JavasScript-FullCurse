//.map()
//.filter()
//.reduce()

const estudiantes = [
  { nombre: "Ana", calificacion: 9 },
  { nombre: "Bruno", calificacion: 7 },
  { nombre: "Carla", calificacion: 9 },
  { nombre: "Diego", calificacion: 3 },
  { nombre: "Elena", calificacion: 10 },
  { nombre: "Ariadna", calificacion: 5},
  { nombre: "Eliana", calificacion: 8 },
];

//map(callback)
//transforma cada elemento del arrry segun  su callback
//y devuelve un nuevo array

// let estudiantesNombres =[];
// for (let i = 0; i < estudiantes.length; i++) {
//     estudiantesNombres.push(estudiantes[i].nombre)
// }
let estudiantesNombres=estudiantes.map(estudiante=>estudiante.nombre);
// parametro=>valorDeRetorno
console.log(estudiantesNombres);

//.filter(callback)
let estudiantesAprobados=estudiantes.filter(estudiante=>estudiante.calificacion>6)
let estudiantesAprobadosnombres=estudiantesAprobados.map(estudiantes => estudiantes.nombre)
console.log(estudiantesAprobadosnombres);


//.reduce(callback (prev , current ,i,arr),initial)
let numeros =[2,4,60,8,10];
let suma = numeros.reduce((a,b)=>a+b);
console.log(suma)

// let masAlto=numeros.reduce((num1,num2)=>{
//     if(num1>num2){
// return num1;  
//     }return num2
    
// });

// let masAlto=numeros.reduce((a,b)=>a>b ? a:b);
// console.log(masAlto);

let promedio = numeros.reduce((a,b)=> a+=b,0) /numeros.length;
console.log(promedio);

// let promedio2= numeros.reduce((a,b,i,numeros)=>{
//     b+=a;
//     if(i== numeros.length -1){
//         return b/numeros.length

//     }else {
//         return b
//     }
// })
let promedio2= numeros.reduce((a,b,i,numeros)=>{
    b+=a;
    return i==numeros.length-1?b/numeros.length:b;
});
console.log(promedio2)


// let mejorEstudiante = estudiantes.reduce((a,b)=>{if(a.calificacion >b.calificacion){
// return { nombre: a.nombre ,calificacion: a.calificacion}} else{ return{nombre: b.nombre ,calificacion: b.calificacion}}});
// console.log(mejorEstudiante);

const mejorEstudiante = estudiantes.reduce((a, b) => {
  return a.calificacion > b.calificacion ? a : b;
});
console.log(mejorEstudiante);