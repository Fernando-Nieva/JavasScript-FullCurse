//Objetos
//da una estructura de datos mas detallada que un array
//propiedad  y el vaor

// let myObj={
//     nombre: 'Fernando',
//     edad: 32,
//     pais: 'Argentina',
//     espadre: false,
//     mascotas: ['Beto','LaVieja']

// }

// console.log(myObj.nombre);
// console.log(myObj.edad);
// console.log(myObj.espadre);
// console.log(myObj.mascotas);

// myObj.cudad='Formosa'
// console.log(myObj);

const ED={
nombre:'Escuela Digital',
sedes:['Bogota','Lima'],
profesores:['Alexys','Daniel','Rafa','Jhon','Francisco','Jose','Alvaro'],
fundacion:2010,
mejorPlataforma:true,
eslogan:'Aprender Desde Cero',
usp:'Somos el primer sitio en español de Educacion Orientada a Proyectos',
saludar(){
return 'Bienvenidos a escuela digital.Te deseamos un feliz aprendisaje'
}

};

ED.comunidad=true;

console.log(ED)

//Operadores
//delete -> elimina una propiedad
//in -> devuelve true si exite la propiedad en el obj O EN LA CADENA DE PROTOTIPO

// console.log(ED.fundacion)
// delete ED.fundacion;
// console.log(ED.fundacion)
Object.prototype.numeroMagico =27;
// console.log('profesores'in ED);
// console.log('numeroMagico'in ED);
// console.log(ED.numeroMagico);

//hasOwnProperty -> si al propiedad esta en el objeto
console.log(ED.hasOwnProperty('numeroMagico'));

//aunque este en const puedo agregarle propiedades 
console.log(ED.hasOwnProperty('comunidad'));

//ES6
//copiar un obj
// let ED2=Object.assign({},ED);
// console.log(ED);


//Asignar variables existentes a propiedades

let a='hola' ,b='mundo';
let myObj={

    a,
    b
}
console.log(myObj)

//Expresiones en propiedades

let myObj2={
    //Expresion cualquier  enunciado que devuelve un valor 
    [a+b]: 'Hola mundoo'
}
console.log(myObj2)
