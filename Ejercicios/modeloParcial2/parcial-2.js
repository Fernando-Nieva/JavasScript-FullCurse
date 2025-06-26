//modelo del parcial facil
//Array de objetos personajes de juego

const personajes = [
  { nombre: "Arkon", habilidades: ["espada", "sigilo"], fuerza: 80, escudo: 50, disponible: true },
  { nombre: "Mira", habilidades: ["magia", "telepatía"], fuerza: 65, escudo: 40, disponible: true },
  { nombre: "Thorn", habilidades: ["fuerza bruta", "resistencia"], fuerza: 95, escudo: 70, disponible: false },
  { nombre: "Lyra", habilidades: ["arquería", "camuflaje"], fuerza: 70, escudo: 45, disponible: true },
  { nombre: "Zar", habilidades: ["velocidad", "golpe crítico"], fuerza: 75, escudo: 30, disponible: false },
  { nombre: "Kai", habilidades: ["tecnología", "curación"], fuerza: 60, escudo: 55, disponible: true },
  { nombre: "Nova", habilidades: ["explosivos", "armas"], fuerza: 85, escudo: 65, disponible: true },
  { nombre: "Rex", habilidades: ["comando", "liderazgo"], fuerza: 90, escudo: 50, disponible: true },
  { nombre: "Ira", habilidades: ["psíquico", "barrea mental"], fuerza: 55, escudo: 60, disponible: false },
  { nombre: "Vega", habilidades: ["navegación", "estrategia"], fuerza: 68, escudo: 40, disponible: true },
  { nombre: "Blaze", habilidades: ["fuego", "explosión"], fuerza: 88, escudo: 35, disponible: true },
  { nombre: "Frost", habilidades: ["hielo", "control de clima"], fuerza: 66, escudo: 48, disponible: false },
  { nombre: "Shade", habilidades: ["invisibilidad", "asesinato"], fuerza: 72, escudo: 38, disponible: true },
  { nombre: "Bolt", habilidades: ["electricidad", "velocidad"], fuerza: 77, escudo: 42, disponible: true },
  { nombre: "Golem", habilidades: ["piedra", "resistencia"], fuerza: 99, escudo: 80, disponible: false },
  { nombre: "Echo", habilidades: ["sonido", "vibración"], fuerza: 69, escudo: 44, disponible: true },
  { nombre: "Ash", habilidades: ["cenizas", "visión térmica"], fuerza: 73, escudo: 37, disponible: true },
  { nombre: "Solar", habilidades: ["energía solar", "luz"], fuerza: 81, escudo: 53, disponible: false },
  { nombre: "Luna", habilidades: ["magia lunar", "sueño"], fuerza: 64, escudo: 39, disponible: true },
  { nombre: "Titan", habilidades: ["gigantismo", "golpe terrestre"], fuerza: 100, escudo: 85, disponible: false }
];

// Ejercicio 1: Mostrar personajes disponibles
// Objetivo: Mostrar por consola los nombres de todos los personajes disponibles (disponible === true) usando filter y forEach.
console.log("----punto 1----")
function mostrarPersonajes(lista) {

    let nuevosPersonajesDisponibles = lista.filter(personaje => personaje.disponible);
    
    nuevosPersonajesDisponibles.forEach(element => { 
        console.log(element.nombre);
    });
}
mostrarPersonajes(personajes);

// Ejercicio 2: Buscar personaje por nombre
// Objetivo: Crear una función que reciba un nombre de un personaje y muestre las habilidades y fuerza si existe.
console.log("----punto 2----")

function buscarPersonajes(nombre) {
    
    const encontrado = personajes.find(pers => pers.nombre === nombre);

    if (encontrado) {
        console.log("Se encontró a",encontrado.nombre);
        console.log("Su habilidad es ", encontrado.habilidades.join(" - "));
        console.log("Fuerza ", encontrado.fuerza);
    }else{
        console.log("No existe el personaje")
    }

}

buscarPersonajes("Bolt");

// Ejercicio 3: Listar los personajes con fuerza mayor a 80
// Objetivo: Usar filter y map para crear un nuevo array con los nombres de los personajes fuertes y mostrar el array nuevo en la consola.
console.log("----punto 3----")

function mostrarPersonajesconFuerza(power, lista) {

    let nuevosPersonajesFuerza = lista.filter(personaje => personaje.fuerza >= power );
    
    nuevosPersonajesFuerza.map(element => { 
        console.log(`El personaje ${element.nombre} con fuerza ${element.fuerza}`);

    });
}

// mostrarPersonajesconFuerza(80, personajes)
mostrarPersonajesconFuerza(90, personajes)

// Ejercicio 4: Calcular promedio de fuerza de personajes disponibles
// Objetivo: Utilizar reduce para calcular el promedio de fuerza solo de los personajes disponibles.
console.log("----punto 4----")

function promedioFuerzaDisponibles(lista) {
  const disponibles = lista.filter(pers => pers.disponible);
  const total = disponibles.reduce((acumular, pers) => acumular + pers.fuerza, 0);
  const promedio = (total / disponibles.length).toFixed(2); //.toFixed(2) permite mostrar la cantidad deseada de valores despues de la coma en este caso 2 decimales. Se aplica al valor obtenido del cociente por eso está con el paréntesis.
  console.log(`Promedio de fuerza (disponibles): ${promedio}`);
}
promedioFuerzaDisponibles(personajes);

// Ejercicio 5: Clasificar personajes por escudo (bajo, medio, alto)
// Objetivo: Clasificar con estructura if según nivel de escudo.
console.log("----punto 5----")

function clasificarPorEscudo(pers) {
  pers.forEach(item => {
    let nivel = "";
    // nos conviene que la primera condición en el primer if el valor sea el mayor, luego ir trajando con los else if de menor valor.
    if (item.escudo >= 70) {
      nivel = "Alto";
    } else if (item.escudo >= 45) {
      nivel = "Medio";
    } else {
      nivel = "Bajo";
    }
    console.log(`${item.nombre}: Escudo ${item.escudo} → ${nivel}`);
  });
}
clasificarPorEscudo(personajes);

