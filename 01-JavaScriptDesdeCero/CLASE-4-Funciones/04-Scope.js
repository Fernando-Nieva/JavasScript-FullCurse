//scope es el ambito o contexto donde
//se ejecuta una funcion y existen sus variables

//variable glbal puedo acceder en cualquier parte
//loacal solamente en un habito definido existe y afuera no

let  hola;
function holamundo(){
    hola='hola mundo';
}

holamundo();
console.log(hola);
function holaDeNuevo(){
    hola='hola de nuevo';
}

holaDeNuevo();
console.log(hola)

function sumar(a){
    return function(b){
        return a+b;
        //la funciones que estan dentro de otra funcion pueden acceder al scopeque esta por fuera de ellas
    }
}

let misuma=sumar(5)(1);
console.log(misuma)

//CLOSURES
// function despedir(){
//     let despedir ='adios';

//    return function saludo2(){
//         console.log(despedir)
//     }
// }

// despedir()();
function despedir() {
  let mensaje = 'Adiós, ';

  return function saludo2(amigo) {
    console.log(`${mensaje}${amigo}`);
  }
}

let midespedida = despedir(); // midespedida ahora es una función

midespedida('Martín'); // 👉 "Adiós, Martín"
midespedida('Gabo');   // 👉 "Adiós, Gabo"

function crearContador() {
  // Esta variable "contador" está dentro del alcance de crearContador
  let contador = 0;

  // Esta función interna puede usar "contador" aunque esté definida adentro
  return function() {
    contador++;
    console.log(`Contador: ${contador}`);
  }
}
const contar = crearContador();

contar(); // 👉 Contador: 1
contar(); // 👉 Contador: 2
contar(); // 👉 Contador: 3
crearContador()();
crearContador()();

