let saludo='Bienvenido al curso'
//propiedades
let longitud=saludo.length;
console.log(saludo)
console.log(longitud)
//metodos
console.log(saludo.trim());
console.log(saludo.trim().toUpperCase());
console.log(saludo.trim().toLowerCase());


// metodos con parametros
// indexOf(String[,i])

let palabra ='hermahno';
console.log(palabra.indexOf('h'))
console.log(palabra[4])

console.log(palabra.lastIndexOf('h'));

let texto0 = 'abracadabra';
// Primera aparición de 'a'
console.log(texto0.indexOf('a'));      // 0
// Última aparición de 'a'
console.log(texto0.lastIndexOf('a'));  // 10

//replace (oldstrings,newstring)
let saludoo = "hola feet ¡qué bueno que estés aquí!";

// Creamos una nueva cadena donde reemplazamos la primera ocurrencia
let nuevoSaludo = saludoo.replace('hola feet ', 'Bienvenido al curso');

// Imprimimos la cadena resultante
console.log(nuevoSaludo);
// → "Bienvenido al curso¡qué bueno que estés aquí!"

// Imprimimos la cadena original para ver que no se modificó
console.log(saludoo);
// → "hola feet ¡qué bueno que estés aquí!"


//split ('separador',N)

let array1=saludoo.split(' ',3);
console.log(array1);

//substring(a,b),subtr(a,b),slice(a,b)

const texto = "JavaScript";  // longitud = 10

// 1) substring(start, end)
//    - start: índice donde empieza (incluido)
//    - end (opcional): índice donde termina (no incluido)
//    - si start > end, se intercambian internamente.
//    - no acepta índices negativos.
console.log( texto.substring(0, 10) );   // "Java"
// desde 0 hasta 4 (4 no incluido): J, a, v, a

console.log( texto.substring(4) );      // "Script"
// sin end: va desde índice 4 hasta el final

console.log( texto.substring(7, 4) );   // "Scrip"
// se intercambian 7 y 4 → substring(4,7): índices 4,5,6

console.log( texto.substring(-3, 4) );  // "Java"
// índices negativos se tratan como 0 → substring(0,4)


// 2) substr(start, length)
//    - start: índice donde empieza (incluido)
//    - length (opcional): número de caracteres a extraer
//    - si start es negativo, cuenta desde el final.
//    - deprecated, pero aún funciona en muchos navegadores.
console.log( texto.substr(0, 4) );   // "Java"
// desde 0, extrae 4 caracteres

console.log( texto.substr(4, 3) );   // "Scr"
// desde 4, extrae 3 caracteres: S, c, r

console.log( texto.substr(4) );      // "Script"
// si no pones length: del 4 hasta el final

console.log( texto.substr(-6, 3) );  // "Scr"
// start = -6 → posición 10 - 6 = 4, extrae 3: S, c, r


// 3) slice(start, end)
//    - start: índice donde empieza (incluido)
//    - end (opcional): índice donde termina (no incluido)
//    - acepta índices negativos (desde el final)
//    - no intercambia start/end si start > end (devuelve "").
console.log( texto.slice(0, 4) );    // "Java"
// igual que substring en este caso

console.log( texto.slice(4) );       // "Script"
// sin end: va hasta el final

console.log( texto.slice(4, 7) );    // "Scr"
// índices 4,5,6

console.log( texto.slice(-6, -3) );  // "Scr"
// -6 → 10-6=4, -3 → 10-3=7, extrae 4,5,6

console.log( texto.slice(7, 4) );    // ""
// start > end → cadena vacía



//nuevos metodos es6
//.startwith(),endwith(),includes()
// const texto = "JavaScript";  // longitud = 10
// 1. startsWith(subcadena[, posición])

console.log( texto.startsWith("Java") );        // true
console.log( texto.startsWith("Script") );      // false
console.log( texto.startsWith("Script", 4) );   // true
// empieza a comprobar desde el índice 4: "JavaScript…" → "Script…"

// 2. endsWith(subcadena[, longitud])
const archivo = "foto.png";

console.log( archivo.endsWith(".png") );     // true
console.log( archivo.endsWith("foto") );     // false
console.log( archivo.endsWith("foto", 4) );  // true
// mira solo los primeros 4 caracteres: "foto"
// 3. includes(subcadena[, posición])
const frase = "Aprendo JavaScript todos los días";

console.log( frase.includes("Java") );         // true
console.log( frase.includes("javascript") );   // false (sensible a mayúsculas)
console.log( frase.includes("los", 16) );      // true
// busca "los" a partir del índice 16: "… todos…"

