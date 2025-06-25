//case sensitive
//punto y coma(semicolon-ASI)
//espacios en blanco

let holaMundo='Hola mundo';
console.log(holaMundo);

{
    //la paretesis es un bloque
    let hola='hola';
    console.log(hola)
}

//No usar var porque nos va dar hosting
console.log(x); // undefined, ¡no ReferenceError!
var x = 5;
// …el motor de JS internamente “sube” la declaración de var x al principio de su contexto (función o global), como si hubieras escrito:var x;           // declaración hoisted
// console.log(x);  // undefined
// x = 5;           // asignación queda donde estaba
// Por eso no falla con ReferenceError, pero sí obtienes undefined en lugar del valor que quizá esperabas. Esto es hoisting.

