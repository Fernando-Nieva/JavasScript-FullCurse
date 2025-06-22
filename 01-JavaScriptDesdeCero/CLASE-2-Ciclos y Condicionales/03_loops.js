//for
const profesores = [
  "María López",
  "Juan Pérez",
  "Ana García",
  "Carlos Rodríguez",
  "Lucía Fernández",
  "Miguel Sánchez",
  "Sofía Martínez",
  "Diego Gómez",
  "Laura Díaz",
  "Fernando Torres"
];
for (let i = 0; i < profesores.length; i++) {
  // Separamos por espacio y nos quedamos con el primer elemento (el nombre)
  //break y continue
  const nombre = profesores[i].split(" ")[0];

  // Comprobamos su longitud
  if (nombre.length < 5) {
    console.log(nombre);
  }
}



//while
let x =100;

while(x >0){

    console.log('decreciendo')
    x--;
}

//do while
let password ='ed';
let contraseña;
do{
     contraseña=prompt('Ingrese password')
}while(contraseña != password)


//for of(Es6)    

let nombre ='Alvaro'
for(let value of nombre){

    console.log(value)
}

const frutas = ['manzana', 'banana', 'cereza'];

// for…of itera sobre cada elemento del array
for (const fruta of frutas) {
  console.log(fruta);
  // Puedes usar break/continue
  if (fruta === 'banana') continue;
  // → manzana
  // → banana
  // → cereza
}

// Array de nombres de profesores
const profesores2 = [
  'María López',
  'Juan Pérez',
  'Ana García'
];

// Recorremos el array usando forEach, que ejecuta la función callback
// una vez por cada elemento del array.
profesores2.forEach((profe, idx, arr) => {
  // profe: el elemento actual del array (por ejemplo "María López")
  // idx: el índice de ese elemento (0, 1, 2…)
  // arr: el array completo (profesores)

  // Imprimimos "índice: nombre"
//   console.log(`${idx}: ${profe}`);
  // Ejemplo de salida:
  // 0: María López
  // 1: Juan Pérez
  // 2: Ana García

  // Si quisiéramos "saltar" la lógica restante de esta iteración
  // (equivalente a continue), podemos usar return dentro de forEach.
  if (profe.startsWith('Juan')) {
    // Al encontrar "Ana García", salimos de esta iteración
    return; 
  }

  // Aquí podríamos poner más lógica para todos los profesores
  // excepto los cuyo nombre empiece con "Ana"
  console.log(`${idx}: ${profe}`);
});
