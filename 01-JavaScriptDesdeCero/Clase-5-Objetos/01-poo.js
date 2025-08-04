
//clase -> plantilla d ela cual se crean objetos
//intancia->cada objeto creado a partir de una clases
//constructor -> es una funcion que se ejecuta automaticamente al instanciar una clase
//*propiedad son valores y los *metodos son funcions todo dentro d elos objetos

//en esc6 aparesen las clases
//java script es un lenguaje basado en prototipos
var Profesor = function (nombre,apellido,pais){

    this.nombre=nombre;
    this.apellido=apellido;
    this.pais=pais;
}

var jon=new Profesor('jon','mircha','mexico');
var alexys=new Profesor('alexys','leozano','colombia');


console.log(jon);
console.log(alexys);


let string = new String('Hola mundo');
console.log(string);

let string2='hola mundo2';
console.log(string2)


//

// const jon={
// nombre:'jon',
// apellido:'mircha',
// cursos:['node.js','react.js'],
// pais:'mexico'
// };



