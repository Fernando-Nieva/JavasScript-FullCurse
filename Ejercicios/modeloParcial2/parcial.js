// TUP - Programación 1
// 2° Parcial

//Nombre: 
//Apellido:

//Este archivo contiene el arreglo de empleados, el cual tien datos necesario para hacer los puntos del examen


const empleados = [
    { id: 1, nombre: "Carlos", apellido: "Pérez", departamento: "Recursos Humanos", salario: 35000 },
    { id: 2, nombre: "Ana", apellido: "López", departamento: "Ventas", salario: 40000 },
    { id: 3, nombre: "Luis", apellido: "Gómez", departamento: "Marketing", salario: 45000 },
    { id: 4, nombre: "Laura", apellido: "Martínez", departamento: "IT", salario: 50000 },
    { id: 5, nombre: "Jorge", apellido: "Hernández", departamento: "Finanzas", salario: 55000 },
    { id: 6, nombre: "María", apellido: "Díaz", departamento: "Recursos Humanos", salario: 36000 },
    { id: 7, nombre: "Pedro", apellido: "Sánchez", departamento: "Ventas", salario: 41000 },
    { id: 8, nombre: "Sara", apellido: "Rodríguez", departamento: "Marketing", salario: 46000 },
    { id: 9, nombre: "Diego", apellido: "Fernández", departamento: "IT", salario: 51000 },
    { id: 10, nombre: "Andrea", apellido: "García", departamento: "Finanzas", salario: 56000 },
    { id: 11, nombre: "Alicia", apellido: "Vargas", departamento: "Recursos Humanos", salario: 37000 },
    { id: 12, nombre: "Patricia", apellido: "Torres", departamento: "Ventas", salario: 42000 },
    { id: 13, nombre: "Manuel", apellido: "Ramírez", departamento: "Marketing", salario: 47000 },
    { id: 14, nombre: "Sofía", apellido: "Morales", departamento: "IT", salario: 52000 },
    { id: 15, nombre: "Raúl", apellido: "Ortega", departamento: "Finanzas", salario: 57000 },
    { id: 16, nombre: "Camila", apellido: "Castro", departamento: "Recursos Humanos", salario: 38000 },
    { id: 17, nombre: "Fernando", apellido: "Flores", departamento: "Ventas", salario: 43000 },
    { id: 18, nombre: "Leticia", apellido: "Vargas", departamento: "Marketing", salario: 48000 },
    { id: 19, nombre: "Juan", apellido: "Reyes", departamento: "IT", salario: 53000 },
    { id: 20, nombre: "Gloria", apellido: "Mendoza", departamento: "Finanzas", salario: 58000 }
];
console.log("Total de empleados: ", empleados.length)

//Para realizar los ejercicios el enunciado está en el index.html.
//Recuerden, los temas que podemos usar son: manejo de variables, array, funciones, iteradores tradicionales y los arrayMethods.



//Ejer1
console.log("---Ejer 1---")


//Ejer2
console.log("---Ejer 2---")


//Ejer3
console.log("---Ejer 3---")


//Ejer4
console.log("---Ejer 4---")


//Ejer5
console.log("---Ejer 5---")

function agregarPersonal(array){
//en el parcial lo cree dentro y esto funciona pero no es util realmente
// const Elnuevo = { id: 21, nombre: "Juan", apellido: "Otero", departamento: "IT", salario: 59000 };
empleados.push(array); 
const IT=empleados.filter(emp=>emp.departamento ==="IT");
    IT.forEach(element => {
        console.log(element)
    });
}
const Elnuevo = { id: 21, nombre: "Juan", apellido: "Otero", departamento: "IT", salario: 59000 };
agregarPersonal(Elnuevo)