
//clase -> plantilla d ela cual se crean objetos
//intancia->cada objeto creado a partir de una clases
//constructor -> es una funcion que se ejecuta automaticamente al instanciar una clase
//*propiedad son valores y los *metodos son funcions todo dentro d elos objetos

//en esc6 aparesen las clases
//java script es un lenguaje basado en prototipos


//CREACION DE UNA CLASE PERSONA  con una funcion saludar
class Persona{

    constructor(nombre,apellido,pais){

        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
        this.nombreCompleto =`${nombre} ${apellido}`

    }

    saludar(){
        return`Hola, soy ${this.nombreCompleto} y vivo ${this.pais}`;
    }
}

const alexys=new Persona('Alexis','Lozada','Colombia');
console.log(alexys.saludar());
const juan=new Persona('Juan','martin','Argentina');
console.log(juan.saludar());

//herencia creacion de subclase
class Profesor extends Persona{

    constructor(nombre,apellido,pais,curso,tecnologias){
        super(nombre,apellido,pais,);
        this.curso=curso;
        this.tecnologias=tecnologias;

    }

    invitarAlCurso(){
        return`Hola, soy${this.nombreCompleto} y te invito al curso de ${this.curso}, nos vemos en clases`
    }
}


const daniel=new Profesor('daniel','martinez','argentina','php');
console.log(daniel.saludar())
console.log(daniel.invitarAlCurso());