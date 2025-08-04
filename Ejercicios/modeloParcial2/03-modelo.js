// MODELO NUEVO - PARCIAL FÁCIL
// Array de objetos de mascotas mágicas

const mascotas = [
  { nombre: "Firulais", tipo: "perro", poder: 70, edad: 5, disponible: true },
  { nombre: "Mishi", tipo: "gato", poder: 85, edad: 3, disponible: true },
  { nombre: "Roco", tipo: "dragón", poder: 95, edad: 100, disponible: false },
  { nombre: "Luna", tipo: "búho", poder: 60, edad: 4, disponible: true },
  { nombre: "Kira", tipo: "lobo", poder: 88, edad: 6, disponible: true },
  { nombre: "Tito", tipo: "conejo", poder: 50, edad: 2, disponible: false },
  { nombre: "Max", tipo: "águila", poder: 75, edad: 8, disponible: true }
];

// 🐾 Ejercicio 1: Mostrar mascotas disponibles
// Objetivo: Mostrar los nombres de las mascotas disponibles usando filter y forEach.


function mostrarMascotas(lista){
  
    const disponible=lista.filter(element =>element.disponible)
    disponible.forEach(element => {

        console.log(element.nombre) 

});
}

mostrarMascotas(mascotas);

// 🔍 Ejercicio 2: Buscar mascota por nombre
// Objetivo: Usar find para mostrar los datos de una mascota específica.
console.log('-----------------------2-----------------------------------')

function buscarMascota(nombre){
    
    const encontrado = mascotas.find(mascota=>mascota.nombre===nombre);
    if(encontrado){
        console.log(`mascota encontrada mnombre:${encontrado.nombre} tipo:${encontrado.tipo} `);
    }else{
        console.log('Lo siento tu mascota ya esta con san pedro')
    }
}
buscarMascota("Kira");

// 💪 Ejercicio 3: Mascotas con poder mayor a 80
// Objetivo: Usar filter + map para mostrar solo las poderosas.
console.log('-----------------------3-----------------------------------')
function MascotaPoder(lista){

const mascotasFuertes = lista.filter(e=> e.poder >80)
const nombres = mascotasFuertes.map(e=>e.nombre);
console.log("Mascotas con poder mayor a 80:", nombres);

}

MascotaPoder(mascotas);